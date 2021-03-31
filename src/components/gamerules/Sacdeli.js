import React,{ useState } from 'react'
const Sacdeli = ({game,sigrdze,setgame,miyolebit,sigane}) => {
    var size=100/sigrdze;
    var temp=[...game];
    const [boolean, setboolean] = useState(true);
    
    const checkLeft=(index)=>{
        if(index%sigrdze===0){
            return 1
        }else{
            return 0
        }
    }
    const checkRight=(index)=>{
        if((Number(index)+1)%sigrdze===0){
            return 1
        }else{
            return 0
        }
    }
    const checkTop=(index)=>{
        // console.log(index);
        // console.log(sigrdze);
        if(Number(index)<sigrdze){
            return 1
        }else{
            return 0
        }
    }
    const checkBottom=(index)=>{
        if(index<sigrdze*sigane && index>=sigrdze*sigane-sigrdze){
            return 1
        }else{
            return 0
        }
    }
    const checkNumber=(index)=>{
        vertical(index);
        horizontal(index);
    }
  
    const horizontal=(index)=>{
        var counter=1;
        var symbol=boolean? "X":"0";
        for(let i=1;i<=miyolebit;i++){
            if(checkRight(Number(index)+i-1)===1){
                break;
            }else{
                if(temp[Number(index)+i]===symbol){
                    counter++;  
                }else{
                    break;
                }
            }
        }
        for(let i=1;i<=miyolebit;i++){
            if(checkLeft(Number(index)-i+1)===1){
                break
            }else{
                if(temp[Number(index)-i]===symbol){
                    counter++;  
                }else{
                    break;
                }
            }
        }

        if(counter >= miyolebit){
            alert('Winner')
        }
    }
    const vertical=(index)=>{
        var counter=1;
        var symbol=boolean? "X":"0";
        for(let i=1,k=Number(sigrdze);i<=miyolebit;i++,k+=Number(sigrdze)){
            if(checkBottom(Number(index)+k-Number(sigrdze))===1){
                console.log('bottom-bottom');
                break;
            }else{
                if(temp[Number(index)+k]===symbol){
                    counter++;  
                }else{
                    console.log('bottom-chukura');
                    break;
                }
            }
        }
        for(let i=1,k=Number(sigrdze);i<=miyolebit;i++,k+=Number(sigrdze)){
            
            if(checkTop(Number(index)-k+Number(sigrdze))===1){
                console.log('top-top');
                break
            }else{
                if(temp[Number(index)-k]===symbol){
                    counter++;  
                }else{
                    console.log('top-chukura');
                    break;
                }
            }
        }
        console.log(counter);
        if(counter >= miyolebit){
            alert('Winner')
        }
    }
    const clickhandler=(e)=>{
        if(boolean){
            temp[e.target.value]="X";
            setboolean(!boolean);
        }else{
            temp[e.target.value]="0";
            setboolean(!boolean);
        }
        setgame(temp);
        checkNumber(e.target.value);

    }
    return (
        <div style={{width:"100%",display:'flex',flexWrap:'wrap'}} >
            {game.map((item,index)=><button style={{width:`${size}%`,height:'30px',fontSize:'10px'}} value={index} onClick={clickhandler} >{item}</button>)}
        </div>
    )
}

export default Sacdeli
