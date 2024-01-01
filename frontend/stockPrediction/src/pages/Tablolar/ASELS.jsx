import React, { useEffect } from 'react'

const ASELS = () => {

  const user = localStorage.getItem("user");

  useEffect(() => {
    if(!user){
      window.location.href="/login";
    }
  }, []);

  return (
    <div>ASELS</div>
  )
}

export default ASELS