import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  @Input() label: string;
  @Output() onFormSubmitted: EventEmitter<any>;

  authForm: FormGroup;

  user: User;

  constructor(private formBuilder: FormBuilder) {
    this.user = new User(null, null);
    this.onFormSubmitted = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Method for initialize all the controls for
   * the auth form
   */
  initForm(): void {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  /**
   * Method called when user submit the form
   */
  onSubmit(): void {
    this.onFormSubmitted.emit(this.user);
  }
}
