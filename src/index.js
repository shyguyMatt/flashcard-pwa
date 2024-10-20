import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import App from './components/app';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SignIn from './components/auth/signin'
import QuizPage from './components/pages/quiz_page';
import EditPage from './components/pages/edit_page';
import Quiz from './components/pages/quiz_page/quiz';
import QuizSelect from './components/pages/quiz_page/quizSelect';
import EditSelect from './components/pages/edit_page/editSelect';
import Edit from './components/pages/edit_page/edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<QuizSelect/>}/>
          <Route path='signin' element={<SignIn/>}/>
          <Route path='quiz' element={<QuizPage/>}>
            <Route index element={<QuizSelect/>}/>
            <Route path="*" element={<Quiz/>}/>
          </Route>
          <Route path='edit' element={<EditPage/>}>
            <Route index element={<EditSelect/>}/>
            <Route path="*" element={<Edit/>}/>
          </Route>
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
