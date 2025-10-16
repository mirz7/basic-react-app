import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";


function Userlogin(){
    let x=useRef()
    let y=useRef()
    console.log(x,y);
    let a=useNavigate()
    let [data,setData]=useState({})
    let clickedId= useParams()
    console.log(clickedId);

    useEffect(()=>{
        let x= fetch(`https://jsonplaceholder.typicode.com/users/${clickedId.id}`)
        let y=x.then((a)=>{
            return a.json()
        })

        y.then((b)=>{
            console.log(b);
            setData(b)
        
            
        })
        y.catch((err)=>{console.log(err);})
    },[])

    function f1(e){
        
        e.preventDefault();
        let em=x.current.value
        let ps=y.current.value
        let name=data.name
        
        console.log(em,ps);
        if(em==="" ||ps===""){
            window.alert("please enter all credentials")
        }
        else if(em== data.email && ps== data.username){
            a(`/mainpage/userdetails/${data.id}`)
            //  a(`/mainpage/userdetails/  ${ name }`,{state:{name:name}} )
        }
        else{
            window.alert("wrong credentilas")
        }
    }
    
    
    return(
        <>
         <center> 
          <form action="" onSubmit={f1}>
            <h1>Login page</h1>
            <input type="text" placeholder="enter email" ref={x}/>
            <br />
            <input type="password" placeholder="enter the password" ref={y}/>
            <br /><br /><br />
            <button>Login</button>
          </form>
        </center>
        </>
    )
}
export default Userlogin;