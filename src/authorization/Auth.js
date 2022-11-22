

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
      //console.log("=====",response.data);
      if (response.data) {
        return response.data
      }
    } catch (error) {
      console.log(error);
    }
  };