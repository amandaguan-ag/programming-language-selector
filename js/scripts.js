window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function (e) {
    e.preventDefault();
  };
};

function langType() {
  let difficulty = document.querySelector('input[name="difficulty"]:checked')
    .value;
  let what = document.querySelector('input[name="what"]:checked').value;
  let why = document.querySelector('input[name="why"]:checked').value;
  let frontOrBack = document.querySelector('input[name="frontOrBack"]:checked')
    .value;
  let type = document.querySelector('input[name="type"]:checked').value;

  let langType;
  if (
    difficulty === "1" &&
    what === "1" &&
    why === "1" &&
    frontOrBack === "1" &&
    type === "1"
  ) {
    langType = "Javascript";
  } else if (
    difficulty === "2" &&
    what === "2" &&
    why === "2" &&
    frontOrBack === "2" &&
    type === "2"
  ) {
    langType = "Ruby";
  } else if (
    difficulty === "3" &&
    what === "3" &&
    why === "3" &&
    frontOrBack === "3" &&
    type === "3"
  ) {
    langType = "Python";
  } else {
    langType = "C#";
  }

  const resultDiv = document.querySelector("#result");
  resultDiv.textContent = "You should learn " + langType + ".";

  document.querySelector("#tryAgain").addEventListener("click", function () {
    let form = document.querySelector("form");
    form.reset();

    document.querySelector("#result").innerHTML = "";
  });
}
