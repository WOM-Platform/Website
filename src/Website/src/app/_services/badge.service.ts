import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Badge } from "../_models/badge";

@Injectable({
  providedIn: "root",
})
export class BadgeService {
  localUrlV1 = environment.baseUrl + environment.v1 + "badge/";

  constructor(private http: HttpClient) {}

  getAllBadges() {
    return this.http.get<Badge[]>(this.localUrlV1);
  }
  /**
   * Fetches a badge by its ID.
   * @param {string} id - The ID of the badge to fetch.
   * @returns {Observable<Badge>} An observable of the merchant list, optionally paginated and filtered by search term.
   */
  getBadge(id: string): Observable<Badge> {
    return this.http.get<Badge>(`${this.localUrlV1}${id}`);
  }

  createBadge(badge: Badge, image: File | null = null): Observable<Badge> {
    console.log("Creating badge", badge);
    return this.http.post<Badge>(this.localUrlV1, {
      name: badge.name,
      // challenge: badge.challenge,
      isPublic: badge.isPublic,
      // filter: badge.filter,
      description: badge.description,
      informationUrl: badge.informationUrl,
    });
  }

  uploadBadgeImage(badgeId: string, file: File): Observable<any> {
    console.log("Upload the image");
    return this.http.put<Badge>(`${this.localUrlV1}${badgeId}/image`, file, {
      headers: {
        "Content-Type": file.type, // e.g., image/png or image/jpeg
      },
    });
  }

  deleteBadge(badgeId: string) {
    return this.http.delete(`${this.localUrlV1}${badgeId}`);
  }

  updateBadge(badgeId: string, badgeData: any) {
    return this.http.put(`${this.localUrlV1}${badgeId}`, badgeData);
  }
}
