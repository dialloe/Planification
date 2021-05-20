import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import { ProfesseurService } from './professeur.service';
import {Professeur} from './professeur';
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

  listProfesseurs : Professeur[];

  constructor( private formBuilder: FormBuilder,
                public professeurService : ProfesseurService ) {
   
  }

  ngOnInit() {
  }

  saveProf() {
    console.log(this.professeur.value);
    this.professeurService.save(this.professeur.value).subscribe((res : any) => {
      let prof= new Professeur();
      this.listProfesseurs.push(prof);
  });

}

}
