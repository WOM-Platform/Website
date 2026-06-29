import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Subscription, Observable, of, firstValueFrom } from "rxjs";
import { Aim, AimEditing } from "../../../_models";
import { AimsService } from "../../../_services";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-dialog-create-instrument",
  templateUrl: "./dialog-create-instrument.component.html",
  styleUrls: ["./dialog-create-instrument.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DialogCreateSourceComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  newSource!: FormGroup;
  showAddAccessButton = false;
  isLoading = false;
  aimList: Aim[] = [];
  private subscriptions: Subscription = new Subscription(); // To manage subscriptions

  constructor(
    private aimsService: AimsService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogCreateSourceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.newSource = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      url: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]+)(:[0-9]{1,5})?(\\/[^\\s]*)?$"
          ),
          Validators.minLength(10),
        ],
      ],
      aims: this.fb.group({
        enabled: this.fb.array([this.fb.control("")]),
        enableAll: [false],
      }),
      access: [[]],
    });

    this.subscriptions.add(
      this.newSource.valueChanges.subscribe(() => {
        this.showAddAccessButton = this.newSource.valid;
      })
    );
  }

  // to ensure that form controls are initialized
  ngAfterViewInit() {
    setTimeout(() => this.updateAimsArray([]), 0);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {
    if (this.newSource.valid) {
      const formData = this.newSource.value;
      this.dialogRef.close(formData);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onUpdateSourceField(key: string, value: any, isTableToUpdate: boolean) {
    if (key === "aims") {
      this.updateAimsArray(value.enabled);
      this.newSource.get("aims")?.get("enableAll")?.setValue(value.enableAll);
    } else {
      this.newSource.get(key)?.setValue(value);
    }
  }

  async updateAimsArray(enabledAims: string[]) {
    const aimsArray = this.newSource.get("aims")?.get("enabled") as FormArray;
    if (!aimsArray) return;

    while (aimsArray.length) {
      aimsArray.removeAt(0);
    }

    enabledAims.forEach((aim) => aimsArray.push(this.fb.control(aim)));

    try {
      const aimsView = await firstValueFrom(
        this.aimsService.fetchAimsForInstrument({
          enabled: enabledAims,
          enableAll: false,
        })
      );

      this.aimList = aimsView || [];
      this.cd.detectChanges();
    } catch (err) {
      console.error(err);
    }
  }

  handleAccessList(accessEl: any) {
    const currentAccess = this.newSource.get("access")?.value || [];
    this.newSource.get("access")?.setValue([...currentAccess, accessEl.access]);
  }
}
