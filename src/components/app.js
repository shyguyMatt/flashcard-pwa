import React from 'react';
import Nav from './nav';
import { Outlet } from 'react-router-dom';
import AuthProvider from '../contexts/authContext';

export default function App() {

  return(
    <>
      <AuthProvider >
        <Nav />
        <Outlet />
      </AuthProvider >
    </>
  )
}