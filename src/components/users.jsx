import { useEffect, useState } from "react";
import './users.css'

function Users() {
  let [data, setData] = useState([]);
  useEffect(() => {
    let a = fetch("https://jsonplaceholder.typicode.com/users");
    let c = a.then((b) => {
      return b.json();
    });
    c.then((d) => {
      console.log(d);
      setData(d);
    });
  }, []);
  function f1(x){
    window.confirm(`name is `+x)
  }
  return (
   <>
  <center>
    <h1>This is users page</h1>
  </center>
  <div className="parent">
    {data.map((ele, id) => {
      return (
        <div className="ch" key={id}>
          <h4>id: {ele.id}</h4>
          <h4>Name: {ele.name}</h4>
          <h4>username: {ele.username}</h4>
          <center><button onClick={()=>
            {
                f1(ele.name)
            }
          }>Click HERE</button></center>
        </div>
      );
    })}
  </div>
</>
  );
}
export default Users;
