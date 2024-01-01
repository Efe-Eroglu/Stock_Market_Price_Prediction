import React, { useEffect } from 'react'

const ASTOR = () => {
  const user = localStorage.getItem("user");

  useEffect(() => {
    if(!user){
      window.location.href="/login";
    }
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default ASTOR