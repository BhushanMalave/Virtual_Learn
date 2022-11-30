import jwt_decode from 'jwt-decode';
import {refreshToken} from './Auth';

export const isTokenExpired = token => {
  var decoded = jwt_decode(token);
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
