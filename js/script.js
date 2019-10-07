$(function(){

  $('.center').slick({
    arrows:false,
    swipeToslide:true,
    adaptiveHeight:false,
    infinite: true, //スライドのループ有効化
    dots: false, //ドットのナビゲーションを表示
    centerPadding: '15%', //両サイドの見えている部分のサイズ
    currentMode:true,
    autoplay: true, //自動再生
    variableWidth: true,
    responsive: [{
      breakpoint: 750, // 600〜1023px
      settings: {
        variableWidth: false,
        centerMode: true, //要素を中央寄せ
        slidesToShow:1,
      }
    }]
  });


   $('.multiple').slick({
     arrows:false,
      autoplay: false, //自動再生
      infinite: true, //スライドのループ有効化
      dots: false, //ドットのナビゲーションを表示
      autoplaySpeed: 0,
     cssEase: 'linear',
//     speed: 10000,
     centerMode: true,
     slidesToShow: 5, //表示するスライドの数
     slidesToScroll: 1, //スクロールで切り替わるスライドの数
      responsive: [{
        breakpoint: 768, //ブレークポイントが768px
        settings: {
          slidesToShow: 3, //表示するスライドの数
          slidesToScroll: 1, //スクロールで切り替わるスライドの数
        }
      }, {
        breakpoint: 480, //ブレークポイントが480px
        settings: {
          slidesToShow: 3, //表示するスライドの数
          slidesToScroll: 1, //スクロールで切り替わるスライドの数
        }
      }]
    });



});
