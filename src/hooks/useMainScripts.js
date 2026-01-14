import { useEffect } from 'react'

export function useMainScripts() {
  useEffect(() => {
    // Use global jQuery
    const $ = window.$ || window.jQuery

    if (!$) {
      console.warn('jQuery not available')
      return
    }

    /* ================================
       Sticky Header Js
    ================================ */
    const handleScroll = () => {
      if (window.scrollY > 250) {
        $('#header-sticky').addClass('sticky')
      } else {
        $('#header-sticky').removeClass('sticky')
      }

      // Back to top visibility
      if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        $('#gt-back-top').addClass('show')
      } else {
        $('#gt-back-top').removeClass('show')
      }
    }

    $(window).on('scroll', handleScroll)

    /* ================================
       Back To Top Button
    ================================ */
    $(document).on('click', '#gt-back-top', function() {
      $('html, body').animate({ scrollTop: 0 }, 800)
      return false
    })

    /* ================================
       Mouse Cursor Animation
    ================================ */
    if ($('.mouseCursor').length > 0) {
      const e = document.querySelector('.cursor-inner')
      const t = document.querySelector('.cursor-outer')

      if (e && t) {
        window.onmousemove = (s) => {
          t.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`
          e.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`
        }

        $('body').on('mouseenter', 'button, a, .cursor-pointer', function() {
          e.classList.add('cursor-hover')
          t.classList.add('cursor-hover')
        })

        $('body').on('mouseleave', 'button, a, .cursor-pointer', function() {
          e.classList.remove('cursor-hover')
          t.classList.remove('cursor-hover')
        })

        e.style.visibility = 'visible'
        t.style.visibility = 'visible'
      }
    }

    /* ================================
       Sidebar Toggle
    ================================ */
    $('.offcanvas__close, .offcanvas__overlay').on('click', function() {
      $('.offcanvas__info').removeClass('info-open')
      $('.offcanvas__overlay').removeClass('overlay-open')
    })

    $('.sidebar__toggle').on('click', function() {
      $('.offcanvas__info').addClass('info-open')
      $('.offcanvas__overlay').addClass('overlay-open')
    })

    /* ================================
       Search Popup Toggle
    ================================ */
    if ($('.search-toggler').length) {
      $('.search-toggler').on('click', function(e) {
        e.preventDefault()
        $('.search-popup').toggleClass('active')
        $('body').toggleClass('locked')
      })

      $('.search-popup__overlay').on('click', function() {
        $('.search-popup').removeClass('active')
        $('body').removeClass('locked')
      })
    }

    /* ================================
       Preloader
    ================================ */
    $(window).on('load', function() {
      $('.preloader').addClass('loaded')
      setTimeout(() => {
        $('.preloader').fadeOut()
      }, 600)
    })

    /* ================================
       CounterUp Js Start
    ================================ */
    if ($('.gt-count').length && typeof $.fn.counterUp === 'function') {
      $('.gt-count').counterUp({
        delay: 15,
        time: 4000,
      })
    }

    /* ================================
       Scroll-in animations observer
    ================================ */
    const animatedElements = document.querySelectorAll(
      '.scroll-in-left, .scroll-in-right, .gt-cta-image'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('in-view', entry.isIntersecting)
        })
      },
      { threshold: 0.5 }
    )

    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      $(window).off('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])
}
