// Reference
const noun1Input = document.getElementById('noun1');
const presenttv1Input = document.getElementById('presenttv1');
const noun2Input = document.getElementById('noun2');
const pasttv1Input = document.getElementById('pasttv1');
const noun3Input = document.getElementById('noun3');
const adjective1Input = document.getElementById('adjective1');
const adverb1Input = document.getElementById('adverb1');
const presenttv2Input = document.getElementById('presenttv2');

const noun1result = document.getElementById('noun1result');
const presenttv1result = document.getElementById('presenttv1result');
const noun2result = document.getElementById('noun2result');
const pasttv1result = document.getElementById('pasttv1result');
const noun3result = document.getElementById('noun3result');
const adjective1result = document.getElementById('adjective1result');
const adverb1result = document.getElementById('adverb1result');
const presenttv2result = document.getElementById('presenttv2result');

// Action to take on user events
function createLib() {
    noun1result.textContent = noun1Input.value;
    presenttv1result.textContent = presenttv1Input.value;
    noun2result.textContent = noun2Input.value;
    pasttv1result.textContent = pasttv1Input.value;
    noun3result.textContent = noun3Input.value;
    adjective1result.textContent = adjective1Input.value;
    adverb1result.textContent = adverb1Input.value;
    presenttv2result.textContent = presenttv2Input.value;
}