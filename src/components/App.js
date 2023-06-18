import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions,setQuestions] = useState([])

  const fetchQuestions = async () => {
    const response = await fetch("http://localhost:4000/questions").then(r=>r.json())
    setQuestions(response)

  }
  useEffect(()=>{
  
    fetchQuestions()},[])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList questions={questions} />}
    </main>
  );
}

export default App;
