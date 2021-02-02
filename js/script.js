let accordion = document.querySelector('.accordion');
let items = accordion.querySelectorAll('.accordion-item');
let triggers = document.querySelectorAll('.accordion-item__trigger');

function toggleAccordion() {
  let thisItem = this.parentNode;
  
  items.forEach(item => {
    if (thisItem == item ) {
      thisItem.classList.toggle('accordion-item--active');
      return;
    } 
    item.classList.remove('accordion-item--active');
  });
}

triggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));