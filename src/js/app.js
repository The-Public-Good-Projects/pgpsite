;(function () {
  function init() {
    document.addEventListener('DOMContentLoaded', function () {
      let el = document.querySelector('.modal')
      mediaPlayer()
      console.log(el)
      // Handler when the DOM is fully loaded
    })
  }

  function mediaPlayer() {
    const media = document.querySelector('video')
    const mediaTrigger = document.querySelector('.video-modal-trigger')
    const mediaWrapper = document.querySelector('.video-showreel')

    function appendElement() {
      let elem = document.querySelector('[data-showreel]')
      elem.parentElement.removeChild(elem)
      document.body.append(elem)
    }

    function inViewport(element) {
      let bb = element.getBoundingClientRect()
      return !(bb.top > innerHeight || bb.bottom < 0)
    }

    function showVideo() {
      document.body.classList.add('play-showreel')
      mediaWrapper.classList.add('show')
      mediaWrapper.style.zIndex = 5
    }
    function hideVideo() {
      document.body.classList.remove('play-showreel')
      mediaWrapper.classList.remove('show')
      setTimeout(() => {
        mediaWrapper.style.zIndex = 0
      }, 2000)
    }

    function playVideo() {
      media.play()
    }
    function pauseVideo() {
      media.pause()
    }

    function playPauseMedia(e) {
      e.preventDefault()
      console.log(media.paused)
      if (media.paused) {
        playVideo()
      } else {
        pauseVideo()
      }
    }
    function init() {
      mediaTrigger.addEventListener('click', playPauseMedia)
      if (media) {
        document.addEventListener('scroll', () => {
          if (!inViewport(media)) {
            if (media.readyState >= 2 && !media.paused) {
              pauseVideo()
            }
          }
        })
      }

      media.addEventListener('pause', () => {
        hideVideo()
      })

      media.addEventListener('play', () => {
        showVideo()
      })

      appendElement()
    }
    init()
  }

  init()
})()
