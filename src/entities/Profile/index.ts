export { type Profile, type ProfileSchema } from './model/types/profile';

export { profileActions, profileReducer } from './model/slice/profileSlice';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

import ProfileCard from './ui/ProfileCard/ProfileCard';

export { ProfileCard };

export { getProfileError } from './model/selectors//getProfileError';
export { getProfileData } from './model/selectors/getProfileData';
export { getProfileIsLoading } from './model/selectors/getProfileIsLoading';
export { getProfileReadOnly } from './model/selectors/getProfileReadOnly';
