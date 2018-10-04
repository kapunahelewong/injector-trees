// Lazy service provided in lazy1

import { Injectable } from '@angular/core';

export class Item {
  rank: number;
  name: string;
}

@Injectable()
export class ItemService {

  constructor() { }

  getItems(): Promise<Item[]> {
    return Promise.resolve([
      { rank: 1, name: 'bottle' },
      { rank: 2, name: 'lamp' },
      { rank: 3, name: 'phone' },
      { rank: 4, name: 'tablet' }

    ]);
  }

}
