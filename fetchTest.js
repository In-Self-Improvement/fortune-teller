import fetch from "node-fetch";

const fetchTest = () => {
  fetch(`http://3.37.227.153:3000/fortune/all`)
    // fetch(`http://localhost:3000/fortune/average`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Answer:", data.fortune);
    })
    .catch((error) => console.error("Error:", error));
};

fetchTest();
