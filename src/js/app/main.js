(function ($, jBox, Swiper) {
  $(function () {

    // определим глобально селектор окна
    const $window = $(window)

    // проверка на существование элемента на странице
    const is = ((item) => { return typeof item !== 'undefined' && item.length })

    // инициализация слайдера на главной
    {
      const countSliders = 4
      const mobileWidth = 1200
      const windowWidth = $window.width()
      const mainSlider = new Swiper('.main-slider', {
        loop: true,
        loopedSlides: countSliders,
        loopedAdditionalSlides: countSliders,
        slidesPerView: 1,
        grabCursor: true,
        //autoplay: 3000
      })
      let swiperParams = {
        init: windowWidth > mobileWidth,
        spaceBetween: countSliders,
        centeredSlides: true,
        slidesPerView: countSliders,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        direction: 'vertical',
        loop: true,
        loopedSlides: countSliders,
        loopedAdditionalSlides: countSliders,
        controller: {
          control: mainSlider
        },
        on: {
          init: function () {
            if (windowWidth > mobileWidth) {
              mainSlider.controller.control = this
            }
          },
          slideChangeTransitionEnd: function () {
            const index = this.snapIndex
            if (index + countSliders > this.slides.length || index - countSliders < 0) {
              this.slideTo(this.realIndex, 0)
            }
          }
        }
      }
      let swiperParamsMobile = {
        init: windowWidth <= mobileWidth,
        spaceBetween: countSliders,
        slidesPerView: countSliders,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: countSliders,
        loopedAdditionalSlides: countSliders,
        controller: {
          control: mainSlider
        },
        on: {
          init: function () {
            if ($window.width() <= mobileWidth) {
              mainSlider.controller.control = this
            }
          }
        }
      }

      const desktop = new Swiper('.slider-desktop', swiperParams)
      const mobile = new Swiper('.slider-mobile', swiperParamsMobile);

      let change = false
      $window.resize((e) => {
        const width = e.currentTarget.innerWidth
        if (width > mobileWidth && change) {
          desktop.init()
          mainSlider.controller.control = desktop
          change = false
        } else if (width <= mobileWidth && !change) {
          mobile.init()
          mainSlider.controller.control = mobile
          change = true
        }
      })
    }

    // инициализация слайдера на детальных
    {
      const countSliders = 4

      const detailSlider = new Swiper('.detail-gal', {
        loop: true,
        loopedSlides: countSliders,
        slidesPerView: 1
        //autoplay: 2000
      })

      const detailSliderThumbs = new Swiper('.detail-gal-thumbs', {
        slidesPerView: 'auto',
        touchRatio: 0.2,
        loop: true,
        slideToClickedSlide: true,
        loopedSlides: countSliders,
        onSlideChangeEnd: function (swiper) {
          if (swiper.activeIndex === (countSliders * 2)) {
            swiper.update(true)
            swiper.slideTo(0, 0)
          }
        }
      })

      detailSlider.params.control = detailSliderThumbs
      detailSliderThumbs.params.control = detailSlider
    }

    // кастомим селект выбора языка сайта
    {
      $('#lang').selectmenu()
    }

    // инициализация слайдера на детальных страницах
    {
      new Swiper('.gallery', {
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
      fileCustom($(inputFileSelector))

      const popupSelector = '.js-popup'
      new jBox('Modal', {
        attach: popupSelector,
        onInit: function () {
          $(document).on('click', '.jBox-Modal .popup__button', this.close.bind(this))
        },
        onOpen: function () {
          const $source = this.source
          const $content = this.content
          const $popup = $source.find('.popup-block')
          $source.find(inputFileSelector).jfilestyle('destroy')
          const html = $popup.html()
          if (typeof html !== 'undefined' && html.length) {
            $popup.remove()
            this.setContent(html)
            $content.find(inputFormSelector).on('change', inputFocus)
            fileCustom($content.find(inputFileSelector))
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
      })
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

    // работа с мобильным меню
    {
      /*const $mobileMenu = $('#mobile-menu')
      const $menuItems = $mobileMenu.find('.menu__item')
      const step = 30
      let delay = 500
      $menuItems.each((index, el) => {
        $(el).css({
          'transition-delay': delay.toString() + 'ms'
        })
        delay += step
      })
      $mobileMenu.find('.form-control.search').css({
        'transition-delay': delay.toString() + 'ms'
      })*/

      const $mobileMenu = $('#mobile-menu')
      $mobileMenu.find('div.menu__item > span').on('click', (e) => {
        const $this = $(e.currentTarget)
        const $menuItem = $this.parent()
        $menuItem.toggleClass('open')
        const isActive = $menuItem.hasClass('open')
        $menuItem.children().each((index, el) => {
          const $children = $(el)
          if ($children.hasClass('mobile-sub')) {
            $children.slideToggle(isActive)
            $children.find('div.menu__item').removeClass('open')
              .find('.mobile-sub').removeAttr('style')
          }
        })
      })

      const $html = $('html')
      const menuOpenClass = 'menu-open'
      $('.js-mobile').on('click', () => {
        $html.toggleClass(menuOpenClass)
      })

      $window.resize((e) => {
        const width = e.currentTarget.innerWidth
        const menuOpen = $html.hasClass(menuOpenClass)
        if (width > 768 && menuOpen) {
          $html.removeClass(menuOpenClass)
          $mobileMenu.find('div.menu__item').removeClass('open')
          $mobileMenu.find('.mobile-sub').removeAttr('style')
        }
      })
    }

    // читать далее
    {
      const $reduce = $('.js-reduce')
      const $hideBlock = $reduce.find('.mobile-reduce-second')
      const $button = $reduce.find('button[type="button"]')
      const showClass = 'show'
      $button.on('click', (e) => {
        e.preventDefault()
        const $this = $(e.currentTarget)
        const delay = 500
        if ($hideBlock.is(':visible')) {
          $hideBlock.hide(delay)
          $this.removeClass(showClass)
        } else {
          $hideBlock.show(delay)
          $this.addClass(showClass)
        }
      })
      $window.resize(() => {
        const width = $window.width()
        if (width > 480) {
          $hideBlock.removeAttr('style')
          $button.removeClass(showClass)
        }
      })
    }

    // история холдинга
    {
      const $timeline = $('.timeline__item')
      if (is($timeline)) {
        const setHeightToTimeline = (() => {
          $timeline.each((index, el) => {
            const $this = $(el)
            const height = $this.find('.timeline__item-right').height()
            const $line = $this.find('.timeline__item-left > span')
            const limit = 60
            if (height > limit) {
              $line.css({
                height: height - limit / 2
              })
            } else if (is($line.attr('style'))) {
              $line.removeAttr('style')
            }
          })
        })
        setHeightToTimeline()
        $window.resize((e) => {
          if (e.currentTarget.innerWidth > 480) {
            setHeightToTimeline()
          }
        })
      }
    }

  })
})(jQuery, jBox, Swiper)
