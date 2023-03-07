import React from 'react'
import  './Overview.css'
import Grid from '@mui/material/Grid';
import Card from '../Utils/Card'
import { divContents } from '../../MockData';
function Overview() {
 
    return (
        <div>
            <p className='Overview'>Overview</p>
            <Card subHeading='This Month'
                price='$24,223'
                percentage='+2.65'
                loss={true}
            />

            <Grid marginTop={'10px'} container  columns={{ xs: 12, sm: 12, md: 12 }}>
                {

                    Object.entries(divContents).map(([key, value]) =>
                        
                      <Grid className='Gridbox' item xs={6}>
                                <p className='textHeading' >{key}</p>
                                <h2  className='textPrice'>{value}</h2>
                            </Grid>
                    )
                }
                </Grid>
            
        </div>
    )
}

export default Overview
