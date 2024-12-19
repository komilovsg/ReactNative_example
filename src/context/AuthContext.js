import React, {createContext, useState} from 'react';
import {Children} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [test, setTest] = useState('Test Value');
  return {};
};
