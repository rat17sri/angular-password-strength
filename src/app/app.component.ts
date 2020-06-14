import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  passwordForm: FormGroup;

  passwordIsValid = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
    });
  }

  passwordValid(event) {
    this.passwordIsValid = event;
  }


}
