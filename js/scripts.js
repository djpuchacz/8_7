var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
	allNames = femaleNames.concat(maleNames);
	newName = 'Kacper';
if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
  document.write(allNames);
} 
else {
  document.write('imię już występuje - wpisz inne')
}
console.log(allNames)