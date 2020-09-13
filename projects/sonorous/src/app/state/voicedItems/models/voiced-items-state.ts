import {VoicedItemModel} from "./voicedItemModel";

export interface VoicedItemsStateInterface {
  isLoading: boolean;
  voicedItems: VoicedItemModel[];
}

export const initValues: VoicedItemsStateInterface = {
  isLoading: false,
  voicedItems: [{
    imageName: "https://image.flaticon.com/icons/png/512/126/126083.png",
    hasChildren: false,
    id: 1
  }, {
    imageName: "https://image.flaticon.com/icons/png/512/126/126083.png",
    hasChildren: false,
    id: 2
  }, {
    imageName: "https://image.flaticon.com/icons/png/512/126/126083.png",
    hasChildren: true,
    id: 3
  }, {
    imageName: "https://image.flaticon.com/icons/png/512/126/126083.png",
    hasChildren: false,
    id: 4
  }, {
    imageName: "https://image.flaticon.com/icons/png/512/126/126083.png",
    hasChildren: false,
    id: 5
  }]
};
