import axios from 'axios';
import React, { useState, useEffect } from 'react';
import HorizonLine from '../../modals/HorizonLine';
import validate from '../../validation/validate';
import useForm from '../../validation/useForm';
import {
  Container,
  Form,
  Title,
  Errors,
  LoginBtn,
  KakaoBtn,
  NaverBtn,
  InputArea,
  LabelName,
  InputBox,
} from '../../validation/formElements';

const Login = (history, { submitForm, username, password }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = async () => {
    console.log('로그인 성공!', values.username, values.password);
    await axios
      .post(
        'https://lollinserver.link/user/login',
        {
          username: values.username,
          password: values.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          history.history.handleJwt(res.data.jwt);
          history.history.handleLogin(true)
          setIsLogin(true)
          setTimeout(() => history.history.push("/"), 1000)
        } else if (res.status === 'user not found or wrong password')
          console.log('로그인 실패');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleKakao = async () => {
    console.log('로그인 접속성공!');
    await axios
      .post(
        'https://kauth.kakao.com/oauth/authorize?client_id=f74b9c0261d2189c9830e2f15ee63423&redirect_uri=https://lollinserver.link/auth/kakao&response_type=code',
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
      .get(
        'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=8lA0wX_a_7Ol1i2LsNH7&redirect_uri=https://lollinserver.link/auth/naver&state=authentication_code',
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
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>Login</Title>
          <InputArea>
            <LabelName htmlFor="username">ID</LabelName>
            <br />
            <InputBox
              id="username"
              type="text"
              name="username"
              placeholder="Enter your ID"
              autoComplete="off"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <Errors>{errors.username}</Errors>}
          </InputArea>
          <InputArea>
            <LabelName htmlFor="password">Password</LabelName>
            <br />
            <InputBox
              id="password"
              type="password"
              name="password"
              placeholder="Enter your Password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <Errors>{errors.password}</Errors>}
          </InputArea>
          <br />
          <LoginBtn onClick={handleLogin}>
            {!isLogin ? 'Login' : 'Succeed!'}
          </LoginBtn>
          <br />
          <HorizonLine />
          <KakaoBtn onClick={handleKakao}>Kakao Login</KakaoBtn>
          <NaverBtn onClick={handleNaver}>Naver Login</NaverBtn>
        </Form>
      </Container>
    </>
  );
};

export default Login;
