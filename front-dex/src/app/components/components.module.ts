import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'


// Components
import { CardComponent } from './card/card.component';
import { CaughtComponent } from './caught/caught.component';
import { PokemonFilterPipe } from '../pipes/pokemon-filter.pipe';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { FilterTypePipe } from '../pipes/type-filter.pipe';
import { FilterGenerationPipe } from '../pipes/generation.filter.pipe';
import { FilterCaughtPipe } from '../pipes/caught-filter.pipe';


const Components = [
    CardComponent,
    CaughtComponent,
    PokemonFilterPipe,
    PokemonDetailsComponent,
    FilterTypePipe,
    FilterGenerationPipe,
    FilterCaughtPipe,
]

@NgModule({
    declarations: [...Components],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [...Components],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ComponentsModule { }
