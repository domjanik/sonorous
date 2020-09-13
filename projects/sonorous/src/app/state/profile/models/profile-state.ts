import { ProfileModel } from './profileModel';

export interface ProfileStateInterface {
  isLoading: boolean;
  profileData: ProfileModel;
  profileFormData: ProfileModel;
}

export const initValues: ProfileStateInterface = {
  isLoading: false,
  profileData: {
    name: "Adam",
    birthDate: new Date(1992, 2, 14),
    discountType: 1,
    phoneNumber: "123 123 123",
    gender: 0
  },
  profileFormData: {
    name: "Adam",
    birthDate: new Date(1992, 2, 14),
    discountType: 4,
    phoneNumber: "123 123 123",
    gender: 0
  }
};
