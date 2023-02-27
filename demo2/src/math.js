export const sum = (...rest) => {
  return rest.reduce((a,b) => a + b, 0 )

}