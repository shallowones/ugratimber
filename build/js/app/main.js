"use strict";!function(e,t,i){e(function(){var n=e(window),o=function(e){return void 0!==e&&e.length},l=new i(".main-slider",{loop:!0,loopedSlides:4,slidesPerView:1,grabCursor:!0,autoplay:3e3}),s=new i(".main-slider-thumbs",{spaceBetween:4,centeredSlides:!0,slidesPerView:4,touchRatio:.2,slideToClickedSlide:!0,direction:"vertical",loop:!0,loopedSlides:4,onSlideChangeEnd:function(e){var t=e.realIndex;(t+4>e.slides.length||t-4<0)&&setTimeout(e.fixLoop,100)},breakpoints:{1200:{direction:"horizontal",centeredSlides:!1}}});if(o(l.container)&&o(s.container)){l.params.control=s,s.params.control=l;var r=function(t){e(t.container).hover(function(){l.stopAutoplay(),s.stopAutoplay()},function(){l.startAutoplay(),s.startAutoplay()})};r(l),r(s)}var a=new i(".detail-gal",{loop:!0,loopedSlides:4,slidesPerView:1}),c=new i(".detail-gal-thumbs",{slidesPerView:"auto",touchRatio:.2,loop:!0,slideToClickedSlide:!0,loopedSlides:4,onSlideChangeEnd:function(e){8===e.activeIndex&&(e.update(!0),e.slideTo(0,0))}});a.params.control=c,c.params.control=a,e("#lang").selectmenu(),e(".gallery").swiper({slidesPerView:"auto"});var d=function(t){var i=e(t.currentTarget);i.val().length>0?i.addClass("text"):i.removeClass("text")};e(".form__input").on("change",d);var u=function(e){e.jfilestyle({buttonText:"Обзор",placeholder:"",inputSize:"calc(100% - 134px)"})};u(e('.js-file input[type="file"]'));new t("Modal",{attach:".js-popup",onOpen:function(){var e=this,t=this.source,i=this.content,n=t.find(".popup-block");t.find('.js-file input[type="file"]').jfilestyle("destroy");var o=n.html();void 0!==o&&o.length?(n.remove(),this.setContent(o),i.find(".popup__button").on("click",function(t){t.preventDefault(),e.close()}),i.find(".form__input").on("change",d),u(i.find('.js-file input[type="file"]'))):this.close()},onCloseComplete:function(){var e=this.content;e.find('.js-file input[type="file"]').jfilestyle("destroy");var t=e.html();e.find(".popup").remove(),this.source.append('<div class="popup-block">'+t+"</div>")}}),e(".js-popup").on("click",function(e){e.preventDefault()}),new t("Tooltip",{attach:".js-touch",trigger:"click",position:{x:"left",y:"top"},outside:"x",closeOnClick:"body",onOpen:function(){var t=e(this.source.data("target")).html();void 0!==t&&t.length?this.setContent(t):this.close()}}),e(".js-search").on("click",function(t){t.preventDefault(),e(t.currentTarget.dataset.target).toggleClass("show"),e(t.currentTarget).toggleClass("active")});var p=e("#mobile-menu"),f=500;p.find(".menu__item").each(function(t,i){e(i).css({"transition-delay":f.toString()+"ms"}),f+=30}),p.find(".form-control.search").css({"transition-delay":f.toString()+"ms"}),e(".js-mobile").on("click",function(){e("html").toggleClass("menu-open")});var h=e(".js-reduce"),m=h.find(".mobile-reduce-second"),v=h.find('button[type="button"]');v.on("click",function(t){t.preventDefault();var i=e(t.currentTarget);m.is(":visible")?(m.hide(500),i.removeClass("show")):(m.show(500),i.addClass("show"))}),n.resize(function(){n.width()>480&&(m.removeAttr("style"),v.removeClass("show"))});var g=e(".timeline__item");if(o(g)){var y=function(){g.each(function(t,i){var n=e(i),l=n.find(".timeline__item-right").height(),s=n.find(".timeline__item-left > span");l>60?s.css({height:l-30}):o(s.attr("style"))&&s.removeAttr("style")})};y(),n.resize(function(e){e.currentTarget.innerWidth>480&&y()})}})}(jQuery,jBox,Swiper);