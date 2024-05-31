sd1 = 5
sd2 = 6
sd3 = 7

s = (sd1+sd2+sd3)/2

area = Math.sqrt(((s - sd1) * (s - sd2) * (s - sd3)) * s)

console.log(`Area: ${area}`)
