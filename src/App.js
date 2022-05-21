import data from "./data";
import { useState } from "react";
import SingleQuestion from "./SingleQuestion";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="container">
      <h3 className="question-header">Questions and answers about login</h3>
      <section className="info">
        {questions.map((question) => {
          return (
        <SingleQuestion  key={question.id} {...question}/>
          );
        })}
      </section>
    </div>
  );
}

export default App;
