console.log('first file')

const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

const secondSection = document.getElementById('second-section');

console.log(secondSection);
secondSection.style.color = 'orange';
secondSection.style.backgroundColor = "blue";
secondSection.style.border = '5px';
secondSection.style.padding = '5px'
secondSection.style.paddingLeft = '5px'
secondSection.style.borderRadius = '10px'
secondSection.style.textAlign = 'center'

// document.querySelector
// document.querySelectorAll