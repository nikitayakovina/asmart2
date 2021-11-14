import { Injectable } from "@angular/core";
import { Shops } from "./shops.model";
import { StaticDataSource } from "./static.datasource";

@Injectable({providedIn:'root'})
export class ShopRepository {
    private shops: Shops[] = [];
    private sphere: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getShops().subscribe(data => {
            this.shops = data;
            this.sphere = data.map(p => p.sphere)
        });
    }

    getShops(sphere: string = null): Shops[] {
        return this.shops
            .filter(p => sphere == null || sphere == p.sphere);
    }

    getShop(id: number): Shops {
        return this.shops.find(p => p.id == id);
    }

    getShperes(): string[] {
        return this.sphere;
    }
}
