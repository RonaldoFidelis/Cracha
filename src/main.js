const rotate = document.querySelector('.btn-rotate');
const rotate2 = document.querySelector('.btn-rotate2');
const card = document.querySelector('#card');
const front = document.querySelector('#front');
const back = document.querySelector('#back');

front.classList.add('z-20');
back.classList.add('z-10');

rotate.addEventListener("click", (e) => {
  console.log(e.target)

  console.log(card.classList.value)
  card.classList.remove('flip')
  front.classList.remove('z-20');
  back.classList.remove('z-10');
});

rotate2.addEventListener("click", (e) => {
  console.log(e.target)

  console.log(card.classList.value)
  card.classList.add('flip')
  front.classList.add('z-20');
  back.classList.add('z-10');

});
