

import { ResponsiveBar } from '@nivo/bar'
import { BarchartData } from '../MockData'
const Barchart = () => {
    return (
<ResponsiveBar

        data={BarchartData}
        keys={[
            'Expenses',
            'Revenue'
            
        ]}
       
        height='400'
        
        
        indexBy="Month"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.4}
     
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        colors={{ scheme: 'paired' }}
        colorBy='indexValue'
     
        
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        minValue='0'
        maxValue='40'
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Month',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Income',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in month: "+e.indexValue}}
    />
        
    )
    }
export default Barchart;