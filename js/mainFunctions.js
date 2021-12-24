// slider inside carousel
let active = false;
const scrollers = document.querySelectorAll('.scroller');

scrollers.forEach(scroller => {
  scroller.addEventListener('mousedown', addScroller);
  scroller.addEventListener('mouseup', removeScroller);
  // scroller.addEventListener('mouseleave', removeScroller);
  scroller.addEventListener('mousemove',  handleMouseMove);
})

// document.body.addEventListener('mousemove',function(e){
//   if (!active) return;
  
//   let x = e.pageX;
//   x -= document.querySelector('.carousel-item').getBoundingClientRect().left;
//   scrollIt(x);
// });

function scrollIt(x){
    let transform = Math.max(0,(Math.min(x,document.querySelector('.carousel-item').offsetWidth)));
    document.querySelector('.after').style.width = transform+"px";
    document.querySelector('.scroller').style.left = transform-25+"px";
}
// scrollIt(150);

// document.querySelector('.scroller').addEventListener('touchstart',function(){
//   active = true;
//   document.querySelector('.scroller').classList.add('scrolling');
// });
// document.body.addEventListener('touchend',function(){
//   active = false;
//   document.querySelector('.scroller').classList.remove('scrolling');
// });
// document.body.addEventListener('touchcancel',function(){
//   active = false;
//   document.querySelector('.scroller').classList.remove('scrolling');
// });

function addScroller () {
  active = true;
  console.log('mousedown');
  this.classList.add('scrolling');
}

function removeScroller () {
  console.log('mouseup');
  active = false;
  this.classList.remove('scrolling');
}

function handleMouseMove (e) {
  console.log('mousemove');
  if (!active) return;

  const carouselItem = this.parentElement;
  let x = e.pageX;

  x -= this.parentElement.getBoundingClientRect().left;
  // scrollIt(x);
  scroll(x, carouselItem);
}

function scroll (x, el) {
  let transform = Math.max(0,(Math.min(x, el.offsetWidth)));
  el.querySelector('.after').style.width = transform+"px";
  el.querySelector('.scroller').style.left = transform-25+"px";
}