// show filters
function openFilters(condition){
    document.querySelector('.options-toggle-' + condition).addEventListener('click', function() {
      if (window.getComputedStyle(document.querySelector('.options-' + condition), null).getPropertyValue("display") === 'none') {
        document.querySelector('.options-' + condition).style.display = 'block';
        document.getElementById(condition + "-plus").src = "icons/minus.png";
      } else {
        document.querySelector('.options-' + condition).style.display = 'none';
        document.getElementById(condition + "-plus").src = "icons/plus.png";
      }
    });
  }
  openFilters("type")
  openFilters("caffeine")
  openFilters("taste")
  openFilters("country")
  
  
  //filter
  // allteas = document.querySelectorAll("catalog-card-container")
  
  // function filter(condition){
  //   document.getElementById(condition + "-filter").addEventListener("change", function() {
  //   if(this.checked) {
  //       document.querySelectorAll("."+ condition).forEach(function(element) {
  //         element.style.display = "block";
  //       });
  //       document.querySelectorAll(`.catalog-card-container:not(.${condition})`).forEach(function(noelement) {
  //         noelement.style.display = "none";
  //       });
  //   }
  //   else {
  //     document.querySelectorAll("."+ condition).forEach(function(element) {
  //       element.style.display = "none";
  //     });
  //       document.querySelectorAll(`.catalog-card-container:not(.${condition})`).forEach(function(noelement) {
  //       noelement.style.display = "block";
  //     });
  //     }
  // });}
  
  // const allcards = document.querySelectorAll("catalog-card-container")
  
  // function filter(condition){
  //   let allUnchecked = true;
  //   document.querySelectorAll("[class*='-filter']").forEach(function(checkbox) {
  //   if (checkbox.checked) {
  //     allUnchecked = false;
  //   }
  //   });
  //   if(allUnchecked){
  //     allcards.forEach(function(element) {
  //       element.style.display = "flex";
  //     });
  //   }
  //   document.getElementById(condition + "-filter").addEventListener("change", function() {
  //   if(this.checked) {
  //       document.querySelectorAll("."+ condition).forEach(function(element) {
  //       element.style.display = "flex";
  //       });
  //       document.querySelectorAll(`.catalog-card-container:not(.${condition})`).forEach(function(noelement) {
  //       noelement.style.display = "none";
  //       });
  //   }
  //   else {
  //       document.querySelectorAll("."+ condition).forEach(function(element) {
  //         element.style.display = "none";
  //       });
  //         document.querySelectorAll(`.catalog-card-container:not(.${condition})`).forEach(function(noelement) {
  //         noelement.style.display = "flex";
  //       });
  //     }
  // });}
  
  function filterElements() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const container = document.querySelector('.catalog-container');
  
    const regexString = checkboxes.length > 0 ? checkboxes[0].id.replace('-filter', '') : '';
    for (let i = 1; i < checkboxes.length; i++) {
      regexString += '|' + checkboxes[i].id.replace('-filter', '');
    }
    const regex = new RegExp(regexString);
  
    const filteredElements = [];
  
    const elements = container.querySelectorAll('.catalog-card-container');
    elements.forEach(element => {
      const classes = element.className.split(' ');
      for (let i = 0; i < classes.length; i++) {
        if (regex.test(classes[i])) {
          filteredElements.push(element);
          break;
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