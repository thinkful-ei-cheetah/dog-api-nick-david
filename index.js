'use strict';

// function getDogImage(numOfDogs) {
//   fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
//     .then(response => response.json())
//     .then(responseJson => 
//       displayResults(responseJson))
//     .catch(error => alert('Something went wrong. Try again later.' + error.message));
// }

// function displayResults(responseJson) {
//   console.log(responseJson);

//   // reset div.images
//   $('.images').html('');

//   // append to .results
//   for(let i=0; i<responseJson.message.length; i++) {
//     $('.images').append(
//       `<img src="${responseJson.message[i]}" class="results-img">`
//     );
//   }
  
//   //display the results section
//   $('.results').removeClass('hidden');
// }

// function watchForm() {
//   $('form').submit(event => {
//     event.preventDefault();
//     const numOfDogs = $('#num-of-dogs').val();

//     if(numOfDogs < 51 && numOfDogs > 0) {
//       getDogImage(numOfDogs);
//     } else {
//       throw new Error('Please select between 1 and 50 dogs');
//     }
//   });
// }

// $(function() {
//   console.log('App loaded! Waiting for submit!');
//   watchForm();
// });



//Specific Breed

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.' + error.message));
}

function displayResults(responseJson) {
  console.log(responseJson);

  if (responseJson.status === 'success'){
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    );
  } else {
    $('.results-img').replaceWith(
      `<img src='https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/404-error.png' class='results-img'>`
    );}

  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const dogBreed = $('#dog-breed').val();
    getDogImage(dogBreed);
    
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});