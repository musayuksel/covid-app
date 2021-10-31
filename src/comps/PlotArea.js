function PlotArea({ gridArea, plotType }) {
    const styles = {
        gridArea: gridArea,
        width: "100%",
        height: "100%",
        background: "green",
    }
    
    return (
        <svg style={styles}></svg>
    )
}

export default PlotArea