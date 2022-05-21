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
      <div>
        {questions.map((question) => {
          return (
            <div key={question.id} className="question">
              {isOpen ? (
                <>
                  {" "}
                  <div className="question-header">
                    <h4>{question.title}</h4>
                    <FaMinus onClick={() => handleToggle(question.id)} />
                  </div>
                  <p>{question.info}</p>
                </>
              ) : (
                <>
                  <div className="question-header">
                    <h4>{question.title}</h4>
                    <FaPlus onClick={() => handleToggle(question.id)} />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
