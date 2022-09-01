import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import SearchBar from './Searchbar/SearchBar';
import cover from '../assets/img/cover.png';
import { FaSearch } from 'react-icons/fa';

const Home = () => {
  return (
    <div  style={{background:'black' }}>
      <Navbar/>
      <div>
        <img src={cover} width='100%' alt='cover' />
        <div style={{margin:'50px'}}> 
          <SearchBar/>
        </div>
        <div style={{display:"flex"}}>
          <div style={{color:'white', textAlign:'left', width:'20vw', margin:'50px'}}>
            <p style={{fontSize:'40px'}}>Filters</p>
            <div>
              <p style={{fontSize:'20px', fontWeight:'500'}}>Location</p> 
              <div style={{display:'flex', alignItems:'center', gap:'20px', border:'2px solid #9da0a3', borderRadius:'5px', background:'#2e2e2e'}}>
                <FaSearch style={{color:'#9da0a3', fontSize:'18px', padding:'16px 0px 20px 20px', }}/>
                <input type='text' placeholder='Enter Location' style={{height:'30px', width:'100%',background:'#2e2e2e', fontSize:'18px', fontWeight:'500', border:'none',  }} />
              </div>
            </div>
          </div>
          <div style={{width:'75vw', border:'1px solid white', height:'150vh'}}>
              ddddddd
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home