import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/core/models/game';
import { VideoGameDataService } from 'src/app/core/services/video-game-data.service';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss'],
})
export class VideoGamesComponent implements OnInit {
  games$!: Observable<Game[]>;

  constructor(private videoGameDataService: VideoGameDataService) {}

  ngOnInit(): void {
    this.games$ = this.videoGameDataService.getGames();
  }
}
