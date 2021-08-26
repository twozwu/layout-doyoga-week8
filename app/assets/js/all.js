//  <!-- Initialize Swiper -->
const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 25,
  centeredSlides: false,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl, { toggle: false })
})

// 預約課程箭頭&active
var myCollapsible = document.getElementById('levelFirst')
myCollapsible.addEventListener('hidden.bs.collapse', function () {
  $('#arrowFirst').toggleClass('invisible')
  $('#choose1').toggleClass('active')
  collapseList[5].hide();
  collapseList[6].hide();
  $('#choose2').removeClass('active')
  $('#choose3').removeClass('active')
  $('#arrowSec').attr('class','course-arrow text-center py-1 invisible')
  $('#arrowThird').attr('class','course-arrow text-center py-1 invisible')
})
myCollapsible.addEventListener('show.bs.collapse', function () {
  $('#arrowFirst').toggleClass('invisible')
  $('#choose1').toggleClass('active');
  collapseList[5].hide();
  collapseList[6].hide();
  $('#choose2').removeClass('active')
  $('#choose3').removeClass('active')
  $('#arrowSec').attr('class','course-arrow text-center py-1 invisible')
  $('#arrowThird').attr('class','course-arrow text-center py-1 invisible')
})

var levelSec = document.getElementById('levelSec')
levelSec.addEventListener('hidden.bs.collapse', function () {
  $('#arrowSec').toggleClass('invisible')
  $('#choose2').toggleClass('active');
  collapseList[4].hide();
  collapseList[6].hide();
  $('#choose1').removeClass('active')
  $('#choose3').removeClass('active')
  $('#arrowFirst').attr('class','course-arrow text-center py-1 invisible')
  $('#arrowThird').attr('class','course-arrow text-center py-1 invisible')
})
levelSec.addEventListener('show.bs.collapse', function () {
  $('#arrowSec').toggleClass('invisible')
  $('#choose2').toggleClass('active');
  collapseList[4].hide();
  collapseList[6].hide();
  $('#choose1').removeClass('active')
  $('#choose3').removeClass('active')
  $('#arrowFirst').attr('class','course-arrow text-center py-1 invisible')
  $('#arrowThird').attr('class','course-arrow text-center py-1 invisible')
})

var levelThird = document.getElementById('levelThird')
levelThird.addEventListener('hidden.bs.collapse', function () {
  $('#arrowThird').toggleClass('invisible')
  $('#choose3').toggleClass('active');
  collapseList[4].hide();
  collapseList[5].hide();
  $('#choose1').removeClass('active')
  $('#choose2').removeClass('active')
  $('#arrowFirst').attr('class','course-arrow text-center py-1 invisible')
  $('#arrowSec').attr('class','course-arrow text-center py-1 invisible')
})
levelThird.addEventListener('show.bs.collapse', function () {
  $('#arrowThird').toggleClass('invisible')
  $('#choose3').toggleClass('active');
  collapseList[4].hide();
  collapseList[5].hide();
  $('#choose1').removeClass('active')
  $('#choose2').removeClass('active')
  $('#arrowFirst').attr('class','course-arrow text-center py-1 invisible')
  $('#arrowSec').attr('class','course-arrow text-center py-1 invisible')
})