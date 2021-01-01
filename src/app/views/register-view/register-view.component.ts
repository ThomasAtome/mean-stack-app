import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {}

  /**
   * Method when user submit register form
   */
  onSignUp(user: User): void {
    this.authService.register(
      user.toJSON()
    )
      .then(() => {
        this.router.navigate(['sales']);
      }, (err) => {
        this.errorMsg = err;
      });
  }

}
