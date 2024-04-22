import { Component } from '@angular/core';
import { IndexPage } from "../../../products/index/index.page";
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.main.html',
    styleUrl: './main.main.css',
    imports: [RouterOutlet, NavbarComponent]
})
export class MainMain {

}
