const data = [
  {
    id: 0,
    questionText: 'What is React?',
    answerOptions: [
      {
        answerText: 'React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps.',
        isCorrect: true,
        option: 'A',
      },
      {
        answerText: 'React is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
        isCorrect: false,
        option: 'B',
      },
      {
        answerText: 'React is a programming language that conforms to the ECMAScript specification.',
        isCorrect: false,
        option: 'C',
      },
    ]
  },
  {
    id: 1,
    questionText: 'What are the major features of React?',
    answerOptions: [
      {
        answerText: 'It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.',
        isCorrect: false,
        option: 'A',
      },
      {
        answerText: 'Supports server-side rendering, uses reusable/composable UI components to develop the view.',
        isCorrect: false,
        option: 'B',
      },
      {
        answerText: 'A and B',
        isCorrect: true,
        option: 'C',
      },
    ]
  },
  {
    id: 2,
    questionText: 'Everything in React is a ...?',
    answerOptions: [
      {
        answerText: 'Module',
        isCorrect: false,
        option: 'A',
      },
      {
        answerText: 'Component',
        isCorrect: true,
        option: 'B',
      },
      {
        answerText: 'Class',
        isCorrect: false,
        option: 'C',
      },
    ]
  },
  {
    id: 3,
    questionText: 'Keys are given to a list of elements in react. These keys should be -',
    answerOptions: [
      {
        answerText: 'Do not requires to be unique',
        isCorrect: false,
        option: 'A',
      },
      {
        answerText: 'Unique in the DOM',
        isCorrect: false,
        option: 'B',
      },
      {
        answerText: 'Unique among the siblings only',
        isCorrect: true,
        option: 'C',
      },
    ]
  },
  {
    id: 4,
    questionText: 'Who Develop React.js?',
    answerOptions: [
      {
        answerText: 'Facebook',
        isCorrect: true,
        option: 'A',
      },
      {
        answerText: 'Apple',
        isCorrect: false,
        option: 'B',
      },
      {
        answerText: 'Twitter',
        isCorrect: false,
        option: 'C',
      },
    ]
  },
  {
    id: 5,
    questionText: 'Which of the following API is a MUST for every ReactJS component?',
    answerOptions: [
      {
        answerText: 'componentDidMount()',
        isCorrect: false,
        option: 'A',
      },
      {
        answerText: 'renderComponent',
        isCorrect: true,
        option: 'B',
      },
      {
        answerText: 'getInitialState',
        isCorrect: false,
        option: 'C',
      },
    ]
  },
]

export default data
