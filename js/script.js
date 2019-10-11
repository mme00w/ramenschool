$(function () {
  $(".button1").on("click", function () {
      $(".button1").removeClass("open");
      $(".button1").addClass("close");
      $(".button2").removeClass("close");
      $(".button2").addClass("open");
      $(".sp-menu").removeClass("close");
      $(".sp-menu").addClass("open");
  });
});

$(function () {
  $(".button2").on("click", function () {
      $(".button2").removeClass("open");
      $(".button2").addClass("close");
      $(".button1").removeClass("close");
      $(".button1").addClass("open");
      $(".sp-menu").removeClass("open");
      $(".sp-menu").addClass("close");
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
