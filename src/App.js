import data from "./data";
import { useState, useEffect } from "react";
import "./App.css";
import { FaPlus, FaMinus } from "react-icons/fa";

function App() {
  const [questions, setQuestions] = useState(data);
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="container">
      <h3 className="question-header">Questions and answers about login</h3>
      <section className="info">
        {questions.map((question) => {
          return (
            <article key={question.id} className="question">
                  <header className="question-header">
                    <h4>{question.title}</h4>
                    <button onClick={()=>setIsOpen(!isOpen)}>
                    {isOpen ? <FaMinus /> : <FaPlus />}
                    </button>
                  </header>
                 {isOpen && <p>{question.info}</p>}
             
      
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default App;
