import React from 'react'

const Gamerules = ({setsigrdze,setsigane,setmiyolebit}) => {
    
    const clickhandler=()=>{
        
    }
    return (
        <div>
            <input onChange={(e)=>setsigrdze(e.target.value)} style={{display:'block',marginTop:'20px'}} placeholder='sigrdze' />
            <input onChange={(e)=>setsigane(e.target.value)} style={{display:'block',marginTop:'20px'}} placeholder='sigane' />
            <input onChange={(e)=>setmiyolebit(e.target.value)} style={{display:'block',marginTop:'20px'}} placeholder='miyolebit ramdeni' />
            
        </div>
    )
}

export default Gamerules
