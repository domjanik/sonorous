import {VoicedItemModel} from "./voicedItemModel";

export interface VoicedItemsStateInterface {
  isLoading: boolean;
  voicedItems: VoicedItemModel[];
}

export const initValues: VoicedItemsStateInterface = {
  isLoading: false,
  voicedItems: []
};
