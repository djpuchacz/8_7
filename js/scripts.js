var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Kacper';
if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
  document.write(allNames);
} 
else {
  document.write('imię już występuje - wpisz inne')
}
console.log(allNames)