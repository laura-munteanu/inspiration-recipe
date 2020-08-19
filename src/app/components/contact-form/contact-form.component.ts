import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  controlForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.controlForm = this.fb.group({
      contactFormName: '',
      contactFormEmail: '',
      contactFormSubject: '',
      contactFormMessage: ''
    })
  }

}
