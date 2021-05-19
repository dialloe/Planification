import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-professeur',
  templateUrl: './professeur.page.html',
  styleUrls: ['./professeur.page.scss'],
})
export class ProfesseurPage implements OnInit {

  professeur = this.formBuilder.group({
    nom: ['', Validators.required],
    prenom: [''],
    nomUsuel: [''],
    email: [''],
    telephone: ['', Validators.required],
    adresse: [''],
    ville : [''],
    pays: ['']
  });

  constructor( private formBuilder: FormBuilder ) {
   
  }

  ngOnInit() {
  }

  saveProf() {
    console.log(this.professeur.value)
  }

}
