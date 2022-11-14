//Write a program called roadWithDamages.
// Imagine that a car is driving along the road that consists of 10 parts. 
//If part of the road is repaired, the program output is "The car goes to step" and number of the next step.
// If there is a broken section on the road, the program output is "The car is damage". 
//If a damaged section of the road is encountered for the second time, the program displays 
//"The car is stop" and further actions are stopped.

const roadWithDamages = [false, false, false, true, false, false, true, false, false, false];

console.log(roadWithDamages.length)
const trueValues = []
for (let i=0; i < roadWithDamages.length; i++){
if (roadWithDamages[i] === false){
   console.log("The car goes to step", i + 1)
}
if (roadWithDamages[i] === true){
   trueValues.push(true);
   if (trueValues.length == 1){
      console.log("The car is damage")
     }
   if (trueValues.length == 2){
      console.log("The car is stop");
      break;
      }
   }
}

  