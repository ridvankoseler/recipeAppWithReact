import React from "react";
import LoginContainer, { FormContainer } from "./Login.style";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    username: "Ahmet",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate(-1);
    //navigate ile home yönledirdik logine giriş yapılınca
  };
  return (
    <LoginContainer>
      <FormContainer>
        <form className='p-2 fw-bold m-auto text-center'>
          <div className='m-auto text-center'>
            <img
              className='m-1 rounded-circle'
              style={{ margin: "auto", width: "250px" }}
              src='https://img2.pngindir.com/20180622/rfr/kisspng-fruit-vegetable-fruit-vegetable-food-5b2cfda3d4b111.2884339215296751718712.jpg'
              alt=''
            />
          </div>
          <div className='d-flex flex-column text-center'>
            <label className='text-success'>Username</label>
            <input
              type='text'
              name='text'
              id='text'
              placeholder='UserName'
              required
            />
          </div>
          <div className='d-flex flex-column text-center'>
            <label className='text-primary' htmlFor=''>
              Password
            </label>
            <input
              type='password'
              name=''
              id=''
              placeholder='Password'
              required
            />
          </div>
          <div className='text-center mt-2'>
            <button
              onSubmit={handleSubmit}
              className='fw-bold btn btn-warning'
              type='submit'
            >
              Login
            </button>
          </div>
        </form>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
