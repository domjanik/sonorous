import { VoicedItemModel } from "./voicedItemModel";

export interface VoicedItemsStateInterface {
  isLoading: boolean;
  selectedVoicedItems: string[];
  selectedVoicedItem: VoicedItemModel;
  voicedItems: VoicedItemModel[];
}

export const initValues: VoicedItemsStateInterface = {
  isLoading: false,
  selectedVoicedItem: null,
  selectedVoicedItems: [],
  voicedItems: []
};
