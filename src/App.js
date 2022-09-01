import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import Home from './components/Home';

function App() {
  useEffect(()=>{
    getData();
  },[])

  const getData = async() => {
    // await axios.get(`https://devapi.wtfup.me/gym/places`).then((res)=>console.log(res.data));
    // await axios.get(`https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`).then((res)=>console.log(res.data));
    var a = await axios.post(`https://wtfup.me/gym_details/WTF-The-Fitness-Point-Gym/gym/plan`,{gym_id:"GLKdIYAWDS2Q8"});
    console.log(a)
  }
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
