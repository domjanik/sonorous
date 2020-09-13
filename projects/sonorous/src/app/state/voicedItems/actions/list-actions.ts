import { FavoriteFieldModel } from '../../favorite/models/favoriteModel';

export class SetItemsLoadingAction {
  static readonly type = '[VoicedItems] Set Items Loading Action';

  constructor(public value: boolean) {
  }
}

export class ResetVoicedItemsList {
  static readonly type = '[VoicedItems] Reset Items Action';

  constructor() {
  }
}

export class GetItemsAction {
  static readonly type = '[VoicedItems] Get Items Action';

  constructor(public id?: string) {
  }
}

export class GetCategoriesAction {
  static readonly type = '[VoicedItems] Get Categories Action';

  constructor() {
  }
}

export class SelectItemAction {
  static readonly type = '[VoicedItems] Select Item Action';

  constructor(public id: string) {
  }

}

export class SelectPreviousItemAction {
  static readonly type = '[VoicedItems] Select Previous Item Action';

  constructor() {
  }
}

export class ResetItemSelectionAction {
  static readonly type = '[VoicedItems] Reset Item Selection Action';

  constructor() {
  }
}

export class GetItemImageAction {
  static readonly type = '[VoicedItems] Get Item Image Action';

  constructor(public id: string) {
  }
}

export class SetSelectionAction {
  static readonly type = '[VoicedItems] Set Selection Action';

  constructor(public id: string) {
  }
}

export class SetSelectionFormValuesAction {
  static readonly type = '[VoicedItems] Set Selection Form Values Action';

  constructor(public fields: FavoriteFieldModel[]) {
  }
}