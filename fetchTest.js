import fetch from "node-fetch";

const fetchTest = () => {
  fetch(`http://www.fortuneapi.app/fortune/all`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Answer:", data.fortune);
    })
    .catch((error) => console.error("Error:", error));
};

fetchTest();
