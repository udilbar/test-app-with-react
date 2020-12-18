import { useState } from 'react'
import Questions from './Components/Data/Data'
import './App.css';

function App() {

  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const buttonOnChangeHandler = ( isCorrect ) => {
    if (isCorrect) {
      setScore(score + 1)
    }



    const nextQuestion = currentQuestion + 1;
		if (nextQuestion < Questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
  };

  return (

      <div className='container'>
      {
          showScore ? (
            <div className='score-section'>
					    You scored {score} out of {Questions.length}
				    </div>
          ) : (
            <>
        <ul className='quiz-list'>
        {
            <li className='quiz-item'>
              <p>{currentQuestion + 1}. {Questions[currentQuestion].questionText}</p>
              {
                Questions[currentQuestion].answerOptions.map((answerOption, id) => (
                  <button key={id} id='quiz-button' type='button' onClick={buttonOnChangeHandler.bind(null, answerOption.isCorrect)}>{answerOption.option}. {answerOption.answerText}</button>
                ))
              }
            </li>
        }
        </ul>
        </>
          )}
      </div>
  );
}

export default App;
