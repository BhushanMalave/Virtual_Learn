import axios from 'axios';

export const refreshToken = async (token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(
      'https://virtual-learn-app-java.herokuapp.com/refreshToken',
      options,
    );
    if (response.data.jwtToken) {
      return response.data.jwtToken;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const all = async token => {
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
      return response.data;
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
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const mpChangePassword = async (token, objBody) => {
  body = JSON.stringify(objBody);
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'https://virtual-learn-app-java.herokuapp.com/user/changePassword',
      body,
      options,
    );

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const mpChangeUserData = async (token, formBody) => {

  try {
    let res = await fetch('https://virtual-learn-app-java.herokuapp.com/user/save', {
      method: 'put',
      body: formBody,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      },
    });
    const jsonResponse =  res;
    console.log(jsonResponse.message);
    return res.status;
    } catch (err) {
    console.log("-----",err);
  }
};

export const changeUserData = async (token,formBody) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    },
  };

  try {
    const response = await axios.put(
      'https://virtual-learn-app-java.herokuapp.com/save',
      formBody,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
}

export const overViewData = async (token, id) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `https://virtual-learn-app-java.herokuapp.com/user/courseOverView?courseId=${id}`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};


export const continueApi = async (token, id) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `https://virtual-learn-app-java.herokuapp.com/user/continue?courseId=${id}`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
export const searchData = async (token, string) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `https://virtual-learn-app-java.herokuapp.com/user/search?searchKey=${string}`,
      options,
    );
    // console.log(response.data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    //console.log(error.response.data);
  }
};

export const searchCategoriesdata = async token => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(
      'https://virtual-learn-app-java.herokuapp.com/user/categoriesWP',
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const topSearchData = async token => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(
      'https://virtual-learn-app-java.herokuapp.com/user/topSearches',
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const searchDataKeyword = async (token, body) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.put(
      `https://virtual-learn-app-java.herokuapp.com/user/keywords?courseId=${body}`,
      options,
    );
    // console.log(response.data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    //console.log(error.response.data);
  }
};

export const searchByKeyword = async (token, string) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `https://virtual-learn-app-java.herokuapp.com/user/searchByKeyword?keyword=${string}`,
      options,
    );
    // console.log(response.data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    //console.log(error.response.data);
  }
};

export const applySearchFilter = async (token, objBody) => {
  body = JSON.stringify(objBody);
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'https://virtual-learn-app-java.herokuapp.com/user/applyFilter',
      body,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const joinCourse = async (token, objBody) => {
  body = objBody;
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'https://virtual-learn-app-java.herokuapp.com/user/enroll',
      body,
      options,
    );

    if (response.data) {
      console.log('tatatatatta', response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};


export const SubmitTest = async (token, Body) => {
  const body = JSON.stringify(Body);
  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2Njk2MTAxNzcsImV4cCI6MTY2OTYxOTE3N30.aUc_D_FTNpsY1NvjvIpGxlT1nFT00cbpE_UckqYYpXt2a1qLXYUzQTY7B0X0oE82yzA7bmqzHhjHquKmxFOw4g',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'https://virtual-learn-app-java.herokuapp.com/user/submit',
      body,
      options,
    );

    if (response.data) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};


export const PauseTime = async (token, objBody) => {
  body = JSON.stringify(objBody);
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.put(
      'https://virtual-learn-app-java.herokuapp.com/user/pauseTime',
      body,
      options,
    );
    console.log(response.data)
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const ResultHeader = async (id) => {
 
  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2Njk2MTAxNzcsImV4cCI6MTY2OTYxOTE3N30.aUc_D_FTNpsY1NvjvIpGxlT1nFT00cbpE_UckqYYpXt2a1qLXYUzQTY7B0X0oE82yzA7bmqzHhjHquKmxFOw4g',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `https://virtual-learn-app-java.herokuapp.com/user/resultHeader?testId=${id}`,
      options,
    );
    if (response.data) {
      console.log(response)
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};


export const ResultAnswer = async (id) => {
 
  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2Njk2MTAxNzcsImV4cCI6MTY2OTYxOTE3N30.aUc_D_FTNpsY1NvjvIpGxlT1nFT00cbpE_UckqYYpXt2a1qLXYUzQTY7B0X0oE82yzA7bmqzHhjHquKmxFOw4g',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `https://virtual-learn-app-java.herokuapp.com/user/resultAnswers?testId=${id}`,
      options,
    );
    if (response.data) {
      console.log(response.data)
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const ModuleTest = async (id) => {
 
  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2Njk2MTAxNzcsImV4cCI6MTY2OTYxOTE3N30.aUc_D_FTNpsY1NvjvIpGxlT1nFT00cbpE_UckqYYpXt2a1qLXYUzQTY7B0X0oE82yzA7bmqzHhjHquKmxFOw4g',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `https://virtual-learn-app-java.herokuapp.com/user/moduleTest?testId=${id}`,
      options,
    );
    if (response.data) {
      console.log(response)
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};



//no added url below this
export const FinalTest = async (id) => {
 
  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2Njk2MjcxMjksImV4cCI6MTY2OTYzNjEyOX0.rMxzWfQoeMJSxEcyojESdnD-4Anzm3BS8D1_oHgT1E1MW2TqecjLEpJ1-_USNs3-zcbZeRdRnNqqCKvyVhUuEQ',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `https://virtual-learn-app-java.herokuapp.com/user/finalTest?testId=${id}`,
      options,
    );
    if (response.data) {
      console.log(response)
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};


export const SubmitFinalTest = async (token, Body) => {
  const body = JSON.stringify(Body);
  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2Njk2MjcxMjksImV4cCI6MTY2OTYzNjEyOX0.rMxzWfQoeMJSxEcyojESdnD-4Anzm3BS8D1_oHgT1E1MW2TqecjLEpJ1-_USNs3-zcbZeRdRnNqqCKvyVhUuEQ',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'https://virtual-learn-app-java.herokuapp.com/user/finalSubmit',
      body,
      options,
    );

    if (response.data) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const FinalTestResult = async (id) => {
 
  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2Njk2MjcxMjksImV4cCI6MTY2OTYzNjEyOX0.rMxzWfQoeMJSxEcyojESdnD-4Anzm3BS8D1_oHgT1E1MW2TqecjLEpJ1-_USNs3-zcbZeRdRnNqqCKvyVhUuEQ',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `https://virtual-learn-app-java.herokuapp.com/user/result?testId=${id}`,
      options,
    );
    if (response.data) {
      console.log(response)
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};

