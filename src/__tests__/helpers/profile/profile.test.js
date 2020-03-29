import {
  profileHelper,
  shortData,
  componentHelper,
  checkForm,
  assignPlaceName,
  checkPlace
} from '../../../helpers';


describe('Testing Helper', () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJkdW1teThqYWphUmVxdWVzdGVyIiwiZW1haWwiOiJkdW1teThqYWphQGVtYWlsLnJ3Iiwicm9sZSI6IlJFUVVFU1RFUiIsImlzVmVyaWZpZWQiOnRydWUsImlhdCI6MTU4NTEyNzUwN30.FmkWzwPCuA5vXVXveaci1DNDIy_XTlHeWDCzwRI58L4';
  it('Testing profileHelper helper', () => {
    expect(profileHelper(token)).toBeTruthy();
  });


  it('Testing shortData helper', () => {
    expect(shortData(token)).toBeTruthy();
  });


  const tokenD = 'token';
  it('Testing componentHelper helper', () => {
    expect(componentHelper(tokenD)).toBeTruthy();
  });


  const usernameD = 'username';
  it('Testing componentHelper helper', () => {
    expect(componentHelper(usernameD)).toBeTruthy();
  });


  const tokenA = 't';
  const usernameA = 'username';
  it('Testing componentHelper helper', () => {
    expect(componentHelper(tokenA, usernameA)).toBeTruthy();
  });


  const tokenB = 'token';
  const usernameB = 'u';
  it('Testing componentHelper helper', () => {
    expect(componentHelper(tokenB, usernameB)).toBeTruthy();
  });


  const tokenC = 'token';
  const usernameC = 'username';
  it('Testing componentHelper helper', () => {
    expect(componentHelper(tokenC, usernameC)).toBeTruthy();
  });


  const allPlaces = [{ id: 1, name: 'kigali branch', country: 'Rwanda', city: 'kigali city', visitedtimes: 0 }];
  it('Testing checkPlace helper', () => {
    expect(checkPlace(allPlaces)).toBeTruthy();
  });

  let allPlacesA;
  it('Testing checkPlace helper', () => {
    expect(checkPlace(allPlacesA)).toBeTruthy();
  });

  const stateName = { name: 'na' };
  it('Testing checkForm helper', () => {
    expect(checkForm(stateName)).toBeTruthy();
  });


  const stateGender = { name: 'name', gender: 'ge' };
  it('Testing checkForm helper', () => {
    expect(checkForm(stateGender)).toBeTruthy();
  });


  const stateBirthday = { name: 'name', gender: 'gender', birthdate: 'bi' };
  it('Testing checkForm helper', () => {
    expect(checkForm(stateBirthday)).toBeTruthy();
  });


  const statePreferredLanguage = { name: 'name', gender: 'gender', birthdate: 'birthdate', preferredLanguage: 'pr' };
  it('Testing checkForm helper', () => {
    expect(checkForm(statePreferredLanguage)).toBeTruthy();
  });


  const statePreferredCurrency = { name: 'name', gender: 'gender', birthdate: 'birthdate', preferredLanguage: 'preferredLanguage', preferredCurrency: 'preferredCurrency' };
  it('Testing checkForm helper', () => {
    expect(checkForm(statePreferredCurrency)).toBeTruthy();
  });


  const stateLocation = { name: 'name', gender: 'gender', birthdate: 'birthdate', preferredLanguage: 'preferredLanguage', preferredCurrency: 'pref', location: 'lo' };
  it('Testing checkForm helper', () => {
    expect(checkForm(stateLocation)).toBeTruthy();
  });


  const state = { name: 'name', gender: 'gender', birthdate: 'birthdate', preferredLanguage: 'preferredLanguage', preferredCurrency: 'pref', location: 'location' };
  it('Testing checkForm helper', () => {
    expect(checkForm(state)).toBeTruthy();
  });

  const placeId = 1;
  const palceNames = ['  kigali city '];
  it('Testing assignPlaceName helper', () => {
    expect(assignPlaceName(placeId, palceNames)).toBeTruthy();
  });


  const placeIdA = 9;
  const palceNamesA = ['  '];
  it('Testing assignPlaceName helper', () => {
    expect(assignPlaceName(placeIdA, palceNamesA)).toBeTruthy();
  });

  const placeIdB = 2;
  const palceNamesB = [' ', '  '];
  it('Testing assignPlaceName helper', () => {
    expect(assignPlaceName(placeIdB, palceNamesB)).toBeTruthy();
  });

  const placeIdC = 3;
  const palceNamesC = ['  ', '  ', ' '];
  it('Testing assignPlaceName helper', () => {
    expect(assignPlaceName(placeIdC, palceNamesC)).toBeTruthy();
  });

  const placeIdD = 4;
  const palceNamesD = ['  ', '  ', '  ', '  '];
  it('Testing assignPlaceName helper', () => {
    expect(assignPlaceName(placeIdD, palceNamesD)).toBeTruthy();
  });

  const placeIdE = 5;
  const palceNamesE = ['  ', '  ', ' ', '  ', '  '];
  it('Testing assignPlaceName helper', () => {
    expect(assignPlaceName(placeIdE, palceNamesE)).toBeTruthy();
  });

  const placeIdF = 6;
  const palceNamesF = ['  ', '  ', ' ', '  ', '  ', ' '];
  it('Testing assignPlaceName helper', () => {
    expect(assignPlaceName(placeIdF, palceNamesF)).toBeTruthy();
  });
});
