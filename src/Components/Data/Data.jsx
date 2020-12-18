const data = [
  {
    questionText: 'What is React?',
    answerOptions: [
      { answerText: 'React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps.',
        isCorrect: true,
      },
      { answerText: 'React is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
        isCorrect: false,
      },
      { answerText: 'React is a programming language that conforms to the ECMAScript specification.',
        isCorrect: false,
      },
    ]
  },
  {
    questionText: 'What are the major features of React?',
    answerOptions: [
      { answerText: 'It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.',
        isCorrect: false,
      },
      { answerText: 'Supports server-side rendering, uses reusable/composable UI components to develop the view.',
        isCorrect: false,
      },
      { answerText: 'A and B',
        isCorrect: true,
      },
    ]
  },
]

export default data
