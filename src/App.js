import Questions from './Components/Data/Data'
import './App.css';

function App() {

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
                question.answerOptions.map((answerOption) => (
                  <button className='quiz-button'>{answerOption.answerText}</button>
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
