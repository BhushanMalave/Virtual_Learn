import {createSlice} from '@reduxjs/toolkit';

const dataNew = {
  testId: 6,
  chapterNumber: 6,
  chapterName: 'Conclusion',
  testName: 'Final Test',
  testDuration: '00:04:00',
  questionsCount: 2,
  questions: [
    {
      questionId: 7,
      questionName: 'What is your efgh?',
      option_1: 'e',
      option_2: 'f',
      option_3: 'g',
      option_4: 'h',
      state1: false,
      state2: false,
      state3: false,
      state4: false,
    },
    {
      questionId: 15,
      questionName: 'How many letters are there in english alphabets ',
      option_1: '26',
      option_2: '25',
      option_3: '10',
      option_4: '28',
      state1: false,
      state2: false,
      state3: false,
      state4: false,
    },
  ],
};

export const FinalTestSlice = createSlice({
  name: 'finaltestdata',
  initialState: {
    questionData: null,
    testId: null,
    userAnswers: [],
    correctAnswers: [],
    finalresult: null,
    // resultAnswers:[],
    testPercentage:null,
  },
  reducers: {
    addFinalQuestionData: (state, action) => {
      state.questionData = action.payload;
    },
    addTestId: (state, action) => {
      state.testId = action.payload;
    },
    addAnswerData: (state, action) => {
      const val = state.userAnswers.map(userAnswers => userAnswers.questionId);
      if (val.includes(action.payload.questionId)) {
        state.userAnswers = state.userAnswers.filter(
          site => site.questionId != action.payload.questionId,
        );
        state.userAnswers.push(action.payload);
      } else {
        state.userAnswers.push(action.payload);
      }
    },

    setStatus1: (state, action) => {
      state.questionData?.questions.map(item => {
        if (item.questionId === action.payload) {
          item.state1 = true;
          item.state2 = false;
          item.state3 = false;
          item.state4 = false;
        }
      });
    },
    setStatus2: (state, action) => {
      state.questionData?.questions.map(item => {
        if (item.questionId === action.payload) {
          item.state1 = false;
          item.state2 = true;
          item.state3 = false;
          item.state4 = false;
        }
      });
    },
    setStatus3: (state, action) => {
      state.questionData?.questions.map(item => {
        if (item.questionId === action.payload) {
          item.state1 = false;
          item.state2 = false;
          item.state3 = true;
          item.state4 = false;
        }
      });
    },
    setStatus4: (state, action) => {
      state.questionData?.questions.map(item => {
        if (item.questionId === action.payload) {
          item.state1 = false;
          item.state2 = false;
          item.state3 = false;
          item.state4 = true;
        }
      });
    },
    removeAll: (state, action) => {
      state.userAnswers = [];
    },
    setCorrectAnswers: (state, action) => {
      state.correctAnswers = action.payload;
    },

    setFinalResult: (state, action) => {
      state.finalresult = action.payload;
    },
    // setResultAnswers:(state,action)=>{
    //   // console.log("++++++++",action.payload)
    //   state.resultAnswers = action.payload
    // },
    removeAnswers: (state, action) => {
      state.resultAnswers = [];
      state.questionData = [];
    },
    setTestPercentage: (state, action) => {
      state.testPercentage = action.payload;
    },
  },
});

export const {
  removeAll,
  addAnswerData,
  addFinalQuestionData,
  setStatus1,
  setStatus2,
  setStatus3,
  setStatus4,
  addTestId,
  setCorrectAnswers,
  setFinalResult,
  setResultAnswers,
  removeAnswers,
  setTestPercentage,
} = FinalTestSlice.actions;
export default FinalTestSlice.reducer;
