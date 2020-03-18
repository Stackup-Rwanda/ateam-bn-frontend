import axios from 'axios';

const profileHelper = (token) => axios.create({
  baseURL: 'api/',
  headers: {
    token,
    'content-type': 'multipart/form-data'
  }
});

const shortData = (data) => {
  const length = 10;
  const trimmedDate = data.substring(0, length);
  return trimmedDate;
};


const componentHelper = (token) => {
  localStorage.setItem('didAmountError', 'null');
  if (!token) { localStorage.setItem('didAmountError', 'Not Authorized'); } else if (token.length < 2) { localStorage.setItem('didAmountError', 'invalid credentials'); }
  return { token };
};

const checkForm = (state) => {
  let formError;
  if (state.name.length < 3) {
    formError = 'Invalid username';
    return formError;
  } if (state.gender.length < 3) {
    formError = 'Invalid gender';
    return formError;
  } if (state.birthdate.length < 3) {
    formError = 'Invalid date';
    return formError;
  } if (state.preferredLanguage.length < 3) {
    formError = 'Invalid language';
    return formError;
  } if (state.preferredCurrency.length > 6) {
    formError = 'Invalid Currency';
    return formError;
  } if (state.location.length < 3) {
    formError = 'Invalid location';
    return formError;
  }
  formError = 'Loading...';
  return formError;
};

const assignPlaceName = (palceId, palceNames) => (
  palceId === 1 ? `  and  ${palceNames[0]}  ` : palceId
    && palceId === 2 ? `   ${palceNames[1]}  and  ` : palceId
      && palceId === 3 ? `  ${palceNames[2]} and  ` : palceId
        && palceId === 4 ? `  ${palceNames[3]} and  ` : palceId
          && palceId === 5 ? `  ${palceNames[4]} and  ` : palceId
            && palceId === 6 ? `  ${palceNames[5]} and  ` : palceId

);
const checkPlace = (allPlace) => {
  const palceName = [];
  if (allPlace) {
    for (let i = 0; i < allPlace.length; i += 1) {
      palceName.push(`  ${allPlace[i].city}  `);
    }
  }
  return palceName;
};

export {
  profileHelper,
  shortData,
  componentHelper,
  checkForm,
  assignPlaceName,
  checkPlace
};
