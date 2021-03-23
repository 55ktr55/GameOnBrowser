'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector("#result > p");

  const quizSet = [
    {q: '日本で２番目に高い山は？', c: ['北岳', '槍ヶ岳', '穂高岳']},
    {q: 'アメリカ合衆国の現大統領は誰？', c: ['ジョー・バイデン', 'バラク・オバマ', 'ドナルド・トランプ']},
    {q: '犬も歩けば何に当たる？', c: ['棒', '柱', '壁']},
  ];
  let currentNum = 0;
  let isAnswered;
  let score=0;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }

  function setQuiz() {
    isAnswered = false;

    question.textContent = "No."+(currentNum+1)+" "+quizSet[currentNum].q;

    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length - 1) {
      btn.textContent = 'Show Score';
    }
  }

  setQuiz();

  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');

    if(currentNum === quizSet.length - 1){
      result.classList.remove("hidden");
      scoreLabel.textContent = `Score: ${score}/${quizSet.length}`;
    }
    currentNum++;
    setQuiz();
  });
}
