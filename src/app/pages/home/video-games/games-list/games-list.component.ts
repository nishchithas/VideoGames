import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/core/models/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {
  public games: Game[] = [];
  public initialState: Game[] = [];
  public filtredGames: Game[] = [];
  public message: string = '';
  constructor() {}

  ngOnInit(): void {
    this.games = [
      {
        id: 1,
        name: 'Game Title',
        first_release_date: 3,
        summary: 'string',
        rating: 10,
      },
    ];
  }
}
