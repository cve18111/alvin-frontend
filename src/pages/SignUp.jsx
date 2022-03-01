import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

import Header from '../partials/Header';
import alvinIMG from '../images/logo_new.png';
import { data } from 'autoprefixer';

function SignUp() {
  const navigate = useNavigate();
  
  

  function handleSubmit(e) {
    e.preventDefault();
    var emailF = document.getElementById('email').value;
    var passwordF = document.getElementById('password').value; 
    var lastnameF = document.getElementById('lastname').value;
    var firstnameF = document.getElementById('firstname').value;
      axios.post('https://api.alvin.credit/users/signup',{
      email: emailF,
      password: passwordF,
      firstname: firstnameF,
      lastname: lastnameF
    })
    .then(function (response) {
      console.log(response.data);
      if(response.status===201)
      {
        // Jovic: Register successfull einblenden, sleep 2sekunden
        var userId=response.data.id;
        var base32=response.data.base;
        navigate("/validate?base="+base32+"&id="+userId,{replace:true});
 
        //document.location.reload();
        return;
      }else if(response.status===401){
        //in rot anzeigen email oder pw falsch 
        return
      }else if(response.status===409){
        //email exists
        return
      }
    })

   
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <img  class="center" src={alvinIMG}></img>
                <h1 className="h1">Welcome. We exist to make banking easier.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleSubmit}> 
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Firstname <span className="text-red-600">*</span></label>
                      <input id="firstname" type="text" className="form-input w-full text-gray-800" placeholder="Enter your firstname" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Lastname <span className="text-red-600">*</span></label>
                      <input id="lastname" type="text" className="form-input w-full text-gray-800" placeholder="Enter your lastname" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                      <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign up</button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the <a className="underline" href="/AGB">terms & conditions</a>, and our <a className="underline" href="/DSGVO">privacy policy</a>.
                                </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div>
                <div className="text-gray-600 text-center mt-6">
                  Already using alvin? <Link to="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignUp;