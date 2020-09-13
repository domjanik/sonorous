import { VoicedItem } from 'sonorous-api/lib/domain';
import { FavoriteModel } from "./favoriteModel";

export interface FavoriteStateInterface {
  isLoading: boolean;
  favoriteItems: FavoriteModel[];
}

export const initValues: FavoriteStateInterface = {
  isLoading: false,
  favoriteItems: [],
};
