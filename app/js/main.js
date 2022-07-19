$(function (){

  $('.shop-content__inner').addClass('shop-content__inner--grid');

  $('.shop-content__show-filters').on("click", function(){
    $(".filter-items").slideToggle()
  });

  $(".shop-content__filter-btn").on("click", function(){
    $(".shop-content__filter-btn").removeClass("shop-content__filter-btn--active");
    $(this).addClass("shop-content__filter-btn--active");
  });
  var old = $(".product-item__link:eq(1)").clone(true);
  $('.button-list').on('click', function(){
    $('.product-item').addClass('product-item--list');
    $('.shop-content__inner').removeClass('shop-content__inner--grid');
    $('.shop-content__inner').addClass('shop-content__inner--list');
    let replace__item = $(".product-item__link-box");
    replace__item.remove();
    let insert_item = replace__item.first()
    let insert_place = $(".product-item__wrapper-box");
    insert_place.append(insert_item);
    $(".product-item__link:eq(1)").html("ADD TO CART");
  });

  $('.button-grid').on('click', function(){
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__inner').removeClass('shop-content__inner--list');
    $('.shop-content__inner').addClass('shop-content__inner--grid');

    let replace__item = $(".product-item__link-box");
    replace__item.remove();
    let insert_item = replace__item.first();
    let insert_place = $(".product-item__img-box");
    insert_place.append(insert_item);
    $(".product-item").find(".product-item__link:eq(1)").remove();
    $(".product-item").find(".product-item__link:eq(0)").after(old);
  });

  $(".user-nav__link-catalog").on("click", function(){
    $(".menu__list").toggleClass("menu__list--active");
  })

  $(function(){
    $(".filter-recent__item-rating").rateYo({
      starWidth:"13px",
      rating:4,
      spacing: "7px",
      normalFill:"#d6d6d6",
      ratedFill:"#ffcc00",
      readOnly:true
    });
  });

  
  $(function(){
    $(".product-item__rating, .product-one__star").rateYo({
      starWidth:"20px",
      rating:4,
      spacing: "15px",
      normalFill:"#d6d6d6",
      ratedFill:"#ffcc00",
      readOnly:true
    });
  });


  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix:"$",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });

  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".product-slide__thumb").slick({
    asNavFor:".product-slide__big",
    focusOnSelect: true,
    slidesToShow:3,
    slidesToScroll:1,
    vertical:true,
    draggable:false
  });

  $(".product-slide__big").slick({
    asNavFor:".product-slide__thumb",
    draggable:false,
    arrows:false,
    fade:true,
    responsive:[
      {
        breakpoint:400,
        settings:{
          draggable:true
        }
      }
    ]
  });

  $('.product-one__input').styler();
  
  $(".product-tabs__top-item").on("click", function(e){
    e.preventDefault();
    $(".product-tabs__top-item").removeClass("product-tabs__top-item--active");
    $(this).addClass("product-tabs__top-item--active");

    $(".product-tabs__content-item").removeClass("product-tabs__content-item--active");
    $($(this).attr("href")).addClass("product-tabs__content-item--active");
  });




  let containerEl1 = document.querySelector('[data-ref="container-1"]');
  let containerEl2 = document.querySelector('[data-ref="container-2"]');
  let config = {
    controls: {
      scope: "local",
    },
  };
  let mixer = mixitup(containerEl1, config);
  let mixer1 = mixitup(containerEl2, config);
  
  
  


});
