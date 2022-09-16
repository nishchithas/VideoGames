import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/core/models/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {
  @Input() games?: Game[];

  initialState: Game[] = [];
  filtredGames: Game[] = [];
  message: string = '';
  constructor() {}

  ngOnInit(): void {}
}
