const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


randomize.addEventListener('click', result);

function result() {
	console.log("BOOP");
	let name = "Bob";
  if(customName.value !== '') {
    name = customName.value;

  }

	let tempStr = "94 fahrenheit";
	let weightStr = "300 pounds";

  if(document.getElementById("uk").checked) {
	tempStr = "34 celsius";
	weightStr = "136 kilograms";

  }
  
  const x = randomValueFromArray(['Willy the Goblin', 'Big Daddy', 'Father Christmas']);

  story.textContent = `It was ${tempStr} outside, so ${x} went for a walk. When they got to ${randomValueFromArray(['the soup kitchen', 'Disneyland', 'the White House'])}, they stared in horror for a few moments, then ${randomValueFromArray(['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'])}. ${name} saw the whole thing, but was not surprised — ${x} weighs ${weightStr}, and it was a hot day.`;
  console.log(story.textContent);
  story.style.visibility = 'visible';
}