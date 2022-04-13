document.querySelector("#header-container").style.backgroundColor = "rgb(76,164,109)";

for (let i = 0; i < document.querySelectorAll(".emergency-tasks h3").length; i += 1) {
  document.querySelectorAll(".emergency-tasks h3")[i].style.backgroundColor = "#9400D3"
};

for (let i = 0; i < document.querySelectorAll(".no-emergency-tasks h3").length; i += 1) {
  document.querySelectorAll(".no-emergency-tasks h3")[i].style.backgroundColor = "black"
};

document.querySelector('.emergency-tasks').style.backgroundColor = "#E5906A";

document.querySelector('.no-emergency-tasks').style.backgroundColor = "#FFDB58";

document.querySelector('#footer-container').style.backgroundColor = "#1D3825";