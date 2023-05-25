// show filters
function openFilters(condition){
  document.querySelector('.options-toggle-' + condition).addEventListener('click', function() {
    if (window.getComputedStyle(document.querySelector('.options-' + condition), null).getPropertyValue("display") === 'none') {
      document.querySelector('.options-' + condition).style.display = 'block';
      document.querySelector('.options-' + condition).style.transition = 'all 0.3s';
      document.getElementById(condition + "-plus").src = "icons/minus.png";

    } else {
      document.querySelector('.options-' + condition).style.display = 'none';
      document.getElementById(condition + "-plus").src = "icons/plus.png";
      document.querySelector('.options-' + condition).style.transition = 'all 0.3s';
    }
  });
}
openFilters("type")
openFilters("caffeine")
openFilters("taste")
openFilters("country")


//filter
function filterElements() {
  const boxes = document.querySelectorAll('input[type="checkbox"]');
  let checkboxes = [];
  boxes.forEach(element => {
    if(element.checked == true){
      checkboxes.push(element.id);
    }
  });

  let filteredElements = [];

  const elements = document.querySelectorAll('.catalog-card-container');
  let classes = []
  elements.forEach(element => {
    classes.length = 0
    classes = Array.from(element.classList);

    
    let containsAll = true;
    for (var i = 0; i < checkboxes.length; i++) {
      containsAll = classes.includes(checkboxes[i]);
      if (containsAll) {
        filteredElements.push(element);
      }
    }
  });

  elements.forEach(element => {
    element.style.display = 'none';
  });

  if (filteredElements.length > 0) {
    filteredElements.forEach(element => {
      element.style.display = 'flex';
    });
  } else {
    elements.forEach(element => {
      element.style.display = 'flex';
    });
  }
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', filterElements);
});

function showProperties(button) {
  let prop = Array.from(button.parentElement.classList);
  prop.shift();
  alert("Властивості чаю: " + prop);
}