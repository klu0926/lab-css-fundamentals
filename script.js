document.addEventListener('DOMContentLoaded', () => {
  const musicBtn = document.querySelector('.music-button')
  const musicBtnTrigger = document.querySelector('#music-button-trigger')
  const MUSIC = new Audio('./audios/intro.mp3')
  MUSIC.loop = true
  let isOn = false


  musicBtn.addEventListener('click', () => {

    if (isOn) {
      MUSIC.pause()
      MUSIC.currentTime = 0
      isOn = false
      musicBtn.classList.remove('on')
      musicBtnTrigger.innerText = 'OFF'

    } else {
      MUSIC.play()
      isOn = true
      musicBtn.classList.add('on')
      musicBtnTrigger.innerText = 'ON'
    }
  })
})