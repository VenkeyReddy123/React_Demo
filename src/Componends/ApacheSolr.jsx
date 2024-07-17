import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ApacheSolr = () => {
    const [Data,SetData]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        
    })
    const AllData=()=>{
        
        axios.get('http://127.0.0.1:8000/ApacheData').then((d)=>{
        
         const data=d.data.response.docs
         SetData(data)
        }).catch((e)=>{

        })
    }
  return (
    <>
    <div>ApacheSolr</div>
    <button className='btn btn-primary ml-3 ' onClick={AllData}>Get All Data In Apache Solr Data Base</button>
    {Data&&<>
          {Data.map((e)=>{
            return(
                <>
                  
                        <div className='d-flex flex-column'>
                            <div className='d-flex flex-row'>
                            <span className='mr-2 ml-2'> Name :</span>
                            <p>{e.name[0]}</p>
                            </div>
                             <div className='d-flex flex-row'>
                             <span className='mr-2 ml-2'>age :</span>
                             <p>{e.age[0]}</p>
                             </div>
                        </div>
                  
                </>
            )
          })}
    </>}<br></br>
    <button className='mt-5 ml-2 btn btn-warning' onClick={()=>{navigate('/SendData')}}>Add Data in Apache Solr</button>
    </>
  )
}

export default ApacheSolr