let ratingChosen = 1;
let ratingsCard = document.querySelector(".rating");
let thanksCard = document.querySelector(".thankyou");
let selectedScore = document.querySelector(".selected-score");

document.querySelectorAll(".number-btn").forEach((item) =>
  item.addEventListener("click", function (event) {
    document
      .getElementById(`button-${ratingChosen}`)
      .classList.remove("button-clicked");
    ratingChosen = event.target.innerHTML;
    console.log(ratingChosen);
    buttonClicked = event.target.id;
    document.getElementById(buttonClicked).classList.add("button-clicked");
    selectedScore.textContent = ratingChosen;
  })
);

document.querySelector(".submit").addEventListener("click", () => {
  ratingsCard.classList.add("hidden");
  thanksCard.classList.remove("hidden");
});
