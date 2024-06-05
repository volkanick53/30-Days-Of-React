const itCompanies = [
  "facebook",
  "google",
  "microsoft",
  "apple",
  "iBM",
  "oracle",
  "amazon",
];

console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

for (i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

console.log(itCompanies.toString() + " are big IT companies");

let certaincompany = itCompanies.indexOf("apple");

if (certaincompany != -1) {
  console.log("company does exist " + itCompanies[certaincompany]);
} else {
  console.log("company does not exist");
}

function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }
  return count;
}

const filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
  if (countOccurrences(itCompanies[i], "o") <= 1) {
    filteredCompanies.push(itCompanies[i]);
  }
}

console.log(filteredCompanies);

console.log(itCompanies.sort());
