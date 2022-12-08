import jwt_decode from 'jwt-decode';
import {refreshToken} from './Auth';

const isTokenExpired = token => {
  var jwt_decode = require('jwt-decode')
  var decoded = jwt_decode(token);
  const time= new Date(decoded.exp)
  const time2= new Date(Date.now() / 1000)
  if (time.getTime() <= time2.getTime()) {
    return true;
  } else {
    return false;
  }
};

export const getVerifiedKeys = async token => {
  console.log("=-=-=-=-=",token)
  if (token) {
    if (!isTokenExpired(token)) {
      console.log("old",token)
      return token;
    } else {
      let response = await refreshToken(token);
      console.log("new",token)
      return response;
    }
  } else {
    return null;
  }
};
