import { ProfileModel } from './profileModel';

export interface ProfileStateInterface {
  isLoading: boolean;
  profileData: ProfileModel
}

export const initValues: ProfileStateInterface = {
  isLoading: false,
  profileData: null
};
