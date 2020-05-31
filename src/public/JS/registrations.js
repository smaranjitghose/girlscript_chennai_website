let questions = [
  { question: "What's your name?", pattern: '[A-Za-z]' },
  { question: "What's your registration number?", pattern: '^(RA)+[0-9]{13}$' },
  { question: 'In which year you are studying?', pattern: '^(?:[0-4])$' },
  { question: "What's your email?", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  { question: 'Why you want to join?', pattern: '.{10,50}' },
];

(function() {
  let tTime = 100; // transition transform time from #register in ms
  let wTime = 200; // transition width time from #register in ms
  let eTime = 1000; // transition width time from inputLabel in ms

  // init....

  var position = 0;

  putQuestion();

  progressButton.addEventListener('click', validate);
  inputField.addEventListener('keyup', function(e) {
    transform(0, 0); // ie hack to redraw
    if (e.keyCode == 13) validate();
  });

  // functions....

  // load the next question
  function putQuestion() {
    inputLabel.innerHTML = questions[position].question;
    inputField.value = '';
    inputField.type = questions[position].type || 'text';
    inputField.focus();
    showCurrent();
  }

  // when all the questions have been answered
  function done() {
    // remove the box if there is no next question
    register.className = 'close';
    const confettiSuccessScreen = document.getElementById('success-screen');
    confettiSuccessScreen.classList.remove('hide');
    // add the h1 at the end with the welcome text
    let h1 = document.createElement('h1');
    h1.appendChild(
      document.createTextNode('Welcome ' + questions[0].value + '!')
    );
    setTimeout(function() {
      register.parentElement.appendChild(h1);
      setTimeout(function() {
        h1.style.opacity = 1;
      }, 50);
    }, eTime);

    //function call for uploading data to firebase
    Upload_data_to_firebase();
  }

  // when submitting the current question
  function validate() {
    // set the value of the field into the array
    questions[position].value = inputField.value;

    // check if the pattern matches
    if (!inputField.value.match(questions[position].pattern || /.+/)) wrong();
    else
      ok(function() {
        // set the progress of the background
        progress.style.width = (++position * 100) / questions.length + 'vw';

        // if there is a new question, hide current and load next
        if (questions[position]) hideCurrent(putQuestion);
        else hideCurrent(done);
      });
  }

  // helper....

  function hideCurrent(callback) {
    inputContainer.style.opacity = 0;
    inputProgress.style.transition = 'none';
    inputProgress.style.width = 0;
    setTimeout(callback, wTime);
  }

  function showCurrent(callback) {
    inputContainer.style.opacity = 1;
    inputProgress.style.transition = '';
    inputProgress.style.width = '100%';
    setTimeout(callback, wTime);
  }

  function transform(x, y) {
    register.style.transform = 'translate(' + x + 'px ,  ' + y + 'px)';
  }

  function ok(callback) {
    register.className = '';
    setTimeout(transform, tTime * 0, 0, 10);
    setTimeout(transform, tTime * 1, 0, 0);
    setTimeout(callback, tTime * 2);
  }

  function wrong(callback) {
    register.className = 'wrong';
    for (
      let i = 0;
      i < 6;
      i++ // shaking motion
    )
      setTimeout(transform, tTime * i, ((i % 2) * 2 - 1) * 20, 0);
    setTimeout(transform, tTime * 6, 0, 0);
    setTimeout(callback, tTime * 7);
  }
})();

function init() {
  let imgDefer = document.getElementsByTagName('img');
  for (let i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute('data-src')) {
      imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
    }
  }
}
window.onload = init;

function Upload_data_to_firebase() {
  // Uploading user data to firebase
  let schema = {
    Name: questions[0].value,
    Regno: questions[1].value,
    Year: questions[2].value,
    Email: questions[3].value,
    Message: questions[4].value,
  };

  let firebaseDB = firebase.database().ref('users');
  let pushtofire = firebaseDB.push();

  pushtofire.set({ ...schema });
}
