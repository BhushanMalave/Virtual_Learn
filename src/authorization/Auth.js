import axios from 'axios';

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
  try{
  let res = await fetch('https://virtual-learn-app-java.herokuapp.com/save', {
    method: 'patch',
    body: formBody,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const jsonResponse = await res.json();
   console.log(jsonResponse);
  return res.status;
}catch(err)
{
  console.log(err);
}
};

export const overViewData = async (token,id) => {
 
const options =  {
  headers: {
    Authorization:
      `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
};

  try {
    const response = await axios.get(
      `https://virtual-learn-app-java.herokuapp.com/user/courseOverView/${id}`,
      options,
     
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
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



export const searchData = async (token,string) => {
 
  const options =  {
    headers: {
      Authorization:
        `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
  };
  
    try {
      const response = await axios.get(
        `https://virtual-learn-app-java.herokuapp.com/user/search/${string}`,
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