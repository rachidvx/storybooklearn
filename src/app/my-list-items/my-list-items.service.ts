import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class MyListItemsService {
    listItemsVehicles: string[] = [
        'Car', 'Scooter', 'Bycle'
    ]

    get Items() {
        return this.listItemsVehicles.slice();
    }
}