// how many verbs we have
const numberOfVerbs = verbs.length;
// One right answer and three wrong
let answerRoullete = [0,1,1,1];
// every number of verbs
let list = [];

// Elements that show the VERB
const showVerb = document.getElementById("showVerb");
const showImage = document.getElementById("showImage");
const showAudio = document.getElementById("showAudio");

// Helper elements
const next = document.getElementById("next");
const verbsCounter = document.getElementById("verbs-counter");
// we start in the last position
let position = list.length-1;

// Answers
const first = document.getElementById("first-verb");
const second = document.getElementById("second-verb");
const third = document.getElementById("third-verb");
const fourth = document.getElementById("fourth-verb");

// SVG starter play button listener
next.addEventListener("click",function(){
  ponerVerbo();
});

// ==================
// get a random list
// ==================
makeRandomList();


// =========================================
// answer buttons listeners
// =========================================

// First button listener
first.addEventListener("click",function(){
  //TODO change color: right-green, wrong-red
  itsRight_(first.innerHTML);
});

// Second button listener
second.addEventListener("click", function(){
  //TODO change color: right-green, wrong-red
  itsRight_(second.innerHTML);
});

// Third button listener
third.addEventListener("click", function(){
  //TODO change color: right-green, wrong-red
  itsRight_(third.innerHTML);
});

// Fourth button listener
fourth.addEventListener("click", function(){
  //TODO change color: right-green, wrong-red
  itsRight_(fourth.innerHTML);
});

// =========================================
// do a list of numbers that we can shuffle
// =========================================
function makeRandomList(){
  // array with same number of items than verbs
  for (var i = 0; i < numberOfVerbs; i++){
    list.push(i);
  }
  // shuffle the numberOfVerbs in a weird way
  list = list.sort(() => Math.random() - 0.5);
}

// =========================================
//
// =========================================
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

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

}

function randomVerbo(){
  return Math.floor(Math.random()*verbos.length);
}

function ponerVerbo(){
  answerRoullete = shuffle(answerRoullete);

  let randomPosition = list[position];
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

    //verbs[randomPosition]

    //TODO find a way to get 3 wrong answers + the right one
    //TODO shuffle answers too !

    // Include a fuckin array to shuffle
    first.innerHTML = answerRoullete[0]?verbos[randomPosition]:'right';
    second.innerHTML = answerRoullete[1]?verbos[randomPosition]:'right';
    third.innerHTML = answerRoullete[2]?verbos[randomPosition]:'right';
    fourth.innerHTML = answerRoullete[3]?verbos[randomPosition]:'right';

    position = position - 1;
  }
}
