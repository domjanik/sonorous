import { ProfileModel } from '../models/profileModel';

export class SetProfileLoadingAction {
    static readonly type = '[Profile] Set Profile Loading Action';

    constructor(public value: boolean) {
    }
}

export class GetProfileAction {
    static readonly type = '[Profile] Get Profile Action';

    constructor() {
    }
}

export class UpdateProfileAction {
    static readonly type = '[Profile] Update Profile Action';

    constructor() {
    }
}

export class UpdateProfileFormAction {
    static readonly type = '[Profile] Update Profile Form Action';

    constructor(public profileData: Partial<ProfileModel>) {
    }
}