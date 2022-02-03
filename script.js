// ***************************************************
// VERBS
// ***************************************************

const verbs = [
  'open',
  'accept',
  'love',
  'learn',
  'hurry',
  'dare',
  'help',
  'dance',
  'erase',
  'change',
  'walk',
  'close',
  'date',
  'cook',
  'consider',
  'count',
  'answer',
  'wish',
  'start',
  'push',
  'deliver',
  'listen',
  'expect',
  'wait',
  'study',
  'miss',
  'smoke',
  'enjoy',
  'talk',
  'try',
  'play',
  'wash',
  'clean',
  'underline',
  'continue',
  'complete',
  'check',
  'mark',
  'match',
  'share'
];

const verbos = [
  'abrir',
  'aceptar',
  'amar',
  'aprender',
  'apresurarse',
  'atreverse',
  'ayudar',
  'bailar',
  'borrar',
  'cambiar',
  'caminar',
  'cerrar',
  'citar',
  'cocinar',
  'considerar',
  'contar',
  'responder',
  'desear',
  'comenzar',
  'empujar',
  'entregar',
  'escuchar',
  'esperar',
  'esperar',
  'estudiar',
  'extrañar',
  'fumar',
  'disfrutar',
  'hablar',
  'intentar',
  'jugar',
  'lavar',
  'limpiar',
  'subrayar',
  'continuar',
  'completar',
  'checar',
  'marcar',
  'relacionar',
  'compartir'
];

const numberOfVerbs = verbs.length;

let list = [];
for (var i = 0; i < numberOfVerbs; i++){
  list.push(i);
}

let answerRoullete = [0,1,1,1];

const showVerb = document.getElementById("showVerb");
const showImage = document.getElementById("showImage");
const showAudio = document.getElementById("showAudio");

const next = document.getElementById("next");
const verbsCounter = document.getElementById("verbs-counter");
const first = document.getElementById("first-verb");
const second = document.getElementById("second-verb");
const third = document.getElementById("third-verb");
const fourth = document.getElementById("fourth-verb");

// ==================
// get random numbers
// ==================
list = list.sort(() => Math.random() - 0.5);

// we start in the last position
position = list.length-1;

// SVG play button listener
next.addEventListener("click",function(){
  ponerVerbo();
});

// =========================================
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
// =========================================

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
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
