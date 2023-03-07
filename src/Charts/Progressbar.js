
import { ResponsivePie } from '@nivo/pie'
import { progressbarData } from '../MockData';
const Progressbar=() => (
    <ResponsivePie
        data={progressbarData}
          
          width={400}
          startAngle={90}
          endAngle={-90}
          enableArcLinkLabels={false}
          enableArcLabels={false}

        margin={{ top: 10, right: 160, bottom: 80, left: 40 }}
        innerRadius={0.9}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        colors={['#EEEEEE', '#86ACED']}
       height='300'
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
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
       
        />
)
export default Progressbar;