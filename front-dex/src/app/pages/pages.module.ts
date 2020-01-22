import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// pages
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// components
import { ComponentsModule } from '../components/components.module';
import { TeambuilderComponent } from './teambuilder/teambuilder.component';


const Pages = [
    HomeComponent,
    LoginComponent,
]

@NgModule({
    declarations: [...Pages, TeambuilderComponent],
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [...Pages],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PagesModule { }
