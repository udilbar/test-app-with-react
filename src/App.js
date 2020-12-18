import Questions from './Components/Data/Data'
import './App.css';

function App() {

  const buttonOnChangeHandler = (evt) => {
    console.log(evt.target)
  }

  return (
    <>
      <div className='container'>
        <ul className='quiz-list'>
        {
        Questions.map((question, index) => {
          return (
            <li className='quiz-item' key={index}>
              <p>{index + 1}. {question.questionText}</p>
              {
                question.answerOptions.map((answerOption, index) => (
                  <button key={index} className='quiz-button' type='button' onClick={buttonOnChangeHandler}>{answerOption.option}. {answerOption.answerText}</button>
                ))
              }
            </li>
          )
        })
      }
        </ul>
      </div>
    </>
  );
}

export default App;
