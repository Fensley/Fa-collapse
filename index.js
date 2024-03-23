
// parentNode  .toggle

const toggle = document.querySelectorAll(".faq-toggle");

toggle.forEach( node=>{
  node.addEventListener('click' , ()=>{
  node.parentNode.classList.toggle("active")
  })
  
})

