// const ColorChange=function(){
//   const hex='0123456789ABCDEF';
//   let color='#';
//   for (let i=0;i<5;i++){
//     color+=hex[(Math.floor(Math.random()*16))]
//   }
//   return color;
// }
// console.log(ColorChange())
// console.log(Math.floor(Math.random() * 16 + 1))

function randomColor(){
  const hex='0123456789ABCDEF';
  let color='#';
  for (let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color
}
function colorChange(){
  document.body.style.backgroundColor=randomColor()
}
let intervals;
function backgroundColorChange(){
  if(!intervals){
    intervals=setInterval(colorChange,2000)
    console.log(`color is changing `)
  }
  
}
function stop(){
  clearInterval(intervals)
  intervals=null;
  console.log('color changing is stop')
}
document.querySelector('#start').addEventListener('click',backgroundColorChange);
document.querySelector('#stop').addEventListener('click',stop)