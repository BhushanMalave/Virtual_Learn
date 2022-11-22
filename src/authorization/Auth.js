

import axios from 'axios';

export const all = async token => {
    console.log("-----",token)
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        'https://virtual-learn-app-java.herokuapp.com/user/home/course/all',
        options,
      
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };


  export const newest = async token => {

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        'https://virtual-learn-app-java.herokuapp.com/user/home/course/newest',
        options,
      );
      //console.log("=====",response.data);
      if (response.data) {
          return response.data
      }
    } catch (error) {
      console.log(error);
    }
  };


  export const popular = async token => {

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        'https://virtual-learn-app-java.herokuapp.com/user/home/course/popular',
        options,
      );
      if (response.data) {
        return response.data
      }
    } catch (error) {
      console.log(error);
    }
  };

  export const mpChangePassword = async (token,objBody) => {
    body = JSON.stringify(objBody);
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'https://virtual-learn-app-java.herokuapp.com/ChangePassword',
         body,
        options,
      );
    
      if (response.data) {
        return response.data
      }
    } catch (error) {
      console.log(error);
    }
  };


  export const mpChangeUserData = async (token,formBody) => {
    
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type':'multipart/form-data',
      },
    };

    try {
      const response = await axios.patch(
        'https://virtual-learn-app-java.herokuapp.com/Save',
        formBody,
        options,
      );
      console.log("=====",response.data);
      if (response.data) {
        return response.data
      }
    } catch (error) {
      console.log(error);
    }
  };




