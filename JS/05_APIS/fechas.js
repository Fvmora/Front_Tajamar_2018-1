let ayer = new Date(2018,2,20)
let hoy = new Date()
let unDia = new Date(1223479876355)
console.log(ayer)
console.log(hoy)
console.log(unDia)
console.log(hoy.getDay())
console.log(hoy.getFullYear())
console.log(hoy.getTime())

console.log(parseInt((hoy - ayer)/(1000*60*60)))
console.log(hoy + ayer)