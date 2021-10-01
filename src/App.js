import React,{useState,useEffect} from 'react';
import Card from './card'
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
      {
        data && data.length>0 && 
        data.map((item)=>
          <Card
            image={item.image}
            name={item.name}
            profession={item.profession}
            about={item.about}
            alt={item.name}
          />
        )
      }
    </div>
  );
}

export default App;
