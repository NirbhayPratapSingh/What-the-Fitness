// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { color } from '@mui/system';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }} >
//       <AppBar position="static" style={{backgroundColor:'#CC2222'}}>
//         <Toolbar>
//           <img style={{height:'100px',width:'100px',borderRadius:'15%'}} src='https://media-exp1.licdn.com/dms/image/C560BAQF7rpSD_RZYmQ/company-logo_200_200/0/1660306649451?e=1669852800&v=beta&t=TrSYBYOMS331dFnayMwXUUYxaANo2byIA89EmsIdlxo'/>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Fitness 
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Nutrition 
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Gyms 
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Become WTF Partner 
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             About Us 
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }



import React from 'react'

const Navbar = () => {
  return (
    <div style={{
      display:'flex',
      backgroundColor:'black',
      justifyContent:'space-around',
      
      }}>
      <img style={{height:'100px',widht:'100px',borderRadius:'15%'}} src='https://media-exp1.licdn.com/dms/image/C560BAQF7rpSD_RZYmQ/company-logo_200_200/0/1660306649451?e=1669852800&v=beta&t=TrSYBYOMS331dFnayMwXUUYxaANo2byIA89EmsIdlxo'/>
      <div style={{display:'flex', justifyContent:'space-evenly',width:'50%',marginTop:'20px'}}>
        <h3 style={{color:'white'}}>Fitness</h3>
        <h3 style={{color:'white'}}>Nutition</h3>
        <h3 style={{color:'white'}}>Gyms</h3>
        <h3 style={{color:'white'}}>Become WTF Partner</h3>
        <h3 style={{color:'white'}}>About Us</h3>
        {/* <Button color="inherit" style={{height:'50px',marginTop:'10px'}}>Login</Button> */}
        <button style={{height:'30px',widht:'100px',marginTop:'16px',borderRadius:'5px',backgroundColor:'#CC2222',color:'white'}}>Login</button>
      </div>
    </div>
  )
}

export default Navbar