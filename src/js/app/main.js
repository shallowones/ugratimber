(function ($, jBox, Swiper) {
  $(function () {

    // проверка на существование элемента на странице
    const is = ((item) => { return typeof item !== 'undefined' && item.length })

    // инициализация слайдера на главной
    {
      const countSliders = 4
      const mainSlider = new Swiper('.main-slider', {
        loop: true,
        loopedSlides: countSliders,
        slidesPerView: 1,
        grabCursor: true,
        autoplay: 3000
      })
      const mainSliderThumbs = new Swiper('.main-slider-thumbs', {
        spaceBetween: countSliders,
        centeredSlides: true,
        slidesPerView: countSliders,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        direction: 'vertical',
        loop: true,
        loopedSlides: countSliders,
        onSlideChangeEnd: function (swiper) {
          const index = swiper.realIndex
          if (index + countSliders > swiper.slides.length || index - countSliders < 0) {
            setTimeout(swiper.fixLoop, 100)
          }
        },
        /*breakpoints: {
          1200: {
            direction: 'horizontal',
            centeredSlides: false
          }
        }*/
      })

      if (is(mainSlider.container) && is(mainSliderThumbs.container)) {
        mainSlider.params.control = mainSliderThumbs
        mainSliderThumbs.params.control = mainSlider

        const hover = ((swiper) => {
          $(swiper.container).hover(() => {
            mainSlider.stopAutoplay()
            mainSliderThumbs.stopAutoplay()
          }, () => {
            mainSlider.startAutoplay()
            mainSliderThumbs.startAutoplay()
          })
        })
        hover(mainSlider)
        hover(mainSliderThumbs)
      }
    }

    // инициализация слайдера на детальных
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

    // инициализация слайдера на детальных страницах
    {
      $('.gallery').swiper({
        slidesPerView: 'auto'
      })
    }

    // всплывающие окна + фокус инпутов + кастом input[type="file"]
    {
      const inputFormSelector = '.form__input'
      const inputFocus = (() => {
        return (e) => {
          const $this = $(e.currentTarget)
          const textClass = 'text'
          if ($this.val().length > 0) {
            $this.addClass(textClass)
          } else {
            $this.removeClass(textClass)
          }
        }
      })()
      $(inputFormSelector).on('change', inputFocus)

      const inputFileSelector = '.js-file input[type="file"]'
      const fileCustom = (() => {
        return ($el) => {
          $el.jfilestyle({
            buttonText: 'Обзор',
            placeholder: '',
            inputSize: 'calc(100% - 134px)'
          })
        }
      })()
      fileCustom( $(inputFileSelector) )

      const popupSelector = '.js-popup'
      new jBox('Modal', {
        attach: popupSelector,
        onOpen: function () {
          const $source = this.source
          const $content = this.content
          const $popup = $source.find('.popup-block')
          $source.find(inputFileSelector).jfilestyle('destroy')
          const html = $popup.html()
          if (typeof html !== 'undefined' && html.length) {
            $popup.remove()
            this.setContent(html)
            $content.find('.popup__button').on('click', (e) => {
              e.preventDefault()
              this.close()
            })
            $content.find(inputFormSelector).on('change', inputFocus)
            fileCustom( $content.find(inputFileSelector) )
          } else {
            this.close()
          }
        },
        onCloseComplete: function () {
          const $content = this.content
          $content.find(inputFileSelector).jfilestyle('destroy')
          const html = $content.html()
          $content.find('.popup').remove()
          this.source.append('<div class="popup-block">' + html + '</div>')
        }
      })
      $(popupSelector).on('click', (e) => { e.preventDefault() })
    }

    // работа с точками на карте
    {
      new jBox('Tooltip', {
        attach: '.js-touch',
        trigger: 'click',
        position: {
          x: 'left',
          y: 'top'
        },
        outside: 'x',
        closeOnClick: 'body',
        onOpen: function () {
          const html = $(this.source.data('target')).html()
          if (typeof html !== 'undefined' && html.length) {
            this.setContent(html)
          } else {
            this.close()
          }
        }
      });
    }

    // поиск
    {
      $('.js-search').on('click', (e) => {
        e.preventDefault()
        const $target = $(e.currentTarget.dataset.target)
        $target.toggleClass('show')
        $(e.currentTarget).toggleClass('active')
      })
    }

  })
})(jQuery, jBox, Swiper)
