const profileInitialState = {
  userProfileDetails: {
    name: null,
    email: null,
    gender: null,
    birthdate: null,
    preferredLanguage: null,
    preferredCurrency: null,
    role: null,
    department: null,
    lineManager: null,
    profilePhoto: null,
    coverPhoto: null
  },

  userProfileTravels: {
    image: null,
    owner: null,
    tripType: null,
    status: null,
    reasons: null,
    date: null,
    createdAt: null,
    updatedAt: null,

  },

  allPlaces: {
    name: null,
    country: null,
    city: null,
    visitedtimes: null,
    createdAt: null,
    updatedAt: null
  },
  serverMessage: '',

  userTravelsError: 'Loading ...',

  updateProfile: 'null',

  message: 'Loading ...'
};

export default profileInitialState;
