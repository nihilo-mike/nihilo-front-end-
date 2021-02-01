import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" name="username" ref={register()} />
      <input type="text" placeholder="password" name="password" ref={register()}/>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
