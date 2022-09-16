import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, tap } from 'rxjs';
import { Game } from 'src/app/core/models/interface/game';
import { VideoGameDataService } from 'src/app/core/services/video-game-data.service';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss'],
})
export class VideoGamesComponent implements OnInit {
  games$!: Observable<Game[]>;

  constructor(
    private videoGameDataService: VideoGameDataService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();

    this.games$ = this.videoGameDataService
      .getGames()
      .pipe(tap(() => this.spinner.hide()));
  }
}
