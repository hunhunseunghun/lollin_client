import React, { useState } from 'react';
import useForm from '../../validation/useForm';
import validate from '../../validation/validate';
import axios from 'axios';
import {
  Container,
  Form,
  InputArea,
  Errors,
  InputBox,
  LabelName,
  SignupBtn,
  Title,
} from '../../validation/formElements';

const Signup = (history, { submitForm, username, password, nickname, email }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const handleSignup = async () => {
    console.log('회원가입 접속', values.username, values.password, values.nickname, values.email);
    await axios
      .post(
        'https://lollinserver.link/user/signup',
        {
          username: values.username,
          password: values.password,
          nickname: values.nickname,
          email: values.email,
        },
        {
          'Content-Type': 'application/json',
          withCredentials: true,
        }
      )
      .then((res) => {
        if(res.status === 200) {
          submitForm();
          setTimeout(() => history.history.push("/"), 1000)
        } else if (res.status === 409 || res.status === 400) {
          console.log('중복됨');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>Sign Up</Title>
          <InputArea>
            <LabelName htmlFor="username">ID</LabelName>
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
            <InputBox
              id="password"
              type="password"
              name="password"
              placeholder="8 characters or more Password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <Errors>{errors.password}</Errors>}
          </InputArea>
          <InputArea>
            <LabelName htmlFor="nickname">LoL-Nickname</LabelName>
            <InputBox
              id="nickname"
              type="text"
              name="nickname"
              placeholder="Enter your LoL-Nickname"
              autoComplete="off"
              value={values.nickname}
              onChange={handleChange}
            />
            {errors.nickname && <Errors>{errors.nickname}</Errors>}
          </InputArea>
          <InputArea>
            <LabelName htmlFor="email">E-mail</LabelName>
            <InputBox
              id="email"
              type="email"
              name="email"
              placeholder="Enter your E-mail"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <Errors>{errors.email}</Errors>}
          </InputArea>
          <SignupBtn type="submit" onClick={handleSignup}>
            {!isSubmitted ? 'Submit' : 'Welcome!'}
          </SignupBtn>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
