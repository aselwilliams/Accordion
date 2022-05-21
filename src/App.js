import data from './data';
import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [questions, setQuestions] =useState(data)

  console.log(questions)
  return (
    <div className="container">
<h3 className='question-header'>Questions and answers about login</h3>
<div>
  {questions.map((question)=>{
    return (
      <div key={question.id} className='question'>
      <div className='question-header'>
      <h4>{question.title}</h4>

      </div>
      <p>{question.info}</p>
      </div>
    )
  })}

</div>

    </div>
  );
}

export default App;
