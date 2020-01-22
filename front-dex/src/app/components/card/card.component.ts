import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Pokemon from 'src/app/models/interfaces/Pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemon: Pokemon;
  pokemonStorage: string = 'pokemon';

  constructor() { }

  ngOnInit() {
  }

  caughtCheck(pokemon: Pokemon): void {
    pokemon.is_caught = !pokemon.is_caught;
    localStorage.setItem(this.pokemonStorage, `${pokemon.id}`);
  }

  setBackgroundColor(types: Pokemon['types'] | string, name: string): string{
    const className: string = name;
    let expression: string;

    if (typeof types !== 'string') {
      expression = types.length === 2 ?  types[1].type.name :  types[0].type.name;
    } else {
      expression = types;
    }
    switch(expression) {
      case 'normal':
        return className + '--normal';
      case 'fire':
        return className + '--fire';
      case 'fighting':
        return className + '--fighting';
      case 'water':
        return className + '--water';
      case 'flying':
        return className + '--flying';
      case 'grass':
        return className + '--grass';
      case 'poison':
        return className + '--poison';
      case 'electric':
        return className + '--electric';
      case 'ground':
        return className + '--ground';
      case 'psychic':
        return className + '--psychic';
      case 'rock':
        return className + '--rock';
      case 'ice':
        return className + '--ice';
      case 'bug':
        return className + '--bug';
      case 'dragon':
        return className + '--dragon';
      case 'ghost':
        return className + '--ghost';
      case 'dark':
        return className + '--dark';
      case 'steel':
        return className + '--steel';
      case 'fairy':
        return className + '--fairy';
        default:
          throw new Error('Unexpected type: ' + expression)
      }
  }
}
