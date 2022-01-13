import React, { useState, useEffect, Fragment } from 'react';
import ButtonAdd from './ButtonAdd'


function DataInCredit() {

    const [Credit,setCredit] = useState(()=>{return []})
    const [loading, setLoading] = useState(true)

    const GETAPI = async () =>{

        try {

            const response = await fetch("https://moj-api.herokuapp.com/credits")
            const data = await response.json()
            setCredit(previous => previous = data)
            setLoading(false)
        }
        catch(err)
        {
            console.error(err)
        }

    }
    
    useEffect(()=>{
        GETAPI()
        
    },[])


    return (
        <Fragment>
            <ButtonAdd Data = {Credit} setData = {setCredit}/>

        {
            
            (loading === false)?
            Credit.map((items,index) =>{
                return (<li key ={items+index} className='list-group-item' onMouseEnter={(e) =>{e.target.className = 'list-group-item active'}} onMouseLeave={(e) => {e.target.className = 'list-group-item'}}>
                    Description:&nbsp;{items.description}<br/>
                    Amount:&nbsp;{items.amount}<br/>
                    Date:&nbsp;{items.date}
                </li>)
            })
            :
            <p>loading</p>
        }
        </Fragment>
 

    );
}

export default DataInCredit;