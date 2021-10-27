import { useState, useCallback } from "react";

function HexagonSvg({
  stroke,
  fill,
  isBtnSelected,
  transitTime,
}) {
  const [svgCompWidth, setSvgCompWidth] = useState(0);
  const [svgCompHeight, setSvgCompHeight] = useState(0);
  const cornerOffset = svgCompHeight / 2 / Math.sqrt(3);

  const points = `
        0 ${svgCompHeight / 2}, 
        ${cornerOffset} 0, 
        ${svgCompWidth - cornerOffset} 0,  
        ${svgCompWidth} ${svgCompHeight / 2}, 
        ${svgCompWidth - cornerOffset} ${svgCompHeight}, 
        ${cornerOffset} ${svgCompHeight}
    `;

  const svgRef = useCallback((node) => {
    function computeSvgDims() {
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

    if (node !== null) {
      computeSvgDims();
      window.addEventListener("resize", computeSvgDims);
    }
    return () =>
      window.removeEventListener("resize", computeSvgDims);
  }, []);

  const css = {
    gridArea: "1 / -1",
    width: "100%",
    height: "100%",
    overflow: "visible",
    transition: `all ${transitTime}ms ease`,
    pointerEvents: "none",
  };

  return (
    <svg
      className="hexagon-svg"
      style={css}
      ref={svgRef}
      viewBox={`0 0 ${svgCompWidth} ${svgCompHeight}`}
    >
      <polygon
        points={points}
        fill={fill}
        stroke={stroke}
        style={{
          strokeWidth: isBtnSelected ? 4 : 0,
          transition: `stroke-width ${transitTime}ms`,
        }}
      />
    </svg>
  );
}

export default HexagonSvg;
