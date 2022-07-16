import {app} from '../firebase/config';
import React, {
/*  useState,
  useContext,
  useEffect, */
} from 'react';
import {
/*  collection, addDoc, query, orderBy,
  onSnapshot, doc, setDoc, */
  getFirestore,
} from 'firebase/firestore';
import PropTypes from 'prop-types';


import {getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const db = getFirestore(app);

export const auth = getAuth(app);

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => userCredential)
        .catch((error) => error.message);
  }

  function SignOut() {
    return signOut(auth).then(() => {})
        .catch((error) => error);
  }

  return (
    <AuthContext.Provider
      value={{logIn, SignOut}}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

