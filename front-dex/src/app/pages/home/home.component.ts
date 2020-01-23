import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/get-pokemon.service';
import { TypeService } from '../../services/pokemon/get-pokemon-type.service';
import { GenerationService } from '../../services/pokemon/get.generation.service';
import Pokemon from 'src/app/models/interfaces/Pokemon';
import { Type } from 'src/app/models/interfaces/Type';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Generation } from 'src/app/models/interfaces/Generation';

import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({opacity: '0'}),
        animate('200ms ease-in', style({opacity: '1'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({opacity: '0'}))
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = [];
  chosenPokemon: Pokemon;
  showModel: boolean = false;
  activePokemonId: number | undefined;
  activePokemon: Pokemon | undefined;
  types: Type = {count: 0, results: []};
  generations: Generation = {count: 0, results: []};
  constructor(private PokemonService: PokemonService, private TypeService: TypeService, private GenerationService: GenerationService) {
  }

  closeModel(): void {
    this.activePokemon = undefined;
  }

  openModel(pokemon: Pokemon): void {
    if(this.activePokemonId !== pokemon.id) {
      this.activePokemon = pokemon;
      this.activePokemonId = pokemon.id;
    } else {
      this.activePokemonId = undefined;
    }
  }

  getData():void {
    this.PokemonService.getPokemon().subscribe(pokemons => this.pokemons = pokemons)
    this.TypeService.getType().subscribe(types => {this.types = types});
    this.GenerationService.getGeneration().subscribe(generations => {this.generations = generations});
  }

  ngOnInit() {
    this.getData();
  }
}
