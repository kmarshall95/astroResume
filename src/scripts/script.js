const cards = document.querySelectorAll(".cardX");

const cardContainer = document.querySelector(".card-container");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    entry.target.classList.toggle("show", entry.isIntersecting)
    /*
    /use if you want to stop observing the element after it is visible
    if(entry.isIntersecting) observer.unobserve(entry.target)
    */
  })
},{threshold: 1,})

const lastCardObserver = new IntersectionObserver(entries => {
  const lastCard = entries[0]
  if(!lastCard.isIntersecting) return 
  loadNewCards()
  lastCardObserver.unobserve(lastCard.target) 
  lastCardObserver.observe(document.querySelector(".cardX:last-child"))

}, {rootMargin: "0px 0px 100% 0px"})

lastCardObserver.observe(document.querySelector(".cardX:last-child"))

cards.forEach(card => {
  observer.observe(card)
})

function loadNewCards(){
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div")
    card.textContent = "Card"
    card.classList.add("cardX")
    observer.observe(card)
    cardContainer.append(card)
  }
}

