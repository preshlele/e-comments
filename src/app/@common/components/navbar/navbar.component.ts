import { FilterService } from './../../services/products/filter.service';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ProductService } from '../../../products/products.services';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { debounceTime, Subject, tap } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, FormsModule, ReactiveFormsModule, MatBadgeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  search = new FormControl('');
  private filterService = inject(FilterService);
  private setupSearch() {
    this.search.valueChanges
      .pipe(
        debounceTime(800),
        tap((value) => this.filterService.setFilter(value))
      )
      .subscribe();
  }

  ngOnInit() {
    this.setupSearch();
  }

  constructor(
    private authService: AuthService,
  ) {}
  Logout(): void {
    this.authService.logoutUser();
  }
}
