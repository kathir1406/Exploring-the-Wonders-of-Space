import React from 'react'

export default function Destruct(props) {
    const{name,age}=props
  return (
    <div>
       <h2 className='app'> He is {name}, He is {age} old</h2>
    </div>
  )
}
