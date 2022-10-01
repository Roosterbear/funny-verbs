// Elements that show the VERB
const showVerb = document.getElementById("showVerb");
const showImage = document.getElementById("showImage");
const showAudio = document.getElementById("showAudio");

// Helper elements
const next = document.getElementById("next");
const verbsCounter = document.getElementById("verbs-counter");
const allRightCounter = document.getElementById("all-right-answers");
const verbsContainer = document.getElementById("verbs-container");
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

let rightAnswer; // Every right answer
let allRightAnswers = 0; // Right answers counter

// SVG starter play button listener
next.addEventListener("click",function(){
  ponerVerbo();
  next.style.display = 'none';
});

// ==================
// get a random list
// ==================
makeRandomList();
// we start in the last position
let position = everyNumberOfVerbs.length-1;
// =========================================
// Make a list of numbers that we can shuffle
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
    allRightAnswers = allRightAnswers+1;
  }else{
    button.classList.add('wrongAnswer');
    setTimeout(function(){
      button.classList.remove('wrongAnswer');
    },1000);
  }
  setTimeout(function(){
    ponerVerbo();
  },500);
}

// First button listener
first.addEventListener("click",function(){
  buttonEffect(isItRight_(first.innerHTML),this);
});

// Second button listener
second.addEventListener("click", function(){
  buttonEffect(isItRight_(second.innerHTML),this);
});

// Third button listener
third.addEventListener("click", function(){
  buttonEffect(isItRight_(third.innerHTML),this);
});

// Fourth button listener
fourth.addEventListener("click", function(){
  buttonEffect(isItRight_(fourth.innerHTML),this);
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


// ==============================
// Tell us if our answer is right
// ==============================
function isItRight_(answer){
  return answer==rightAnswer?true:false;
}

// ===================================
// Used to get wrong answer for button
// ===================================
function randomVerbo(notThisOne){
  theOne = Math.floor(Math.random()*verbos.length);

  return theOne == notThisOne?randomVerbo(notThisOne):theOne;
}

function ponerVerbo(){

  // Shuflle answers at every verb
  answerRoullete = shuffleAnswers(answerRoullete);

  let randomPosition = everyNumberOfVerbs[position];
  let imgText = "<img src='img/"+verbs[randomPosition]+".jpg' height:'140px' width='100px'>";

  // ===================================
  // Adding style to the answers buttons
  // ===================================
  first.classList.add("btn","btn-outline-primary","btn-md");
  second.classList.add("btn","btn-outline-primary","btn-md");
  third.classList.add("btn","btn-outline-primary","btn-md");
  fourth.classList.add("btn","btn-outline-primary","btn-md");

  if (position >= 0){
    var just_position = position+1;
    verbsCounter.innerHTML = ""+just_position+" / "+numberOfVerbs;
    allRightCounter.innerHTML = "Right answers: "+allRightAnswers;
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
  }else{
    // Here we finish!
    verbsCounter.innerHTML = "0 / "+numberOfVerbs;
    allRightCounter.innerHTML = "Right answers: "+allRightAnswers;
    showVerb.innerHTML = "Thank you !";

    // Hides verbs content
    verbsContainer.innerHTML = "";
  }
}

