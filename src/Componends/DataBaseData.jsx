import axios from 'axios';
import React, { useState } from 'react';

const DataBaseData = () => {
    const [dname, setdname] = useState('');
    const [deptno, setdeptno] = useState(0);
    const [Data,SetData]=useState([])

    const SubmitData = (e) => {
        e.preventDefault(); 

        const Data = {
            'dname': dname,
            'deptno': deptno
        };

        axios.post('http://127.0.0.1:8000/DataBaseDataSave', Data, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((d) => {
            AllData()
        }).catch((e) => {
            console.log('Error:', e);
        });
        
    };
    const AllData=()=>{
        
        axios.get('http://127.0.0.1:8000/DataDataGet').then((d)=>{       
         SetData(d.data)
        }).catch((e)=>{

        })
    }

    return (
        <>
            <center className='mt-5 col-12 col-md-5 col-lg-4'>
                <form onSubmit={SubmitData}>
                    <div className='d-flex flex-row col-12 justify-content-between'>
                        <label htmlFor="dname">Dname</label>
                        <input
                            type="text"
                            id="dname"
                            required
                            onChange={(e) => setdname(e.target.value)}
                        />
                    </div>
                    <div className='d-flex flex-row col-12 justify-content-between mt-3'>
                        <label htmlFor="deptno">Deptno</label>
                        <input
                            type="number"
                            id="deptno"
                            required
                            onChange={(e) => setdeptno(Number(e.target.value))}
                        />
                    </div>
                    <input type="submit" value="Submit" className='mt-3' />
                </form>
            </center>

            <button className='btn btn-secondary ml-5 mt-5' onClick={AllData}>Get DataBase Data (Dept Table)</button>
            {Data.length>0&&<>
            <center className='mt-5 col-12'><table>
                <tr className='' style={{border:'2px solid red'}}>
                    <th className='col-6'>DName</th>
                    <th className='col-6'>Deptno</th>
                </tr>
                {Data.map((e)=>{
                    return(
                        <>
                        <tr className='text-center'>
                            <td>{e.deptno}</td>
                            <td className='ml-2'>{e.dept_name}</td>
                        </tr>
                        </>
                    )
                })}
                </table></center>
            </>}
        </>
    );
};

export default DataBaseData;
