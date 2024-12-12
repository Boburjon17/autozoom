import React, { useState } from 'react'

const LoginPage = () => {
    const [number, setNumber] = useState()
    const [password, setPassword] = useState()
    //  const base_URL = 'https://realauto.limsa.uz/api'


      

         
      

    function loginSubmit (e){
        e.preventDefault();

        fetch('https://realauto.limsa.uz/api/auth/signin',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phone_number:number,
                    password:password
                })
            }

           ) .then((response)=> response.json())
                .then((natija)=>{
                    console.log(natija?.data);
                })
        // e.target.reset()
        

    }
  return (
    <div>
      <form  onSubmit={loginSubmit}>
        <input onChange={(e)=> setNumber(e?.target?.value)} type="text" required minLength={4} placeholder='Raqamni kiriting' />
        <input onChange={(e)=> setPassword(e?.target?.value)} type="text" required minLength={4} placeholder='Parolni kiriting' />
        <button type='submit'>Login qilish</button>
      </form>
            
    </div>
  )
}


export default LoginPage