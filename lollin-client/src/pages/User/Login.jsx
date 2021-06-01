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
  InputArea,
  LabelName,
  InputBox,
} from '../../validation/formElements';

const { Kakao ,naver} = window;

const Login = (history, { submitForm, username, password }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = async () => {
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

  const handleKakao = () => {
    Kakao.Auth.login({
      scope:'account_email',
      success:(res) =>{
        const jsonObj = JSON.stringify(res)
        const {access_token} = JSON.parse(jsonObj)
        Kakao.API.request({
          url: '/v2/user/me',
          success: (obj)=>{
            const userObj = JSON.stringify(obj)
            const userData = JSON.parse(userObj)
            const user = {
              id: userData.id,
              email:userData.kakao_account.email
            }
            axios.post('https://lollinserver.link/auth/kakao',user).then(
              (res) =>{
                if (res.status === 200) {
                  history.history.handleJwt(res.data.jwt);
                  history.history.handleLogin(true)
                  history.history.push("/")
                } else if (res.status === 'user not found or wrong password')
                  console.log('로그인 실패');
              })
              .catch((err) => {
                console.error(err);
              });
          },
          fail: ()=>{
            alert('Kakao login failed!')
          }
        })
    },
      fail:()=>{
        alert('Kakao login failed!')
      }
    })
    
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
        </Form>
      </Container>
    </>
  );
};

export default Login;
