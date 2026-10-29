import React from 'react'

function Demo() {
    let name="Pavan";
    let age=16;
  return (
    <div>
      <h1>Demo</h1>
      <h2>{name}</h2>
      <h1>{10+20}</h1>
      <h1>{age>16 ? "eligible":"not eligible"}</h1>
    </div>
  )
}

export default Demo
