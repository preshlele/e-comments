import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPage } from '../../../auth/login/login.page';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, LoginPage],
  templateUrl: './auth.layout.html',
  styleUrl: './auth.layout.css'
})
export class AuthLayout {

}
