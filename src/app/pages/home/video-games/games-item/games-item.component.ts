import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/core/models/game';

@Component({
  selector: 'app-games-item',
  templateUrl: './games-item.component.html',
  styleUrls: ['./games-item.component.scss'],
})
export class GamesItemComponent implements OnInit {
  @Input() game?: Game;

  constructor() {}

  ngOnInit(): void {}
}
