const openHeroVideo = document.querySelector('.homepage-hero__video-play-link')
const modal = document.querySelector('.homepage-hero__video-modal')
const closeHeroVideo = modal.querySelector('.homepage-hero__video-close-link')
const heroVideo = modal.querySelector('#homepageHeroVideo')
const heroVideoSrc = heroVideo.src

openHeroVideo.addEventListener('click', () => {
  heroVideo.src = heroVideoSrc
  modal.showModal()
})

closeHeroVideo.addEventListener('click', () => {
  modal.close()
  heroVideo.src = ''
})