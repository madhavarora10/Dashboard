import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './ChartsCard.css'




export default function ChartsCard(props) {
  return (
    <Card className='Card'  sx={{
      height:400,
     
       marginTop:'20px',
       marginBottom:'20px',
      

        }}>
      <CardContent 
      style={{
        padding:'0',
      }}
      >
<p className='heading'>{props.heading}</p>
{
  props.subHeading && props.price &&
  <><p className='subHeading'>{props.subHeading} </p><h3 className='price'>{props.price}</h3></>
}
     <div className='ChartContainer'>
    {props.children}
     </div>
      </CardContent>
      
    </Card>
  );
}