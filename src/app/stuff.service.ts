// Service provided in transclusion component

import { Injectable } from '@angular/core';

export class Stuff {
  rank: number;
  name: string;
}

@Injectable()
export class StuffService {

  constructor() { }

  getStuff(): Promise<Stuff[]> {
    return Promise.resolve([
      { rank: 1, name: 'macramé' },
      { rank: 2, name: 'knitting' },
      { rank: 3, name: 'kapa making' },
      { rank: 4, name: 'lauhala weaving' },
      { rank: 5, name: 'spinning' }
    ]);
  }

}
