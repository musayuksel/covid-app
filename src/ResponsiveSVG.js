import { useState, useCallback } from "react";

// import CreateBars from "./CreateBar";
import CreateLine from "./CreateLine";

function ResponsiveSVG({ data, graphHeight, SVGWidth }) {
  const [svgCompWidth, setSvgCompWidth] = useState(300);
  const [svgCompHeight, setSvgCompHeight] = useState(150);

  const svgRef = useCallback((node) => {
    function computeSvgDims() {
      console.log("test");
      const svgCompStyles = getComputedStyle(node);
      const svgCompWidth = parseInt(
        svgCompStyles.width,
        10
      );
      const svgCompHeight = parseInt(
        svgCompStyles.height,
        10
      );
      setSvgCompWidth(svgCompWidth);
      setSvgCompHeight(svgCompHeight);
    }

    if (svgRef !== null) {
      computeSvgDims();
      window.addEventListener("resize", computeSvgDims);
    }

    return () =>
      window.removeEventListener("resize", computeSvgDims);
  }, []);

  return (
    <svg
      ref={svgRef}
      style={{ border: "1px solid red" }}
      // transform={"scale(-1 1)"}
      viewBox={`0 ${-svgCompHeight} ${svgCompWidth} ${svgCompHeight}`}
    >
      {/* <CreateBars
        data={data}
        graphHeight={svgCompHeight}
        SVGWidth={svgCompWidth}
      /> */}

      <CreateLine
        data={data}
        graphHeight={svgCompHeight}
        SVGWidth={svgCompWidth}
      />
    </svg>
  );
}

export default ResponsiveSVG;
