import { Router } from '@angular/router';
import { Component, effect, inject, OnInit } from '@angular/core';
import { ProductService } from '../products.services';
import { Products } from '../../@common/models/user.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FilterService } from '../../@common/services/products/filter.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './index.page.html',
  styleUrl: './index.page.css',
})
export class IndexPage implements OnInit {
  products: Products[] = [];
  allProducts: Products[] = [];
  isLoading: boolean = true;
  query = '';
  private filterService = inject(FilterService);

  constructor(private productService: ProductService, private router: Router) {
    effect(() => {
      if (this.filterService.filter()) {
        this.searchProducts(this.filterService.filter()!);
      } else {
        this.products = this.allProducts;
      }
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }
  private loadProducts(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.isLoading = false;
      this.products = data;
      this.allProducts = data;
    });
  }
  searchProducts(query: string): void {
    this.products = this.allProducts.filter((product) => {
      return product.title.toLowerCase().includes(query.toLowerCase());
    });
  }
  onClick(product: Products): void {
    this.router.navigate(['products', product.id]);
  }
}
