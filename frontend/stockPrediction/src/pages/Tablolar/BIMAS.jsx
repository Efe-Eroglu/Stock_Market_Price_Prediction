import React, { useEffect } from 'react'

const BIMAS = () => {

  const user = localStorage.getItem("user");

  useEffect(() => {
    if(!user){
      window.location.href="/login";
    }
  }, []);

  return (
    <div>BIMAS</div>
  )
}

export default BIMAS