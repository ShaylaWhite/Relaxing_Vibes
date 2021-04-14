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

//add programs into small chunks,
//so that we can use the code anywhere.

const studentAverage = 40;
const pass = 50;

if(studentAverage > pass) {
  console.log('You Passed');
} else {
  console.log('Sorry, You failed')
}

// Even better way to wrap the logic into a function//

function PassedExam(studentAverage, pass) {
  if(studentAverage > pass){
    console.log('Congrats')
  } else{
    console.log('Failed')
  }
}
