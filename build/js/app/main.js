"use strict";!function(e,t,o){e(function(){var i=new o(".main-slider",{loop:!0,loopedSlides:4,slidesPerView:1,grabCursor:!0}),n=new o(".main-slider-thumbs",{spaceBetween:4,centeredSlides:!0,slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0,direction:"vertical",loop:!0,loopedSlides:4,onSlideChangeEnd:function(e){8===e.activeIndex&&(e.update(!0),e.slideTo(0,0))},breakpoints:{1200:{direction:"horizontal",centeredSlides:!1}}});i.params.control=n,n.params.control=i;var l=new o(".detail-gal",{loop:!0,loopedSlides:4,slidesPerView:1}),s=new o(".detail-gal-thumbs",{slidesPerView:"auto",touchRatio:.2,loop:!0,slideToClickedSlide:!0,loopedSlides:4,onSlideChangeEnd:function(e){8===e.activeIndex&&(e.update(!0),e.slideTo(0,0))}});l.params.control=s,s.params.control=l,e("#lang").selectmenu(),e(".gallery").swiper({slidesPerView:"auto"});var r=function(t){var o=e(t.currentTarget);o.val().length>0?o.addClass("text"):o.removeClass("text")};e(".form__input").on("keyup",r);var a=function(e){e.jfilestyle({buttonText:"Обзор",placeholder:"",inputSize:"calc(100% - 134px)"})};a(e('.js-file input[type="file"]'));new t("Modal",{attach:".js-popup",onOpen:function(){var e=this,t=this.source,o=this.content,i=t.find(".popup-block");t.find('.js-file input[type="file"]').jfilestyle("destroy");var n=i.html();void 0!==n&&n.length?(i.remove(),this.setContent(n),o.find(".popup__button").on("click",function(t){t.preventDefault(),e.close()}),o.find(".form__input").on("keyup",r),a(o.find('.js-file input[type="file"]'))):this.close()},onCloseComplete:function(){var e=this.content;e.find('.js-file input[type="file"]').jfilestyle("destroy");var t=e.html();e.find(".popup").remove(),this.source.append('<div class="popup-block">'+t+"</div>")}}),e(".js-popup").on("click",function(e){e.preventDefault()}),new t("Tooltip",{attach:".js-touch",trigger:"click",position:{x:"left",y:"top"},outside:"x",closeOnClick:"body",onOpen:function(){var t=e(this.source.data("target")).html();void 0!==t&&t.length?this.setContent(t):this.close()}}),e(".js-search").on("click",function(t){t.preventDefault(),e(t.currentTarget.dataset.target).toggleClass("show"),e(t.currentTarget).toggleClass("active")});var c=e("#mobile-menu"),d=500;c.find(".menu__item").each(function(t,o){e(o).css({"transition-delay":d.toString()+"ms"}),d+=30}),c.find(".form-control.search").css({"transition-delay":d.toString()+"ms"}),e(".js-mobile").on("click",function(){e("html").toggleClass("menu-open")});var u=e(".js-reduce"),p=u.find(".mobile-reduce-second"),f=u.find('button[type="button"]');f.on("click",function(t){t.preventDefault();var o=e(t.currentTarget);p.is(":visible")?(p.hide(500),o.removeClass("show")):(p.show(500),o.addClass("show"))});var h=e(window);h.resize(function(){h.width()>480&&(p.removeAttr("style"),f.removeClass("show"))})})}(jQuery,jBox,Swiper);