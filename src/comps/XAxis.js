function XAxis({ gridArea }) {
    const styles = {
        background: "blue",
        gridArea: gridArea,
        width: "100%",
        height: "100%",
    }
    
    return (
        <svg
            x="100" y="100"
            style={styles}
        ></svg>
    )
}

export default XAxis