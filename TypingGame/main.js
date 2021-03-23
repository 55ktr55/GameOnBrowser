"use strict";

{
  // 変数定数宣言
  const words = [
    "red",
    "blue",
    "pink",
    "low",
    "fight",
    "word",
    "application",
    "apple",
    "inner",
    "height",
    "young",
    "old",
    "youtube",
    "like",
    "election",
    "done",
    "document",
    "achieve",
    "agree",
    "catch",
    "compare",
    "contain",
    "continue",
    "destroy",
    "enter",
    "expect",
    "follow",
    "guess",
    "imagine",
    "increase",
    "head",
    "navigate",
    "manage",
    "reach",
    "reduce",
    "represent",
    "risk",
    "share",
    "throw",
    "spread",
    "support",
    "entrance",
    "statue",
    "host",
    "dad",
    "soup",
    "suit",
    "tie",
    "jeans",
    "mom",
    "husband",
    "stranger",
    "driver",
    "enemy",
    "scientist",
    "runner",
    "artist",
    "visitor",
    "cousin",
    "engineer",
    "crowd",
    "guide",
    "queen",
    "prince",
    "pal",
    "captain",
    "neighbor",
    "policeman",
    "president",
    "merchant",
    "painter",
    "reporter",
    "god",
    "army",
    "bomb",
    "arrow",
    "jam",
    "juice",
    "honey",
    "ticket",
    "fence",
    "bathroom",
    "hall",
    "forest",
    "toy",
    "umbrella",
    "bottle"
  ];

  let word;
  let num=-1;
  let loc=0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById("target");
  const result = document.getElementById("result");

  // 関数
  function setWord(){
    word = words.splice(Math.floor(Math.random()*words.length), 1)[0];
    num++;
    target.textContent = word;
    result.textContent = `clear ${num} words`;
    loc = 0;
  }


  // イベント
  document.addEventListener("click", ()=>{
    if(isPlaying === true){
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  })

  document.addEventListener("keydown", e => {
    if(num < 10){
      if(e.key !== word[loc]){
        target.classList.add("falseColor");
        return;
      }
      if(target.classList.contains("falseColor") === true){
        target.classList.remove("falseColor");
      }

      loc++;
      target.textContent = '_'.repeat(loc) + word.substring(loc);
    }


    if(loc === word.length){
      if(num === 9){
        const elapsedTime = ((Date.now() - startTime)/1000).toFixed(2)
        result.textContent = `ALLCLEAR!! ${elapsedTime} seconds!!!!`;
        return;
      }

      setWord();
    }
  })

}
