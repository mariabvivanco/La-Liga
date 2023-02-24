import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { loginRequest, token } from '../store/auth/authSlicer';

const LoginPage = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  const tokenUser = useSelector(token);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '30px',
        backgroundColor: '#e4e4e4',
      }}
    >
      <div>
        <u>
          <strong>
            <span
              style={{
                fontWeight: 'bolder',
              }}
            >
              LOGIN
            </span>
          </strong>
        </u>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(loginRequest({ email, password }));
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'column',
          padding: '30px',
          backgroundColor: '#e4e4e4',
          rowGap: '15px',
        }}
      >
        <span>Email</span>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <span>Password</span>
        <input
          type="text"
          name="email"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="submit"
          style={{
            padding: '5px',
            border: '1px solid black',
            width: '80px',
          }}
        />
      </form>

      <div>Token: {tokenUser}</div>
    </div>
  );
};

export default LoginPage;
