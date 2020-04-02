import { profileTypes, searchType } from '../../../actionTypes';
import profile from '../../../store/initialState';
import profileUserDetailsReducer from '../../../reducers/profileReducer';
import request from '../../../store/initialState';
import fetchTripRequestsReducer from '../../../reducers/trips/fetchTripRequestsReducer';

describe('Profile Reducer', () => {
  it('Testing profile reducer', () => {
    const newState = profileUserDetailsReducer(profile, {});
    expect(newState).toBeTruthy();
  });

  it('Testing profile reducer', () => {
    const userDetails = [
      {
        name: 'Dummy',
        gender: 'Male',
        email: 'dummy@email.rw',
        username: 'MrDummy',
        password: '123456789',
        birthdate: '03/14/2020',
        locationId: 1,
        role: 'REQUESTER',
        rememberMe: false,
        lineManager: 3,
        isVerified: false,
        profilePhoto: 'https://tnj.com/wp-content/uploads/2018/06/JayM.jpg',
        coverPhoto: 'https://cdn.pixabay.com/photo/2019/08/07/06/31/landscape-4389957__340.jpg',
        createdAt: '03/14/2020',
        updatedAt: '03/14/2020'
      }
    ];
    const newState = profileUserDetailsReducer(profile, {
      type: profileTypes.GET_USER_PROFILE__SUCCESS,
      serverData: userDetails
    });
    expect(newState).toBeTruthy();
  });

  it('Testing Place reducer', () => {
    const userPlace = [
      {
        name: 'paris branch',
        country: 'France',
        city: 'paris',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    const newState = profileUserDetailsReducer(profile, {
      type: profileTypes.GET_PLACE_SUCCESS,
      serverData: { allPlaces: userPlace }
    });
    expect(newState).toBeTruthy();
  });

  it('Testing travel reducer', () => {
    const userTravel = [
      {
        name: 'john',
        passportId: 'PC234567',
        userId: 1,
        tripType: 'One-way',
        from: 1,
        to: [2, 1],
        date: new Date(),
        returnDate: null,
        reasons: 'being a mannager',
        accommodationId: 1,
        status: 'Approved',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    const newState = profileUserDetailsReducer(profile, {
      type: profileTypes.GET_USER_TRAVEL_SUCCESS,
      serverData: { userProfileTravels: userTravel }
    });
    expect(newState).toBeTruthy();
  });

  it('Testing travel reducer', () => {
    const userTravel = [
      {
        name: 'john',
        passportId: 'PC234567',
        userId: 1,
        tripType: 'One-way',
        from: 1,
        to: [2, 1],
        date: new Date(),
        returnDate: null,
        reasons: 'being a mannager',
        accommodationId: 1,
        status: 'Approved',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    const newState = fetchTripRequestsReducer(request, {
      type: searchType.SEARCH_SUCCESS,
      payload: userTravel
    });
    expect(newState).toBeTruthy();
  });

  it('Testing update reducer', () => {
    const userDetails = [
      {
        name: 'Dummy',
        gender: 'Male',
        preferredLanguage: 'Kinyarwanda',
        preferredCurrency: 'Euro',
        birthdate: '03/14/2020',
        location: 'Kabuga',
        profilePhoto: 'https://tnj.com/wp-content/uploads/2018/06/JayM.jpg',
        coverPhoto: 'https://cdn.pixabay.com/photo/2019/08/07/06/31/landscape-4389957__340.jpg'
      }
    ];
    const newState = profileUserDetailsReducer(profile, {
      type: profileTypes.UPDATE_PROFILE__SUCCESS,
      serverData: { updateProfile: userDetails }
    });
    expect(newState).toBeTruthy();
  });

  it('Testing travel failure reducer', () => {
    const newState = profileUserDetailsReducer(profile, {
      type: profileTypes.GET_USER_TRAVEL_FAILURE,
      serverData: { userTravelsError: 'Hello, Travel Not found' }
    });
    expect(newState).toBeTruthy();
  });

  it('Testing update failure reducer', () => {
    const newState = profileUserDetailsReducer(profile, {
      type: profileTypes.UPDATE_PROFILE_FAILURE,
      serverData: { updateProfile: 'Hello, Travel Bad request' }
    });
    expect(newState).toBeTruthy();
  });

  it('Testing request failure reducer', () => {
    const newState = profileUserDetailsReducer(profile, {
      type: profileTypes.REQUEST_FAILURE,
      serverData: { message: 'Hello, Travel Bad request' }
    });
    expect(newState).toBeTruthy();
  });

  it('Testing travel reducer', () => {
    const newState = fetchTripRequestsReducer(request, {
      type: searchType.SEARCH_FAILURE,
      payload: '"request with given input was not found'
    });
    expect(newState).toBeTruthy();
  });
});
