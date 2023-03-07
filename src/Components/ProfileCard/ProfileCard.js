import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './ProfileCard.css'
import Progressbar from '../../Charts/Progressbar';
import ActivityCard from '../Utils/ActivityCard';
import { ActivityData } from '../../MockData';
export default function ProfileCard() {
 
  return (
    <Card
    className='ProfileCard'
     sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image={require('../../images/mountain.jpg')}
     
      />
         <span className='profilebox'>
          <img className='profilePhoto' src={require('../../images/profilephoto.jpg')} alt='profile'></img>
         </span>
      <CardContent>
       <div className='profileInfo'>
        <h1>Madhav Arora</h1>
        <p>FullStack Developer</p>
       </div>
        <Typography variant="body2" color="text.secondary" display={'flex'} 
        padding={'0 20px'} justifyContent={'space-between'}>
     <div className='prodFollowers'>
      <p className='followerContainer'>1,269</p>
      
      <p>Products</p>
     </div>
     <Divider orientation="vertical" variant="middle" flexItem />
     <div >
      <p className='followerContainer'>5.2k</p>
      <p>Followers</p>
     </div>
        </Typography>

        <Divider variant="middle" />
        <Typography  variant="body2"   >
          <p style={{
            fontSize:'16px',
            fontWeight:600

          }}>Earning</p>
          <div className='progressSection' >
            <div className='progressbarConatainer'>
              <Progressbar  />
            </div>
            <div className='profile'>
            <p className='percentText'>76%</p>
            <p className='priceTag'>$26,256</p>
            <p style={{
              marginTop:0
            }}>Earning this Month</p>
            <span className='profileSpan'>+2.16</span>
            <span style={{
              marginLeft:'20px'
            }}>From previous Month</span>

            </div>
          </div>

        </Typography>
        
        <Divider  variant="middle" />
        <Typography>
        <p style={{
            fontSize:'16px',
            fontWeight:600

          }}>Recent Activity</p>
    { 
    ActivityData.map((el,i)=>(
      <ActivityCard title={el} date={i+1}/>
     ))
     }
       
        </Typography>
        
      </CardContent>
     
    </Card>
  );
}