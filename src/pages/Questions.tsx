import React from 'react'
import data from "../fixtures/data";

function Questions() {
  return (
    <>
    <div>Questions</div>
    {data.map((question, index) => {
        return (
            <div key={index}>
            <div>{question.question}</div>
            <div>{question.answers}</div>
            </div>
        )
    })}
    </>
  )
}

export default Questions