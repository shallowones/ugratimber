"use strict";!function(e,t,n){e(function(){var i=e(window),o=function(e){return void 0!==e&&e.length},l=new n(".main-slider",{loop:!0,loopedSlides:4,slidesPerView:1,grabCursor:!0,autoplay:3e3}),s=new n(".main-slider-thumbs",{spaceBetween:4,centeredSlides:!0,slidesPerView:4,touchRatio:.2,slideToClickedSlide:!0,direction:"vertical",loop:!0,loopedSlides:4,onSlideChangeEnd:function(e){var t=e.realIndex;(t+4>e.slides.length||t-4<0)&&setTimeout(e.fixLoop,100)},breakpoints:{1200:{direction:"horizontal",centeredSlides:!1}}});if(o(l.container)&&o(s.container)){l.params.control=s,s.params.control=l;var r=function(t){e(t.container).hover(function(){l.stopAutoplay(),s.stopAutoplay()},function(){l.startAutoplay(),s.startAutoplay()})};r(l),r(s)}var a=new n(".detail-gal",{loop:!0,loopedSlides:4,slidesPerView:1}),c=new n(".detail-gal-thumbs",{slidesPerView:"auto",touchRatio:.2,loop:!0,slideToClickedSlide:!0,loopedSlides:4,onSlideChangeEnd:function(e){8===e.activeIndex&&(e.update(!0),e.slideTo(0,0))}});a.params.control=c,c.params.control=a,e("#lang").selectmenu(),e(".gallery").swiper({slidesPerView:"auto"});var u=function(t){var n=e(t.currentTarget);n.val().length>0?n.addClass("text"):n.removeClass("text")};e(".form__input").on("change",u);var d=function(e){e.jfilestyle({buttonText:"Обзор",placeholder:"",inputSize:"calc(100% - 134px)"})};d(e('.js-file input[type="file"]'));new t("Modal",{attach:".js-popup",onInit:function(){e(document).on("click",".jBox-Modal .popup__button",this.close.bind(this))},onOpen:function(){var e=this.source,t=this.content,n=e.find(".popup-block");e.find('.js-file input[type="file"]').jfilestyle("destroy");var i=n.html();void 0!==i&&i.length?(n.remove(),this.setContent(i),t.find(".form__input").on("change",u),d(t.find('.js-file input[type="file"]'))):this.close()},onCloseComplete:function(){var e=this.content;e.find('.js-file input[type="file"]').jfilestyle("destroy");var t=e.html();e.find(".popup").remove(),this.source.append('<div class="popup-block">'+t+"</div>")}}),e(".js-popup").on("click",function(e){e.preventDefault()}),new t("Tooltip",{attach:".js-touch",trigger:"click",position:{x:"left",y:"top"},outside:"x",closeOnClick:"body",onOpen:function(){var t=e(this.source.data("target")).html();void 0!==t&&t.length?this.setContent(t):this.close()}}),e(".js-search").on("click",function(t){t.preventDefault(),e(t.currentTarget.dataset.target).toggleClass("show"),e(t.currentTarget).toggleClass("active")});var p=e("#mobile-menu");p.find("div.menu__item > span").on("click",function(t){var n=e(t.currentTarget).parent();n.toggleClass("open");var i=n.hasClass("open");n.children().each(function(t,n){var o=e(n);o.hasClass("mobile-sub")&&(o.slideToggle(i),o.find("div.menu__item").removeClass("open").find(".mobile-sub").removeAttr("style"))})});var f=e("html");e(".js-mobile").on("click",function(){f.toggleClass("menu-open")}),i.resize(function(e){var t=e.currentTarget.innerWidth,n=f.hasClass("menu-open");t>768&&n&&(f.removeClass("menu-open"),p.find("div.menu__item").removeClass("open"),p.find(".mobile-sub").removeAttr("style"))});var h=e(".js-reduce"),m=h.find(".mobile-reduce-second"),v=h.find('button[type="button"]');v.on("click",function(t){t.preventDefault();var n=e(t.currentTarget);m.is(":visible")?(m.hide(500),n.removeClass("show")):(m.show(500),n.addClass("show"))}),i.resize(function(){i.width()>480&&(m.removeAttr("style"),v.removeClass("show"))});var g=e(".timeline__item");if(o(g)){var C=function(){g.each(function(t,n){var i=e(n),l=i.find(".timeline__item-right").height(),s=i.find(".timeline__item-left > span");l>60?s.css({height:l-30}):o(s.attr("style"))&&s.removeAttr("style")})};C(),i.resize(function(e){e.currentTarget.innerWidth>480&&C()})}})}(jQuery,jBox,Swiper);