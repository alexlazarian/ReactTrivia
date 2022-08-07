import React from 'react'
import { useNavigate } from 'react-router-dom';

import * as ROUTES from "../constants/routes";

function Results() {
  const navigate = useNavigate();

  const handleRestart = (e) => {
    e.preventDefault();
    navigate(ROUTES.QUESTIONS);
  };

  return (
    <>
			<div>Results</div>
			<button onClick={handleRestart}>Play again!</button>
		</>
  )
}

export default Results