import { FavoriteFieldModel } from '../models/favoriteModel';

export class SetItemsLoadingAction {
  static readonly type = '[Favorite] Set Favorite Loading Action';

  constructor(public value: boolean) {
  }
}

export class GetFavoriteItemsAction {
  static readonly type = '[Favorite] Get Favorite Action';

  constructor() {
  }
}

export class AddFavoriteItemAction {
  static readonly type = '[Favorite] Add Favorite Action';

  constructor(public id: string, public name: string, public fields: FavoriteFieldModel[]) {
  }
}

export class RemoveFavoriteItemAction {
  static readonly type = '[Favorite] Remove Favorite Action';

  constructor(public id: string) {
  }

}
