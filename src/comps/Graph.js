import XAxis from './XAxis'
import YAxis from './YAxis'
import PlotArea from './PlotArea'
import GraphUI from './GraphUI'

function Graph() {
    const styles = {
        border: "1px solid #000",
        display: 'grid',
        width: "900px",
        height: "600px",
        gridTemplateColumns: '5rem auto',
        gridTemplateRows: '5rem auto 5rem',
        gridTemplateAreas: `
            '...... graph-ui'
            'y-axis plot    '
            '...... x-axis  ' 
        `,
    }
    return (
        <div
            width="900" height="600"
            style={styles} > 
            
            <YAxis    gridArea="y-axis" />
            <PlotArea gridArea="plot"   />
            <XAxis    gridArea="x-axis" />
            <GraphUI  gridArea="graph-ui" />
        </div>
    )
}

export default Graph