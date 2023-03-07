// install (please make sure versions match peerDependencies)

import { ResponsivePie } from '@nivo/pie'
import { PieChartData } from '../MockData';
const Piechart = () => (
    <ResponsivePie
        data={PieChartData}
          enableArcLinkLabels={false}
        margin={{ top: 10, right: 210, bottom: 100, left: 5}}
        innerRadius={0.5}
        padAngle={0.9}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
       
        colors={{ scheme: 'purple_orange' }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
       
       height='300'
       width='500'
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 20,
                translateY: 66,
                itemsSpacing: 10,
                itemWidth: 80,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)
export default Piechart;