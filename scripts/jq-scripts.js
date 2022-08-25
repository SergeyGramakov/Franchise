$(document).ready(function () {
  // попапы
  $(".order__show").on("click", function () {
    $(".popup__order").fadeIn(300);
  });

  $(".call__show").on("click", function () {
    $(".popup__call-back").fadeIn(300);
  });

  $(".get__show").on("click", function () {
    $(".popup__get").fadeIn(300);
  });

  $(".get__close, .popup__get").on("click", function (e) {
    if (e.target === this) $(".popup__get").fadeOut(300);
  });

  $(".order__close, .popup__order").on("click", function (e) {
    if (e.target === this) $(".popup__order").fadeOut(300);
  });

  $(".call-back__close, .popup__call-back").on("click", function (e) {
    if (e.target === this) $(".popup__call-back").fadeOut(300);
  });

  $(".sec45__close, .popup__sec45").on("click", function (e) {
    if (e.target === this) $(".popup__sec45").fadeOut(300);
  });

  $(".leave__close, .popup__leave").on("click", function (e) {
    if (e.target === this) $(".popup__leave").fadeOut(300);
  });

  $('input[type="tel"]').mask("+7 (999) 999-99-99");

  setTimeout(() => {
    $(".popup__sec45").fadeIn(300);
  }, 45000);

  let flag = false;
  $("body").on("mouseleave", function () {
    if (!flag) {
      $(".popup__leave").fadeIn(300);
      flag = true;
    }
  });

  $('.terms__label').on('click', function () {
    if ($(this).hasClass('checked')) return true;
    else {
      $('.terms__label').removeClass('checked');
      $(this).addClass('checked');
    }
  });

  // настройка range-inputs
  $(".js-range-slider-sum").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 1000000,
    from: 100000,
    to: 500000,
    step: 1000,
    grid: true,
  });

  $(".js-range-slider-months").ionRangeSlider( {
    type: "double",
    min: 1,
    max: 12,
    from: 0,
    to: 3,
    step: 1,
    grid: true,
  });

  // показ-закрытие кейсов
  $('.cases__container_closed').on('click', function(){
    $(this).next().slideToggle(300);
  });

  $('.cases__container_opened').on('click', function(){
    $(this).slideToggle(300);
  });

});
