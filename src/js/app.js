// testing
;(function () {
  let state = 0
  function init() {
    mediaPlayer()
  }
  function mediaPlayer() {
    const media = document.querySelector('.video-showreel video')
    const mediaTrigger = document.querySelector('.video-modal-trigger')
    const mediaWrapper = document.querySelector('.video-showreel')
    let timeout

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
      clearTimeout(timeout)
      mediaWrapper.style.zIndex = 5
      document.body.classList.add('play-showreel')
      mediaWrapper.classList.add('show')
    }
    function hideVideo() {
      timeout = setTimeout(() => {
        mediaWrapper.style.zIndex = 0
      }, 2000)
      document.body.classList.remove('play-showreel')
      mediaWrapper.classList.remove('show')
    }

    function playVideo() {
      media.play()
    }
    function pauseVideo() {
      media.pause()
    }

    function init() {
      mediaTrigger.addEventListener('click', (e) => {
        playVideo()
        e.preventDefault()
      })
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

  document.addEventListener('DOMContentLoaded', function () {
    init()
  })
})()
