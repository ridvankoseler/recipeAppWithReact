import React from 'react'
import LoginContainer, { FormContainer } from './Login.style'

const Login = () => {

    const handleSubmit=(e)=>{
        e.preventDefault()
        
    }
  return (
    <LoginContainer>
      <FormContainer>
        <form className='p-2 m-auto text-center'>
          <div className='m-auto text-center'>
            <img className='m-1 rounded-circle' style={{margin:"auto", width:'250px'}}
              src='https://img2.pngindir.com/20180622/rfr/kisspng-fruit-vegetable-fruit-vegetable-food-5b2cfda3d4b111.2884339215296751718712.jpg'
              alt=''
            />
          </div>
          <div className='d-flex flex-column text-center'>
            <label className='text-success' htmlFor=''>
              Username
            </label>
            <input type='text' name='' id='' />
          </div>
          <div className='d-flex flex-column text-center'>
            <label className='text-primary' htmlFor=''>
              Password
            </label>
            <input type='password' name='' id='' />
          </div>
          <div className='text-center mt-2'>
            <button onSubmit={handleSubmit} className='btn btn-warning' type='submit'>
              Login
            </button>
          </div>
        </form>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login