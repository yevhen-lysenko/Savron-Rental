$(function () {

    var mixer = mixitup('.car__park-cards');


    $('.discount__slider').slick({
        arrows: true,
        dots: true,
        
    })
    
    $('.slide__arrow-prev').on('click', function (e) {
        e.preventDefault()
        $('.discounts__slide').slick('slickPrev')
    })

    $('.slide__arrow-next').on('click', function (e) {
        e.preventDefault()
        $('.discounts__slide').slick('slickNext')
    })



    $('.arend__checkbox').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('arend__checkbox--agree')
    })

    $('.rent__form-check').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('rent__form-check--agree')
    })

    $('.question__form-check').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('question__form-check--agree')
    })


    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__nav-burger').toggleClass('header__nav-burger--open')
        $('.burger').toggleClass('burger--active')
        $('.overlay').toggleClass('overlay---show')
    })
    
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });












