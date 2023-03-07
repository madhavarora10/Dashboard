import React from 'react'
import Card from '../Utils/Card'
import Barchart from '../../Charts/Barchart'
import Overview from './Overview'
import './Main.css'
import ChartsCard from '../Utils/ChartsCard'
import Linechart from '../../Charts/Linechart'
import Piechart from '../../Charts/Piechart'
import ProductCard from '../Utils/ProductCard'
import { PrdouctInfoData } from '../../MockData' 


function Main() {
  
  return (
    <div>
    <div style={{
      display:'flex',
      justifyContent:'space-around',
      flexWrap:'wrap',
        color:'black',
        marginTop:'120px'}}>
          
          <Card subHeading='Revenue'
          price='$27,223'
          percentage='+2.16'
          img='pie-chart'
          loss={true}
          
           />
          <Card subHeading='Orders'
          price='$5,643'
          percentage='-0.82'
          loss={false}
          img='product-management'
           />
          <Card subHeading='Customer'
          price='$45,254'
          percentage='-1.06'
          img='user'
          loss={false}
           />
     </div>
           <div className='middleSection' >
            <Overview/>
         <div className='barChartContainer'  >
         <Barchart/>
         </div>
           </div>
           
          <div className='ChartsSection'>

          <ChartsCard
            heading='User Activity'
            subHeading='This Month'
            price='$21,332'
           
           >
        
          <Linechart/>
        
           </ChartsCard>

          <ChartsCard
            heading='Order Stats'>
           <Piechart/>
           </ChartsCard>

           <ChartsCard
            heading='Top Product'
            >
              {
            PrdouctInfoData.map((e, i)=> ( <ProductCard num={i+1}
            title={e.title}
            price={e.price}
            Quantity={e.quantity}
            />))
            }
           
              
           </ChartsCard>

          </div>
           
</div>
  )
}

export default Main
