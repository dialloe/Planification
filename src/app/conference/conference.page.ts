import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import { ConferenceService } from './conference.service';
import {Conference} from './conference';
@Component({
  selector: 'app-conference',
  templateUrl: './conference.page.html',
  styleUrls: ['./conference.page.scss'],
})
export class ConferencePage implements OnInit {

  conference = this.formBuilder.group({
    date: ['', Validators.required],
    duree: [''],
    sujet: ['', Validators.required],
    professeur_id: ['', Validators.required],
    lieu: [''],
    adresse:['', Validators.required],
    ville: ['', Validators.required],
    pays: ['']
  });

  listConferences : Conference[];

  constructor( private formBuilder: FormBuilder,
                public conferenceService : ConferenceService ) {
   
  }

  ngOnInit() {
  }

  saveProf() {
    console.log(this.conference.value);
    this.conferenceService.save(this.conference.value).subscribe((res : any) => {
      let conference= new Conference();
      this.listConferences.push(conference);
  });

}

}
