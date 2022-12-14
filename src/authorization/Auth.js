import axios from 'axios';

// export const refreshToken = async token => {
//   const options = {
//     headers: {
//       Authorization:`Bearer ${token}`,
//     },
//   };

//   try {
//     const response = await axios.get(
//       'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/refreshToken',
//       options,
//     );
//     console.log("==-=--=-=",response.data.jwtToken)
//     if (response.data.jwtToken) {
//       return response.data.jwtToken;
//     }
//   } catch (error) {
//     console.log(error.response.data);
//   }
// };

export const refreshToken = async token => {
  try {
    let res = await fetch(
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/refreshToken',
      {
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const termsAndConditions = async () => {
  try {
    const response = await axios.get(
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/termsAndConditions',
    );
    if (response.data.message) {
      return response.data.message;
    }
  } catch (error) {
    console.log(error);
  }
};

export const privacyPolicy = async () => {
  try {
    const response = await axios.get(
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/privacyPolicy',
    );
    if (response.data.message) {
      return response.data.message;
    }
  } catch (error) {}
};

export const all = async token => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/home/course/all',
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('all course', error);
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
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/home/course/newest',
      options,
    );
    //console.log("=====",response.data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('newest', error);
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
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/home/course/popular',
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('Popular course', error);
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
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/changePassword',
      body,
      options,
    );

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('mpPasword', error);
  }
};

export const mpChangeUserData = async (token, formBody) => {
  try {
    let res = await fetch(
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/save',
      {
        method: 'put',
        body: formBody,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    const jsonResponse = res;
    return res.status;
  } catch (err) {
    console.log('mpUserData', err);
  }
};

export const overViewData = async (token, id) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/courseOverView?courseId=${id}`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('overView data', error.response.data);
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
      `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/continue?courseId=${id}`,
      options,
    );
    if (response.data) {
      if (response.data.message !== 'null') {
        return response.data;
      }
    }
  } catch (error) {
    console.log('continue api', error.response.data);
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
      `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/search?searchKey=${string}`,
      options,
    );
    // console.log(response.data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('serach data', error.response.data);
  }
};

export const searchCategoryData = async (token, text, id) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/searchOfCategory?categoryId=${id}&searchKey=${text}`,
      options,
    );
     console.log("=-=-=-",response.data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('serach category data', error.response.data);
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
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/categoriesWP',
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('search cat data', error);
  }
};

export const getOccupationData = async token => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/allSubCategoriesWP',
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('occupationData', error);
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
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/topSearches',
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('topsearchdata', error);
  }
};

export const searchDataKeyword = async (token, obj) => {
  body = JSON.stringify(obj);
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.put(
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/keywords',
      body,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('search keyword', error.response.status);
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
      `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/searchByKeyword?keyword=${string}`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('search by data', error.response.data);
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
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/applyFilter',
      body,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    console.log('filter', err.response.data);
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
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/enroll',
      body,
      options,
    );

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // console.log(error.response.data);
  }
};

export const SubmitTest = async (token, Body) => {
  const body = JSON.stringify(Body);
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/submit',
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
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/pauseTime',
      body,
      options,
    );
    console.log(response.data);
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    console.log('contApi: ', err);
  }
};

export const ResultHeader = async (token, id) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(
      `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/resultHeader?testId=${id}`,
      options,
    );
    if (response.data) {
      console.log('i am response', response.data);
      return response.data;
    }
  } catch (err) {
    // console.log(err);
  }
};

export const ResultAnswer = async (token, id) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/resultAnswers?testId=${id}`,
      options,
    );
    if (response.data) {
      // console.log(response.data);
      return response.data;
    }
  } catch (err) {
    // console.log(err);
  }
};

export const ModuleTest = async (token, id) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/moduleTest?testId=${id}`,
      options,
    );
    if (response.data) {
      // console.log(response.data.questions)
      return response.data;
    }
  } catch (err) {
    // console.log(err.response.data);
  }
};

export const FinalTest = async (token, id) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/finalTest?testId=${id}`,
      options,
    );
    if (response.data) {
      // console.log('===', response.data);
      return response.data;
    }
  } catch (err) {
    // console.log(err);
  }
};

export const SubmitFinalTest = async (token, Body) => {
  const body = JSON.stringify(Body);
  
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/finalSubmit',
      body,
      options,
    );

    if (response.data) {
      // console.log(response.data);
      return response.data;
    }
  } catch (error) {
    // console.log(error.response.data);
  }
};

export const FinalTestResult = async (token, id) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/result?testId=${id}`,
      options,
    );
    if (response.data) {
      // console.log(response.data);
      return response.data;
    }
  } catch (err) {
    // console.log(err.response.data);
  }
};

export const CertificateDownload = async (token, id) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/pdf?courseId=${id}`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    // console.log(err);
  }
};

export const fcmToken = async (token, Body) => {
  const body = Body;
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'http://virtuallearn-env.eba-b8h9bw3u.ap-south-1.elasticbeanstalk.com/fcmToken',
      body,
      options,
    );
    return response;
  } catch (error) {
    console.log('///////', error);
  }
};
