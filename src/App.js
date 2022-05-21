import data from "./data";
import { useState, useEffect } from "react";
import "./App.css";
import { FaPlus, FaMinus } from "react-icons/fa";

function App() {
  const [questions, setQuestions] = useState(data);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (id) => {
    questions.map((item) => item.id === id);
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <h3 className="question-header">Questions and answers about login</h3>
      <section className="info">
        {questions.map((question) => {
          return (
            <article key={question.id} className="question">
              {isOpen ? (
                <>
                  {" "}
                  <header className="question-header">
                    <h4>{question.title}</h4>
                    <FaMinus onClick={() => handleToggle(question.id)} />
                  </header>
                  <p>{question.info}</p>
                </>
              ) : (
                <>
                  <header className="question-header">
                    <h4>{question.title}</h4>
                    <FaPlus onClick={() => handleToggle(question.id)} />
                  </header>
                </>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default App;
