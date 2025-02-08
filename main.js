const btns = Array.from(document.querySelectorAll(".btn"));
const span = document.querySelector("span");
const notes = [
  "B",
  "C",
  "F",
  "E",
  "B",
  "C",
  "E",
  "D",
  "B",
  "C",
  "F",
  "E",
  "D",
  "E",
];
let count = 0;

//diffrent sounds diffrent inputs
function play() {
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      span.innerHTML = "";

      count = count + 1;
      
      if (btn.innerText === "A") {
        playSound("sounds/a6-102820.mp3");
        let instruct = document.createTextNode(notes[count]);
        span.appendChild(instruct);
        check();
      } else if (btn.innerText === "B") {
        playSound("sounds/d6-82020.mp3");
        let instruct = document.createTextNode(notes[count]);
        span.appendChild(instruct);
        check();
      } else if (btn.innerText === "C") {
        playSound("sounds/d6-82018.mp3");
        let instruct = document.createTextNode(notes[count]);
        span.appendChild(instruct);
        check();
      } else if (btn.innerText === "D") {
        playSound("sounds/f6-102819.mp3");
        let instruct = document.createTextNode(notes[count]);
        span.appendChild(instruct);
        check();
      } else if (btn.innerText === "E") {
        playSound("sounds/g6-82013.mp3");
        let instruct = document.createTextNode(notes[count]);
        span.appendChild(instruct);
        check();
      } else if (btn.innerText === "F") {
        playSound("sounds/g6-82014.mp3");
        let instruct = document.createTextNode(notes[count]);
        span.appendChild(instruct);
        check();
      }

      // function check() {
      //   if (span.innerText !== btn.innerText) {
      //     count = count*0;
      //     play();
      //     console.log("wrong");
      //   }
      // }
    });
  });
}

play();

//function to play audio
function playSound(filePath) {
  const audio = new Audio(filePath);
  audio.play();
}
