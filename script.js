// Elements that show the VERB
const showVerb = document.getElementById("showVerb");
const showImage = document.getElementById("showImage");
const showAudio = document.getElementById("showAudio");

// Helper elements
const next = document.getElementById("next");
const verbsCounter = document.getElementById("verbs-counter");

// Answers
const first = document.getElementById("first-verb");
const second = document.getElementById("second-verb");
const third = document.getElementById("third-verb");
const fourth = document.getElementById("fourth-verb");

// how many verbs we have
const numberOfVerbs = verbs.length;
// One right answer and three wrong
let answerRoullete = [0,1,1,1];

let everyNumberOfVerbs = [];

let rightAnswer;

// SVG starter play button listener
next.addEventListener("click",function(){
  ponerVerbo();
});

// ==================
// get a random list
// ==================
makeRandomList();
// we start in the last position
let position = everyNumberOfVerbs.length-1;
// =========================================
// do a list of numbers that we can shuffle
// =========================================
function makeRandomList(){
  // array with same number of items than verbs
  for (var i = 0; i < numberOfVerbs; i++){
    everyNumberOfVerbs.push(i);
  }
  // shuffle the numberOfVerbs in a weird way
  everyNumberOfVerbs = everyNumberOfVerbs.sort(() => Math.random() - 0.5);
}


// =========================================
// answer buttons listeners
// =========================================

function buttonEffect(itsRight,button){
  if (itsRight){
    button.classList.add('rightAnswer');
    setTimeout(function(){
      button.classList.remove('rightAnswer');
    },1000);
  }else{
    button.classList.add('wrongAnswer');
    setTimeout(function(){
      button.classList.remove('wrongAnswer');
    },1000);
  }
}

// First button listener
first.addEventListener("click",function(){
  buttonEffect(itsRight_(first.innerHTML),this);
});

// Second button listener
second.addEventListener("click", function(){
  buttonEffect(itsRight_(second.innerHTML),this);
});

// Third button listener
third.addEventListener("click", function(){
  buttonEffect(itsRight_(third.innerHTML),this);
});

// Fourth button listener
fourth.addEventListener("click", function(){
  buttonEffect(itsRight_(fourth.innerHTML),this);
});



// ===============================================
// Give different options of answers in every verb
// ===============================================
function shuffleAnswers(array) {
  // We start at the end of array
  let currentIndex = array.length;
  // The different index
  let randomIndex;

  // While there are remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function itsRight_(answer){
  return answer==rightAnswer?true:false;
}

function randomVerbo(notThisOne){
  theOne = Math.floor(Math.random()*verbos.length);

  return theOne == notThisOne?randomVerbo(notThisOne):theOne;
}

function ponerVerbo(){

  // Shuflle answers at every verb
  answerRoullete = shuffleAnswers(answerRoullete);

  let randomPosition = everyNumberOfVerbs[position];
  let imgText = "<img src='img/"+verbs[randomPosition]+".jpg' height:'210px' width='150px'>";

  // ===================================
  // Adding style to the answers buttons
  // ===================================
  first.classList.add("btn","btn-outline-success","btn-sm");
  second.classList.add("btn","btn-outline-success","btn-sm");
  third.classList.add("btn","btn-outline-success","btn-sm");
  fourth.classList.add("btn","btn-outline-success","btn-sm");

  if (position >= 0){
    var just_position = position+1;
    verbsCounter.innerHTML = ""+just_position+" / "+numberOfVerbs;
    showVerb.innerHTML = verbs[randomPosition];
    showImage.innerHTML = imgText;

    showAudio.src = "audio/"+verbs[randomPosition]+".mp3";
    showAudio.play();

    first.innerHTML = !answerRoullete[0]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
    second.innerHTML = !answerRoullete[1]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
    third.innerHTML = !answerRoullete[2]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
    fourth.innerHTML = !answerRoullete[3]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];

    rightAnswer = verbos[randomPosition];
    position = position - 1;
  }
}
