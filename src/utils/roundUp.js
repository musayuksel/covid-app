// Returns a rounded up numeric value  
// taking into consideration it's magnitude

function roundUp(number) {  
  const baseLog10 = 
    Math.ceil(
      Math.log(number) / Math.log(10)
    )

  const divisor = 10 ** (baseLog10 - 1) 

  return (
    Math.ceil(
      number * 2 / divisor
    ) / 2
  ) * divisor 
}

export default roundUp
