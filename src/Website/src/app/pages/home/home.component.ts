import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router){}

  async navigate(link: string): Promise<void> {
    await this.router.navigate(['/' + link]);
  }

  async navigateExternal(link: string): Promise<void> {
    window.open(link, '_blank');
  }
}
