import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConferencePageRoutingModule } from './conference-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ConferencePage } from './conference.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConferencePageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ConferencePage]
})
export class ConferencePageModule {}
