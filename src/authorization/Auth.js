import axios from 'axios';
import Toast from 'react-native-simple-toast'

export const refreshToken = async token => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(
      'https://virtual-learning-app-java.herokuapp.com/refreshToken',
      options,
    );
    if (response.data.jwtToken) {
      return response.data.jwtToken;
    }
  } catch (error) {
    // console.log(error.response.data);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
  }
};
export const drawerData = async token => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(
      'https://virtual-learning-app-java.herokuapp.com/user/menu',
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // console.log(error);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
  
  }
};

export const termsAndConditions = async () => {
  try {
    const response = await axios.get(
      'https://virtual-learning-app-java.herokuapp.com/termsAndConditions',
    );
    console.log('=====', response.data);
    if (response.data.message) {
      return response.data.message;
    }
  } catch (error) {
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
  }
};

export const privacyPolicy = async () => {
  try {
    const response = await axios.get(
      'https://virtual-learning-app-java.herokuapp.com/privacyPolicy',
    );
    // console.log("=====",response.data.message);
    if (response.data.message) {
      return response.data.message;
    }
  } catch (error) {
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      'https://virtual-learning-app-java.herokuapp.com/user/home/course/all',
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      'https://virtual-learning-app-java.herokuapp.com/user/home/course/newest',
      options,
    );
    //console.log("=====",response.data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // console.log(error);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      'https://virtual-learning-app-java.herokuapp.com/user/home/course/popular',
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // console.log(error);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      'https://virtual-learning-app-java.herokuapp.com/user/changePassword',
      body,
      options,
    );

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // console.log(error);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
  }
};

export const mpChangeUserData = async (token, formBody) => {
  try {
    let res = await fetch(
      'https://virtual-learning-app-java.herokuapp.com/user/save',
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
    // console.log('-----', err);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
  }
};

export const changeUserData = async (token, formBody) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  };

  try {
    const response = await axios.put(
      'https://virtual-learning-app-java.herokuapp.com/save',
      formBody,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // console.log(error.response.data);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      `https://virtual-learning-app-java.herokuapp.com/user/courseOverView?courseId=${id}`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // console.log(error.response.data);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      `https://virtual-learning-app-java.herokuapp.com/user/continue?courseId=${id}`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // console.log(error.response.data);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      `https://virtual-learning-app-java.herokuapp.com/user/search?searchKey=${string}`,
      options,
    );
    // console.log(response.data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    //console.log(error.response.data);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      'https://virtual-learning-app-java.herokuapp.com/user/categoriesWP',
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // console.log(error);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      'https://virtual-learning-app-java.herokuapp.com/user/allSubCategoriesWP',
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // console.log(error);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      'https://virtual-learning-app-java.herokuapp.com/user/topSearches',
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // console.log('=======', error);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      'https://virtual-learning-app-java.herokuapp.com/user/keywords',
      body,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    // console.log(error.response.status);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      `https://virtual-learning-app-java.herokuapp.com/user/searchByKeyword?keyword=${string}`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    //console.log(error.response.data);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      'https://virtual-learning-app-java.herokuapp.com/user/applyFilter',
      body,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    // console.log(err);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      'https://virtual-learning-app-java.herokuapp.com/user/enroll',
      body,
      options,
    );

    if (response.data) {
      console.log('tatatatatta', response.data);
      return response.data;
    }
  } catch (error) {
    // console.log(error.response.data);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      'https://virtual-learning-app-java.herokuapp.com/user/submit',
      body,
      options,
    );

    if (response.data) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    // console.log(error.response.data);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      'https://virtual-learning-app-java.herokuapp.com/user/pauseTime',
      body,
      options,
    );
    console.log(response.data);
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    // console.log(err);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      `https://virtual-learning-app-java.herokuapp.com/user/resultHeader?testId=${id}`,
      options,
    );
    if (response.data) {
      console.log('i am response', response.data);
      return response.data;
    }
  } catch (err) {
    // console.log(err);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      `https://virtual-learning-app-java.herokuapp.com/user/resultAnswers?testId=${id}`,
      options,
    );
    if (response.data) {
      console.log(response.data);
      return response.data;
    }
  } catch (err) {
    // console.log(err);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      `https://virtual-learning-app-java.herokuapp.com/user/moduleTest?testId=${id}`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    // console.log(err.response.data);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      `https://virtual-learning-app-java.herokuapp.com/user/finalTest?testId=${id}`,
      options,
    );
    if (response.data) {
      console.log('===', response.data);
      return response.data;
    }
  } catch (err) {
    // console.log(err);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      'https://virtual-learning-app-java.herokuapp.com/user/finalSubmit',
      body,
      options,
    );

    if (response.data) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    // console.log(error.response.data);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      `https://virtual-learning-app-java.herokuapp.com/user/result?testId=${id}`,
      options,
    );
    if (response.data) {
      console.log(response.data);
      return response.data;
    }
  } catch (err) {
    // console.log(err.response.data);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
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
      `https://virtual-learning-app-java.herokuapp.com/user/pdf?courseId=${id}`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    // console.log(err);
    Toast.show('Something Went Wrong,Try Again!!!',Toast.SHORT)
  }
};
