import axios from 'axios'
import React, { useState } from 'react'

const SendDataSolr = () => {
    const [name, setname] = useState('')
    const [age, setage] = useState(0)
    const SubmitData=()=>{
        const Data={
            'name':name,
            'age':age
         }
        
       
         axios.post('http://127.0.0.1:8000/SendDataSolr',Data,{ headers: {
            'Content-Type': 'application/json', // This is generally set automatically by axios
          },}).then((d)=>{
           
         }).catch((e)=>{
            console.log('error')
         })
    }
    return (
        <>
           <center className='mt-5 col-12 col-md-5 col-lg-4'> <form action="" onSubmit={(e)=>{
            e.preventDefault()
            SubmitData()
           }} >
                <div className='d-flex flex-row col-12 justify-content-between'>
                    <label htmlFor="">name</label>
                    <input type="text" name="" id="" required onChange={(e)=>{setname(e.target.value)}} />

                </div>
                <div className='d-flex flex-row col-12 justify-content-between mt-3'>
                    <label htmlFor="" className=''  >Age</label>
                    <input type="number" required  onChange={(e)=>{setage(e.target.value)}} />
                </div>
                <input type="submit" value={"Submit"} className='mt-3' />
            </form>
            </center>
        </>
    )
}

export default SendDataSolr