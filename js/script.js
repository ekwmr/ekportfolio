'use strict';

// ハンバーガーメニュー
$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.menu , .menu-btn').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
 
  const imgbtn = $('#hbtn');
  if(imgbtn.hasClass('close')){
    imgbtn.removeClass('close');
    imgbtn.attr('src','images/menu-btn.png');
  } else {
    imgbtn.addClass('close');
    imgbtn.attr('src','images/menu-btn-close.png');
  }
 })
});


// トップページのスライダー
$('.slider').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 6900,//スライドのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 4,//スライドを画面に4枚見せる
  slidesToScroll: 1,//1回のスライドで動かす要素数
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1.5,//スライドを画面に1.5枚見せる
    }
  }
]
});


// ワークスページのギャラリー

$(window).on('load',function(){	//画面遷移時にギャラリーの画像が被らないように、すべての読み込みが終わった後に実行する

  //＝＝＝Muuriギャラリープラグイン設定
  var grid = new Muuri('.grid', {
  
  //アイテムの表示速度※オプション。入れなくても動作します
  showDuration: 600,
  showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  hideDuration: 600,
  hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    
  // アイテムの表示/非表示状態のスタイル※オプション。入れなくても動作します
    visibleStyles: {
      opacity: '1',
      transform: 'scale(1)'
    },
    hiddenStyles: {
      opacity: '0',
      transform: 'scale(0.5)'
    }    
  });
  
  //＝＝＝並び替えボタン設定
  $('.sort-btn li').on('click',function(){			//並び替えボタンをクリックしたら
    $(".sort-btn .active").removeClass("active");	//並び替えボタンに付与されているactiveクラスを全て取り除き
    var className = $(this).attr("class");			//クラス名を取得
    className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする
    $("."+className[0]).addClass("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
    if(className[0] == "sort00"){						//クラス名がsort00（全て）のボタンの場合は、
       grid.show('');								//全ての要素を出す
    }else{											//それ以外の場合は
      grid.filter("."+className[0]); 				//フィルターを実行
    }
  });
  
  //＝＝＝ Fancyboxの設定
  $('[data-fancybox]').fancybox({
   thumbs: {
      autoStart: true, //グループのサムネイル一覧をデフォルトで出す。不必要であればfalseに
    },	
  });
    
  });