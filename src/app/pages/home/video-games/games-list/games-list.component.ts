import { Component, Input, OnInit } from '@angular/core';
import { SearchKeysEnum } from 'src/app/core/models/enum/search-keys.enum';
import { Game } from 'src/app/core/models/interface/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {
  @Input() games?: Game[];

  initialState?: Game[] = [];
  filtredGames?: Game[] = [];
  message: string = '';
  constructor() {}

  ngOnInit(): void {
    this.initialState = this.filtredGames = this.games;
  }

  public searchByString(key: string): void {
    if (key) {
      this.games = this.initialState?.filter((game) =>
        game.name.toLocaleLowerCase().includes(key.toLocaleLowerCase())
      );
      if (!this.games?.length) this.message = 'There is no match found';
    } else {
      this.clearFilters();
    }
  }

  public searchByKey(key: SearchKeysEnum): void {
    if (key === SearchKeysEnum.SCORE)
      this.games?.sort((a, b) => b.rating - a.rating);
    else if (key === SearchKeysEnum.NAME)
      this.games?.sort((a, b) => (a.name > b.name ? -1 : 1)).reverse();
    else
      this.games?.sort((a, b) => a.first_release_date - b.first_release_date);
  }

  public searchByMinRating(rate: number): void {
    this.games = this.initialState?.filter((game) => game.rating >= rate);
    if (this.games?.length === 0)
      this.message = 'There is no games matching this rating ' + rate;
  }

  public clearFilters(): void {
    this.games = this.initialState;
    this.message = '';
  }
}
