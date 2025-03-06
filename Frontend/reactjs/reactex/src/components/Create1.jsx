import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Create1() {
  const navigate=useNavigate()
    const[Data,setData]=useState({
        placename:'',
        description:'',
        price:'',
        img:''
      })
      const handlechange=(e)=>{
        setData({...Data,[e.target.name]:e.target.value})
      }
      const handlesubmit=(e)=>{
        // e.preventDefault()
        console.log(Data)
        axios.post('http://localhost:3002/placedetails/placecreate',Data)
        .then(res=>{
          alert('updated Successfully....')
        })
        .catch(err=>{
          alert('Something went wrong')
          console.log(err)
        })
    }
  return (
    <div className='create-body'>
        <div className='create-form'>
            <form>
            <button className='close'onClick={()=>{navigate('/admin')}}>X</button><br/>
                <p className='ce-header'>Create Page:-</p>            
                <label className='create-details'>Place Name:-</label><br/>
                <input type='text' name='placename' value={Data.hotelname} onChange={handlechange}/><br/>

                <label className='create-details'>Place Description:-</label><br/>
                <textarea name='description' value={Data.description} onChange={handlechange}/><br/>

                <label className='create-details'>Place price:-</label><br/>
                <input name='price' value={Data.price} onChange={handlechange}/><br/>

                <label className='create-details'>Place Image:-</label><br/>
                <input name='img' value={Data.img} onChange={handlechange}/><br/>

                <button type='submit' onClick={handlesubmit} className='create-btn'>Submit</button>
            </form>
            {/* {msg} */}
        </div>
    </div>
  )
}
