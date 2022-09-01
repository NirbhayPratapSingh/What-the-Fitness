import React from 'react'
import styled from 'styled-components';
import gym from '../assets/img/gym.png'

const GYMdiv = styled.div`
.mainDiv{
    height:360px;
    margin-bottom:10px;
    border:2px solid grey;
    border-radius:10px;
    width:96%;
    overflow:hidden;
    display:grid;
    grid-template-columns:1.5fr 1fr;
}

`

// addon_front: null
// addons: []
// address1: "Noida"
// address2: "Noida"
// benefits: []
// category_id: "uCDDDdShgTH5N"
// category_name: "Pro"
// city: "Noida"
// country: "India"
// cover_image: null
// description: "Live test"
// distance: "1164.19"
// distance_text: "1164.19 km"
// duration: "1746.29"
// duration_text: "1746.29 minutes"
// free_trial: 0
// gallery: []
// gym_name: "WTF: 4 Sure Fitness"
// is_cash: 0
// is_partial: "0"
// latitude: "28.5355161"
// longitude: "77.3910265"
// name: "4 Sure Fitness"
// offer: []
// pin: "201301"
// plan_description: null
// plan_duration: null
// plan_name: null
// plan_price: null
// rating: 0
// slug: "4-Sure-Fitness"
// state: "Uttar Pradesh"
// status: "active"
// text1: null
// text2: null
// total_rating: 0
// type: "gym"
// user_id: "TFE5qL0RJAw3A"
// wtf_share: 13.5


//{gym_name, }
const GYM = (e) => {
    console.log(e)
    return (
        <GYMdiv>
            <div className='mainDiv'>
                <div>
                    <img src={gym} height="100%" width="100%" alt='imgscroll' />
                </div>
                <div>
                    <p style={{ color: "white" }}>{e.gym_name}</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p style={{ color: "white" }}>{e.address1}</p>
                    <p style={{ color: "white" }}>{e.distance_text} away</p>
                    <div style={{ display: "flex", justifyContent:'center', gap:'30px'}}>
                        <p style={{ color: "yellow" }}>₹3600 for 3 months</p>
                        <button style={{ background: "rgb(146,9,9)", color: "white", borderRadius: "10px" }}>BOOK NOW</button>
                    </div>
                </div>
            </div>
        </GYMdiv>
    )
}

export default GYM