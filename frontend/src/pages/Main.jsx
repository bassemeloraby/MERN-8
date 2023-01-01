import React, { useEffect,useState } from 'react'
import axios from 'axios';


function Main() {

     //add useState for Task
  const [drugs, setDrugs] = useState([]);
    //fetch of data with axios
  useEffect(() => {
    axios.get(`http://localhost:5000/api/drugs`).then((res) => {
      console.log(res.data);
      setDrugs(res.data);
    });
  }, []);

 
  return (
    <div className='container'>
    {drugs.map((drug) =><div className="card" style={{width:' 18rem'}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{drug.TradeName}</li>
    <li class="list-group-item">A second item</li>
  </ul>
</div>)}
    
    </div>
  )
}

export default Main