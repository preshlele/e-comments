import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.services';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../@common/models/user.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  products: Product | null = null;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const productId = params['id'];
      this.productService.getSingleProduct(productId).subscribe((data) => {
        this.products = data;
      });
    });
  }
}
