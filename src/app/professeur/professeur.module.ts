import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesseurPageRoutingModule } from './professeur-routing.module';

import { ProfesseurPage } from './professeur.page';
import { Professeur} from './professeur';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesseurPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfesseurPage]
})
export class ProfesseurPageModule {
professeur : Professeur;

}
