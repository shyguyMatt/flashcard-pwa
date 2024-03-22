import React from 'react';
import Nav from './elements/nav';
import { Outlet } from 'react-router-dom';
import QuizSelect from './pages/quizSelect';

export default function App() {

  return(
    <>
      <Nav />
      <Outlet />
    </>
  )
}