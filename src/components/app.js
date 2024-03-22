import React from 'react';
import Nav from './elements/nav';
import { Outlet } from 'react-router-dom';

export default function App() {

  return(
    <>
      <Nav />
      <Outlet />
    </>
  )
}