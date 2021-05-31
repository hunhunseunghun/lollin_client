import axios from 'axios';
import { useState, useEffect } from 'react';
import validate from "./validate";

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    nickname: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    // if(e.target.name === "username" || e.target.name === "nickname") {
    //   setTimeout(() => {
    //     axios.get(`https://lollinserver.link/user/check?${e.target.name}=${e.target.value}`)
    //     .then((res) => {
    //       if(res.status === 200) {
    //         validate(200)
    //       } else if(res.status === 400 || res.status === 409) {
    //         validate(409)
    //       }
    //     })
    //   }, 1000)
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setErrors(validate(values));
    setIsSubmitting(true);
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
