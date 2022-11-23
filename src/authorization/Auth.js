import axios from 'axios';

export const all = async token => {
  console.log('-----', token);
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
      'https://virtual-learn-app-java.herokuapp.com/ChangePassword',
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
    let res = await fetch('https://virtual-learn-app-java.herokuapp.com/Save', {
      method: 'patch',
      body: formBody,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(res.status)
    return res.status;
  } catch (err) {
    console.log(err);
  }
};

export const overViewData = async (token, objBody) => {
  const body = JSON.stringify(objBody);
  console.warn(body);

  try {
    const response = await axios.get(
      'https://virtual-learn-app-java.herokuapp.com/user/CourseOverView',
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc1VzZXIiOnRydWUsInN1YiI6IkJodXNoYW4iLCJpYXQiOjE2NjkxODE0MDIsImV4cCI6MTY2OTE5MDQwMn0.5OB2Y8C3uax5E9-UqI89iz-yTrFUlSyxu-pFmDiun_LMX3eCrTssQZaT97-ymvVjaPz_7LcS1bb2T_eRDG-87g',
          'Content-Type': 'application/json',
        },
        params: {
          courseId: 3,
        },
      },
    );
    console.log(response);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('/////', error.response);
  }
};

// export const overViewData = async (token, objBody) => {
//   const body = JSON.stringify(objBody);
//   try {
//     let res = await fetch(
//       'https://virtual-learn-app-java.herokuapp.com/user/CourseOverView',
//       {
//         method: 'GET',
//         body: body,
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       },
//     );
//     const jsonResponse = await res.json();
//     console.log(jsonResponse);
//     return res.status;
//   } catch (err) {
//     console.log(err);
//   }
// };
