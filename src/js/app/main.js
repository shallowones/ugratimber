(function ($, jBox, Swiper) {
  $(function () {

    // инициализация слайдера на главной
    {
      const countSliders = 4

      const mainSlider = new Swiper('.main-slider', {
        loop: true,
        loopedSlides: countSliders,
        slidesPerView: 1,
        grabCursor: true
        //autoplay: 2000
      });

      const mainSliderThumbs = new Swiper('.main-slider-thumbs', {
        spaceBetween: countSliders,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        direction: 'vertical',
        loop: true,
        loopedSlides: countSliders,
        onSlideChangeEnd: function (swiper) {
          if (swiper.activeIndex === (countSliders * 2)) {
            swiper.update(true);
            swiper.slideTo(0, 0)
          }
        }
      });

      mainSlider.params.control = mainSliderThumbs;
      mainSliderThumbs.params.control = mainSlider;
    }

    // инициализация слайдера на главной
    {
      const countSliders = 4

      const detailSlider = new Swiper('.detail-gal', {
        loop: true,
        loopedSlides: countSliders,
        slidesPerView: 1
        //autoplay: 2000
      });

      const detailSliderThumbs = new Swiper('.detail-gal-thumbs', {
        slidesPerView: 'auto',
        touchRatio: 0.2,
        loop: true,
        slideToClickedSlide: true,
        loopedSlides: countSliders,
        onSlideChangeEnd: function (swiper) {
          if (swiper.activeIndex === (countSliders * 2)) {
            swiper.update(true);
            swiper.slideTo(0, 0)
          }
        }
      });

      detailSlider.params.control = detailSliderThumbs;
      detailSliderThumbs.params.control = detailSlider;
    }

    // кастомим селект выбора языка сайта
    {
      $('#lang').selectmenu()
    }

    // фокус инпутов
    {
      $('.form__input').on('keyup', (e) => {
        const $this = $(e.currentTarget)
        const textClass = 'text'
        if ($this.val().length > 0) {
          $this.addClass(textClass)
        } else {
          $this.removeClass(textClass)
        }
      })
    }

    // инициализация слайдера на детальных страницах
    {
      $('.gallery').swiper({
        slidesPerView: 'auto'
      })
    }

    // всплывающие окна
    {
      const popupSelector = '.js-popup'
      new jBox('Modal', {
        attach: popupSelector,
        closeOnClick: false,
        onOpen: function () {
          const html = this.source.find('.popup-block').html()
          if (typeof html !== 'undefined' && html.length) {
            this
              .setContent(html)
              .content.find('.popup__button').on('click', (e) => {
              e.preventDefault()
              this.close()
            })
          } else {
            this.close()
          }
        },
        onClose: function () {
          this.content.find('.popup__button').off('click')
        }
      })
      $(popupSelector).on('click', (e) => { e.preventDefault() })
    }

  })
})(jQuery, jBox, Swiper)
