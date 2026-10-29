import React from 'react'

function Demo1() {
    function login(){
        alert("hello");
    }
  return (
    <div>
      <button onClick={login}>LOGIN</button>
    </div>
  )
}

export default Demo1
