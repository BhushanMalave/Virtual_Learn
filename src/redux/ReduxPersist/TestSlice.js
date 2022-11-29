import {createSlice} from '@reduxjs/toolkit';

const data = {
  testId: 1,
  testName: 'Module Test 1',
  testDuration: '00:30:00',
  questionsCount: 25,
  questions: [
    {
      questionId: 1,
      questionName: 'What is your name',
      option_1: 'aaa',
      option_2: 'bbb',
      option_3: 'ccc',
      option_4: 'ddd',
      state1: false,
      state2: false,
      state3: false,
      state4: false,
    },
    {
      questionId: 2,
      questionName: 'What is your age',
      option_1: 'ddd',
      option_2: 'eee',
      option_3: 'fff',
      option_4: 'ggg',
      state1: false,
      state2: false,
      state3: false,
      state4: false,
    },
    {
      questionId: 3,
      questionName: 'What is your bday',
      option_1: 'hhh',
      option_2: 'iii',
      option_3: 'jjj',
      option_4: 'kkk',
      state1: false,
      state2: false,
      state3: false,
      state4: false,
    },
    {
      questionId: 4,
      questionName: 'What is your fullname',
      option_1: 'lll',
      option_2: 'mmm',
      option_3: 'nnn',
      option_4: 'ooo',
      state1: false,
      state2: false,
      state3: false,
      state4: false,
    },
    {
      questionId: 5,
      questionName: 'What is your mothername',
      option_1: 'ppp',
      option_2: 'qqq',
      option_3: 'rrr',
      option_4: 'sss',
      state1: false,
      state2: false,
      state3: false,
      state4: false,
    },
    {
      questionId: 6,
      questionName: 'What is your fathername',
      option_1: 'www',
      option_2: 'ttt',
      option_3: 'uuu',
      option_4: 'vvv',
      state1: false,
      state2: false,
      state3: false,
      state4: false,
    },
  ],
};

export const TestSlice = createSlice({
  name: 'testdata',
  initialState: {
    question: null,
    testId: null,
    userAnswers: [],
    correctAnswers:[],
    resultHeader:null,
    resultAnswers:[],
    testPercentage:null
  },
  reducers: {
    addQuestionData: (state, action) => {
      state.question = action.payload;
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
      console.log(state.userAnswers)
    },

    setStatus1: (state, action) => {
      state.question?.questions.map(item => {
        if (item.questionId === action.payload) {
          item.state1 = true;
          item.state2 = false;
          item.state3 = false;
          item.state4 = false;
        }
      });
    },
    setStatus2: (state, action) => {
      state.question?.questions.map(item => {
        if (item.questionId === action.payload) {
          item.state1 = false;
          item.state2 = true;
          item.state3 = false;
          item.state4 = false;
        }
      });
    },
    setStatus3: (state, action) => {
      state.question?.questions.map(item => {
        if (item.questionId === action.payload) {
          item.state1 = false;
          item.state2 = false;
          item.state3 = true;
          item.state4 = false;
        }
      });
    },
    setStatus4: (state, action) => {
      state.question?.questions.map(item => {
        if (item.questionId === action.payload) {
          item.state1 = false;
          item.state2 = false;
          item.state3 = false;
          item.state4 = true;
        }
      });
    },
    removeAll: (state, action) => {
      state.userAnswers = []
    },
    setCorrectAnswers:(state,action)=>{
      state.correctAnswers=action.payload
      console.log("++++++",state.correctAnswers)
    },

    setResultHeader:(state,action)=>{
      state.resultHeader = action.payload
    },
    setResultAnswers:(state,action)=>{
      state.resultAnswers = action.payload
    },
    removeAnswers: (state, action) => {
      state.resultAnswers = [];
    },
    setTestPercentage:(state,action)=>{
      state.testPercentage=action.payload
    },

  },
});

export const {
  removeAll,
  addAnswerData,
  addQuestionData,
  setStatus1,
  setStatus2,
  setStatus3,
  setStatus4,
  addTestId,
  setCorrectAnswers,
  setResultHeader,
  setResultAnswers,
  removeAnswers,
  setTestPercentage
} = TestSlice.actions;
export default TestSlice.reducer;
