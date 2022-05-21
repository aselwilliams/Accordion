import {useState} from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

function SingleQuestion({title, info}) {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="question">
    <header className="question-header">
      <h4>{title}</h4>
      <button onClick={()=>setIsOpen(!isOpen)} className="btn">
      {isOpen ? <FaMinus /> : <FaPlus />}
      </button>
    </header>
   {isOpen && <p>{info}</p>}
</article>
  )
}

export default SingleQuestion