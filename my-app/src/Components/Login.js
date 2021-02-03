import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import{useHistory}from 'react-router-dom'
const Login=()=> {
  const { register, handleSubmit} = useForm();
  const onSubmit =(authData) => {
      axios({
          method:"POST",
          url:"https://nihiloacc.herokuapp.com/authenticate",
          data:{username:authData.username,
                password:authData.password}
        }).then(response=>{
            if(response.status==200){
                const { token } = response.data;
                localStorage.setItem('token',token)
               }}).catch(err=>alert("username or password incorrect"));
    }
  return (
    <body className="formbody">
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input className="userName" type="text" placeholder="Username" name="username" ref={register()} />
      <input className="passWord" type="text" placeholder="password" name="password" ref={register()}/>
      <button className="Submit" type="submit">Login</button>
    </form>
    </body>
  );
}

export default Login;
