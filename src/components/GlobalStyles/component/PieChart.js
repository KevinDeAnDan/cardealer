import { ResponsivePie } from '@nivo/pie'
import { mockData as data } from '../../../data/mocData';


function PieChart() {

    return (  <ResponsivePie
        data={data}
        margin={{ top: 40, right: 70, bottom: 80, left: 80 }}
        sortByValue={true}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'category10' }}   
        borderWidth={1}
        borderColor="#c8c9ca"
        arcLinkLabelsTextOffset={11}
        arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
        arcLinkLabelsDiagonalLength={20}
        arcLinkLabelsStraightLength={29}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
        arcLabelsTextColor="#fbcf1f"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
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
    /> );
}

export default PieChart;