import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/get-pokemon.service';
import { TypeService } from '../../services/pokemon/get-pokemon-type.service';
import { GenerationService } from '../../services/pokemon/get.generation.service';
import Pokemon from 'src/app/models/interfaces/Pokemon';
import { Type } from 'src/app/models/interfaces/Type';
import { Generation } from 'src/app/models/interfaces/Generation';

import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = [];
  chosenPokemon: Pokemon | undefined;
  types: Type = {count: 0, results: []};
  generations: Generation = {count: 0, results: []};
  constructor(private PokemonService: PokemonService, private TypeService: TypeService, private GenerationService: GenerationService) {
  }

  getData(): void {
    this.PokemonService.getPokemon().subscribe(pokemons => this.pokemons = pokemons)
    this.TypeService.getType().subscribe(types => {this.types = types});
    this.GenerationService.getGeneration().subscribe(generations => {this.generations = generations});
  }

  ngOnInit() {
    this.getData();
  }
}
