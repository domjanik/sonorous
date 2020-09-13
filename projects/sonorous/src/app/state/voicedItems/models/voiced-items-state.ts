import { FavoriteFieldModel } from '../../favorite/models/favoriteModel';
import { VoicedItemModel } from "./voicedItemModel";

export interface VoicedItemsStateInterface {
  isLoading: boolean;
  selectedVoicedItems: string[];
  selectedVoicedItem: VoicedItemModel;
  selectedVoicedItemFields: FavoriteFieldModel[];
  voicedItems: VoicedItemModel[];
}

export const initValues: VoicedItemsStateInterface = {
  isLoading: false,
  selectedVoicedItem: null,
  selectedVoicedItems: [],
  voicedItems: [],
  selectedVoicedItemFields: []
};
