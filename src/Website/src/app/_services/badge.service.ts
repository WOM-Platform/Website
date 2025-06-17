import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Badge } from "../_models/badge";
import { Challenge } from "../_models/challenge";
import { b } from "@angular/core/navigation_types.d-u4EOrrdZ";

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
    return this.http.post<Badge>(this.localUrlV1, {
      name: badge.name,
      challengeId: badge.challengeId,
      isPublic: badge.isPublic,
      simpleFilter: badge.simpleFilter,
      description: badge.description,
      informationUrl: badge.informationUrl,
    });
  }

  uploadBadgeImage(badgeId: string, file: File): Observable<any> {
    return this.http.put<Badge>(`${this.localUrlV1}${badgeId}/image`, file, {
      headers: {
        "Content-Type": file.type, // e.g., image/png or image/jpeg
      },
    });
  }

  deleteBadge(badgeId: string) {
    return this.http.delete(`${this.localUrlV1}${badgeId}`);
  }

  updateBadge(badgeId: string, badgeData: Badge) {
    console.log("Updating badge with ID:", badgeData);
    const body = {
      challengeId: badgeData.challengeId,
      description: badgeData.description,
      informationUrl: badgeData.informationUrl,
      isPublic: badgeData.isPublic,
      name: badgeData.name,
      simpleFilter: {
        aim: badgeData.simpleFilter.aim,
        bounds: badgeData.simpleFilter.bounds,
        count: badgeData.simpleFilter.count,
        // interval: badgeData.simpleFilter.interval,
        sourceId: badgeData.simpleFilter.sourceId,
      },
      sortName: badgeData.sortName,
      image: badgeData.image,
      creationTimestamp: badgeData.creationTimestamp,
      updateTimestamp: badgeData.updateTimestamp,
    };

    return this.http.put(`${this.localUrlV1}${badgeId}`, body);
  }

  getAllChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(`${this.localUrlV1}challenge`);
  }

  createChallenge(challenge: Challenge) {
    return this.http.post<Badge>(`${this.localUrlV1}challenge`, {
      name: challenge.name,
      isPublic: challenge.isPublic,
      description: challenge.description,
      informationUrl: challenge.informationUrl,
    });
  }

  getBadgeChallenge(badgeChallengeId: string): Observable<Challenge> {
    return this.http.get<Challenge>(
      `${this.localUrlV1}challenge/${badgeChallengeId}`
    );
  }

  deleteBadgeChallenge(badgeChallengeId: string) {
    return this.http.delete(`${this.localUrlV1}challenge/${badgeChallengeId}`);
  }
}
