import React, { useState } from 'react';

import useForm from '../validation/useForm';
import validate from '../validation/validate';
import axios from 'axios';
import { Errors, SignupBtn } from '../validation/formElements';

const SignupModal = ({ submitForm, userId, password, nickname, email }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  const handleSignup = async () => {
    console.log('회원가입 성공!', userId, password, nickname, email);
    await axios
      .post(
        '/user/signup',
        {
          userId,
          password,
          nickname,
          email,
        },
        {
          'Content-Type': 'application/json',
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.message === 'successfully sign up') {
          console.log('회원가입 성공');
        } else if (res.data.message === 'duplicated nickname') {
          console.log('중복됨');
        } else if (res.data.message === 'insufficient datas') {
          console.log('불충분한 데이터');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="form-inputs">
          <label htmlFor="userId" className="form-label">
            ID
          </label>
          <input
            id="userId"
            type="text"
            name="userId"
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
            placeholder="8 characters or more Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <Errors>{errors.password}</Errors>}
        </div>
        <div className="form-inputs">
          <label htmlFor="nickname" className="form-label">
            LoL-Nickname
          </label>
          <input
            id="nickname"
            type="text"
            name="nickname"
            className="form-input"
            placeholder="Enter your LoL-Nickname"
            value={values.nickname}
            onChange={handleChange}
          />
          {errors.nickname && <Errors>{errors.nickname}</Errors>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your E-mail"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <Errors>{errors.email}</Errors>}
        </div>
        <SignupBtn type="submit" onClick={handleSignup}>
          {!isSubmitted ? 'Sign up' : 'Succeed!'}
        </SignupBtn>
      </form>
    </>
  );
};

export default SignupModal;
