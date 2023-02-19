const text = 'Estimate your earnings'
const speed = 150;
let i = -1;

function typeText() {
    if (i < text.length) {
        document.getElementById('type-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, speed);
    }
}

typeText();

const select = document.getElementById("selector");
const valueInput = document.getElementById("value");

// Define a function to calculate the royalty
function calculateRoyalty() {      
  const rate = select.value;
  const value = valueInput.value;
  const royalty = rate * value;
  document.getElementById("result").innerHTML = ` $${royalty}`;
}
