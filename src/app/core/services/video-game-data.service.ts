import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/interface/game';

@Injectable({
  providedIn: 'root',
})
export class VideoGameDataService {
  constructor(private readonly _httpClient: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this._httpClient.get<Game[]>(`${environment.BASE_URI}`);
  }
}
