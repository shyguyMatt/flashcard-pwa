import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import App from './components/app';
import Home from './components/pages/home';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Editor from './components/pages/editor';
import QuizSelect from './components/pages/quizSelect';
import Quiz from './components/pages/quiz';
import Edit from './components/pages/edit';
import Create from './components/pages/create';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          {/* <Route path='/home' element={<Home/>}/> */}
          <Route index element={<QuizSelect/>}/>
          <Route path='/quiz_select' element={<QuizSelect/>}/>
          <Route path='/edit' element={<Editor/>}/>
          <Route path='/edit/*' element={<Edit/>}/>
          <Route path='/quiz/*' element={<Quiz/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route 
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
                <Link to='/'>Back Home!</Link>
              </main>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
