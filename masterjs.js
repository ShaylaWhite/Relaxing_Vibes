masterjs.js

if (condition) {
  if (anotherCondition) {
    // do something
  }else {
    //do something
  }

}else{
  // do something else entirely
}

// Program logic into Functions//

let studentAverage = 40;
let passed = 70;


function passedExam(studentAverage, passed) {
  if(studentAverage > passed){
    console.log('You Passed')
  }else{
    console.log('You Failed')
  }
}

passedExam(40,50);
passedExam(40,77);

// Single if Blocks

// more than two possible outcomes

if(userColor == 'red') {
  console.log('red gift')
}else if (userColor == 'blue') {
  console.log('blue gift')
} else {
  console.log('green gift')
}
