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
    if (response.data) {
      return response.data;
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
      'https://virtual-learn-app-java.herokuapp.com/changePassword',
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
    let res = await fetch('https://virtual-learn-app-java.herokuapp.com/save', {
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
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2Njk0NjA2OTcsImV4cCI6MTY2OTQ2OTY5N30.nZN82LHFikfEGQf0MwPGAIAbig5f8ppsSb7GbYg_hYzYA5vpKoyh2-EVA-WT6SgHIURBeEHJ_ZeEHfSvLzcdPw',
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
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2Njk0NjA2OTcsImV4cCI6MTY2OTQ2OTY5N30.nZN82LHFikfEGQf0MwPGAIAbig5f8ppsSb7GbYg_hYzYA5vpKoyh2-EVA-WT6SgHIURBeEHJ_ZeEHfSvLzcdPw',
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
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2Njk0NjA2OTcsImV4cCI6MTY2OTQ2OTY5N30.nZN82LHFikfEGQf0MwPGAIAbig5f8ppsSb7GbYg_hYzYA5vpKoyh2-EVA-WT6SgHIURBeEHJ_ZeEHfSvLzcdPw',
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
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2Njk0NjA2OTcsImV4cCI6MTY2OTQ2OTY5N30.nZN82LHFikfEGQf0MwPGAIAbig5f8ppsSb7GbYg_hYzYA5vpKoyh2-EVA-WT6SgHIURBeEHJ_ZeEHfSvLzcdPw',
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
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2Njk0NjA2OTcsImV4cCI6MTY2OTQ2OTY5N30.nZN82LHFikfEGQf0MwPGAIAbig5f8ppsSb7GbYg_hYzYA5vpKoyh2-EVA-WT6SgHIURBeEHJ_ZeEHfSvLzcdPw',
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


export const SubmitFinalTest = async (token, Body) => {
  const body = JSON.stringify(Body);
  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2Njk0NjA2OTcsImV4cCI6MTY2OTQ2OTY5N30.nZN82LHFikfEGQf0MwPGAIAbig5f8ppsSb7GbYg_hYzYA5vpKoyh2-EVA-WT6SgHIURBeEHJ_ZeEHfSvLzcdPw',
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

export const FinalTestResult = async (id) => {
 
  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2Njk0NjA2OTcsImV4cCI6MTY2OTQ2OTY5N30.nZN82LHFikfEGQf0MwPGAIAbig5f8ppsSb7GbYg_hYzYA5vpKoyh2-EVA-WT6SgHIURBeEHJ_ZeEHfSvLzcdPw',
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

