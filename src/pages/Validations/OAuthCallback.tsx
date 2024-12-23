// src/components/OAuthCallback.js

import { useEffect } from 'react';
import DefaultLayout from "@/layouts/default";

import { useNavigate } from 'react-router-dom';

const OAuthCallback = () => {
  const navigate = useNavigate();

  const fetchJwtToken = async () => {
    try {
      const response = await fetch("http://localhost:8080/getjwt-token", {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      else{
        localStorage.setItem("token", data.token);
        localStorage.setItem("registered", data.registered);
        localStorage.setItem("userType", data.userType);
      }
      handleRedirect(data);
    } catch (error) {
      console.error("Error fetching token:", error);
      navigate("/");
    }
  };
  

  useEffect(() => {
      fetchJwtToken();
  }, []);
  

  function handleRedirect(data: { registered: boolean }) {
    setTimeout(() => {
      console.log(data.registered);
      if (data.registered === null) {
        // window.location.replace("/eduvault-deploy/demo");
        navigate("/");
      }
      if (data.registered === false) {
        // window.location.replace("/eduvault-deploy/postOauthReg");
        navigate("/postOauthReg");
      } else {
        // window.location.replace("/eduvault-deploy/demo");
        navigate("/stuhome");
      }
    }, 1000);
  }
  
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="text-center"> 
              <p className="text-lg text-gray-600">
                {/* Token : {token} */}
                CallBack Page
              </p>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default OAuthCallback;
