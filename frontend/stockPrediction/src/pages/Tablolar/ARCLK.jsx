import React, { useEffect } from 'react'

const ARCLK = () => {

  const user = localStorage.getItem("user");

  useEffect(() => {
    if(!user){
      window.location.href="/login";
    }
  }, []);

  return (
    <div>ARCLK</div>
  )
}

export default ARCLK