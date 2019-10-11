$(function () {
  $(".sp-menu-button").on("click", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".burger-nav").removeClass("open");
    } else {
      $(this).addClass("is-burger-nav-open");
      $(".burger-nav").addClass("open");
    }
  });
});

$(function(){
  $('.hero .center').slick({
    infinite: true, //スライドのループ有効化
    dots:false, //ドットのナビゲーションを表示
    centerMode: true, //要素を中央寄せ
    slidesToShow: 4,
    centerPadding:'10%', //両サイドの見えている部分のサイズ
    autoplay:true, //自動再生
    responsive: [
    {
      breakpoint: 751,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.voice .center').slick({
  infinite: true, //スライドのループ有効化
  dots:true, //ドットのナビゲーションを表示
  centerMode: true, //要素を中央寄せ
  slidesToShow: 3,
  centerPadding:'10%', //両サイドの見えている部分のサイズ
  autoplay:false, //自動再生
  responsive: [
  {
    breakpoint: 751,
    settings: {
      slidesToShow: 1,
      centerMode: true,
      centerPadding:'20%',
    }
  },
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]

});



});
