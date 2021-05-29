import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { NaverLogin } from 'react-naver-login';
import HorizonLine from './HorizonLine';
import validate from '../validation/validate';
import useForm from '../validation/useForm';
import {
  Errors,
  LoginBtn,
  KakaoBtn,
  NaverBtn,
} from '../validation/formElements';

const LoginModal = ({ submitForm, username, password }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  // const [isSubmitted, setIsSubmitted] = useState(false)

  // function submitForm() {
  //     setIsSubmitted(true);
  // }
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = async () => {
    console.log('로그인 성공!', username, password);
    await axios
      .post(
        '/user/login',
        {
          username,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.message === 'successfully logined!!') {
          console.log('로그인 성공');
        } else if (res.data.message === 'user not found or wrong password')
          console.log('로그인 실패');
      })
      .catch((err) => {
        console.error(err);
      });
    const handleKakao = async () => {
      console.log('로그인 성공!');
      await axios
        .post(
          '/auth/kakao',
          {
            username,
            password,
          },
          {
            'Content-Type': 'application/json',
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    const handleNaver = async () => {
      console.log('로그인 성공!');
      await axios
        .post(
          '/auth/naver',
          {
            username,
            password,
          },
          {
            'Content-Type': 'application/json',
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              ID
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your Id"
              value={values.userId}
              onChange={handleChange}
            />
            {errors.userId && <Errors>{errors.userId}</Errors>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <Errors>{errors.password}</Errors>}
          </div>
          <LoginBtn onClick={handleLogin}>
            {!isLogin ? 'Login' : 'Succeed!'}
          </LoginBtn>
          <br />
          <HorizonLine />
          <KakaoBtn onClick={handleKakao}>카카오 로그인</KakaoBtn>
          <br />
          <NaverBtn onClick={handleNaver}>네이버 로그인</NaverBtn>
        </form>
      </>
    );
  };
};

export default LoginModal;
