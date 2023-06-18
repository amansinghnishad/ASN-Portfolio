// Get all open buttons
const openButtons = document.querySelectorAll('.openButton');

// Add click event listener to each open button
openButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const target = button.getAttribute('data-target');
    const miniWindow = document.getElementById(target);
    miniWindow.classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
  });
});

// Get all close buttons
const closeButtons = document.querySelectorAll('.closeButton');

// Add click event listener to each close button
closeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const miniWindow = button.closest('.miniWindow');
    miniWindow.classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
  });
});





/* fade in transition */

const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
});

elements.forEach(element => {
  observer.observe(element);
});












// window.addEventListener('scroll', function() {
//     var elementsToShow = document.querySelectorAll('.fade-in:not(.show)');
    
//     Array.prototype.forEach.call(elementsToShow, function(element) {
//       if (isElementInViewport(element)) {
//         element.classList.add('show');
//       }
//     });
//   });
  
//   function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
    
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }