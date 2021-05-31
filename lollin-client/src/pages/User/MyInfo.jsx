import React, { useState, useEffect } from 'react';
import useForm from '../../validation/useForm';
import validate from '../../validation/validate';
import axios from 'axios';
import {
  Container,
  Form,
  Title,
  Errors,
  LabelName,
  UpdateBtn,
  InputBox,
  LeaveBtn,
  InputArea,
} from '../../validation/formElements';
import HorizonLine from '../../modals/HorizonLine';
const jwt = require('jsonwebtoken')
require('dotenv').config();

const MyInfo = (history, {nickname, newpassword}) => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isLeaved, setIsLeaved] = useState(false);
  const [isAuth, setisAuth]= useState(true)

  useEffect(() => {
    let decode 
    try{
      decode = jwt.verify(history.history.jwt, process.env.REACT_APP_SECRET_KEY);
      if(decode.type === 'none'){
        setisAuth(false)
      }
    }catch(err){
      console.log(err)
    }
  },[])



  const handleUpdate = async () => {
    console.log('정보변경 접속', values.nickname, values.newpassword);

    await axios
      .post(
        'https://lollinserver.link/user/update',
        {
          jwt :history.history.jwt,
          nickname: values.nickname,
          newpassword: values.newpassword,
        },
        {
          'Content-Type': 'application/json',
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        if(res.status === 200) {
          console.log('정보변경 성공');

          setTimeout(() => history.push("/"), 1000)
        } else if (res.data.message === 'insufficient datas') {
          console.log('불충분한 데이터');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLeave = () => {
    setIsLeaved(true);
  };
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>My Info</Title>
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
          {isAuth? '':<InputArea>
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
          </InputArea>}
          
          <UpdateBtn type="submit" onClick={handleUpdate}>
            {!isSubmitted ? 'Update' : 'Succeed!'}
          </UpdateBtn>
          <br />
          <HorizonLine />
          <LeaveBtn type="submit" onClick={handleLeave}>
            {!isLeaved? 'Leave' : 'Good-Bye!'}
          </LeaveBtn>
        </Form>
      </Container>
    </>
  );
};

export default MyInfo;
