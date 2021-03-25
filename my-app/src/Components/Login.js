import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import {useData} from "../Contexts/DataContext"
import {Button,Input}from 'reactstrap';
import { useHistory } from "react-router-dom";
import {ReactComponent as Logo} from "../Assets/nihilo.svg";
const Login=()=> {
  let history = useHistory();
  const{setUser}=useData();
  const { control, handleSubmit} = useForm({
    mode:"onSubmit"
  });
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
                history.push('/Dashboard');
                setUser(true);
              }}).catch(err=>alert("username or password incorrect"));
    }
  return (
    <div className="formbody">
      
 <form  onSubmit={handleSubmit(onSubmit)}>
 <Logo className="image"/>
   <label>Username</label>
   <Controller
   as={Input}
       bsSize="lg" 
       type="text" 
       placeholder="Username" 
       name="username" 
       control={control} 
       />
       <br/>
       <label >Password</label>
       <Controller
       as={Input}
       bsSize="lg" 
       type="password" 
       placeholder="Password" 
       name="password" 
       control={control}/>
      <br/>
     <Button type="submit" className="button" size="lg">Login</Button>
    </form>
    </div>
  );
}

export default Login;
