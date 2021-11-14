import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../services/shops.service';
import { Shops } from '../model/shops.model';
import { ShopRepository } from '../model/shop.repository';
import { StaticDataSource } from '../model/static.datasource';

@Component({
  selector: 'app-portfolio',
  templateUrl: './app-portfolio.component.html',
  styleUrls: ['./app-portfolio.component.less']
})
export class AppPortfolioComponent implements OnInit {
  shops$ = [{
    sphere: null,
    object: [{
      id: null,
      sphere: null,
      name: null,
      url: null,
      description: null
    }]
  }];

  btn;

  ngOnInit(): void {
    this.shopsService.getHttp().subscribe(value => {
      value.shops.forEach(element => {
        this.shops$.push({
          sphere: element.sphere,
          object: Object.values(element.object)
        })
      });
      this.shops$.shift();
      this.shops$.forEach(value => {
        this.btn.push(value.sphere)
      })
      this.setArr(this.shops$);
    });
  }

  constructor(private shopsService: ShopsService) { }

  setArr(value): void {
    this.shops$ = value;
  }


  // public selectedCategory = null;
  // public defaltCategory = null;
  // private _shops: Shops[] = [];

  // ngOnInit() {

  // }
  // constructor(private shopsService: ShopsService, private repository: ShopRepository, private data: StaticDataSource) { }

  // get shops(): Shops[] {
  //   return this.repository.getShops(this.selectedCategory);
  // }
  // get spheres(): string[] {
  //   return this.repository.getShperes();
  // }
  // changeCategory(newSphere?: string) {
  //   this.selectedCategory = newSphere;
  // }
  // getShops(sphere: string = null): Shops[] {
  //   return this._shops.filter(p => sphere == null || sphere == p.sphere);
  // }


}
