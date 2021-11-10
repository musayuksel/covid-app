// Converts a numeric value that is within the bounds of inMin & inMax,
// to a proportionate numeric value that is within the bounds of outMin & outMax. 
// Examples: 
//    rangeMap(50, 0, 100, -10, -30) returns -20

function rangeMap(inValue, inMin, inMax, outMin, outMax){
  return (
    (inValue - inMin) * 
    (outMax - outMin) / 
    (inMax - inMin) + outMin
  )
}

export default rangeMap
