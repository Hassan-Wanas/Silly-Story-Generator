const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk.  When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
];
const insertY = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

randomize.addEventListener('click', result);

/*
this comment about what was wrong with the code,
and i figered out what was the proplem,
throgh seeing the elements part in the dev-tools,
[Silly story generator](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator)
the newStory var should be inside the funcetion,
so it re-asigned every time the button got clicked,
the (x-y-z)Item should also be inside the function,
so it changes each time the button got clicked
newStory is a string so it is immutable,
so it need to be re-defined (re-asigned) to itself,
*/


function result() {
  let newStory= storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name)
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature =  `${Math.round((94 - 32) * ( 5 / 9 ))} centigrade`;
    newStory = newStory.replaceAll("300 pounds" , weight);
    newStory = newStory.replaceAll("94 fahrenheit" , temperature);
  }
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}