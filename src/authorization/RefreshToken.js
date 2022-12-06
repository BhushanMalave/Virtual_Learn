import jwt_decode from 'jwt-decode';
import {refreshToken} from './Auth';

const isTokenExpired = token => {
  var decoded = jwt_decode(token);
  console.log(decoded.exp)
  if (decoded.exp < Date.now() / 1000) {
    return true;
  } else {
    return false;
  }
};

export const getVerifiedKeys = async token => {
  if (token) {
    if (!isTokenExpired(token)) {
      return token;
    } else {
      let response = await refreshToken(token);
      return response;
    }
  } else {
    return 'Enter access token';
  }
};
