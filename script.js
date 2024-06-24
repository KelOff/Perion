let currentSlide = 0
const slides = document.querySelectorAll('.slide')
const totalSlides = slides.length
let autoPlay = true
let autoPlayTimeout

document.querySelector('.next').addEventListener('click', () => {
  autoPlay = false
  nextSlide()
  restartAutoPlay()
})

document.querySelector('.prev').addEventListener('click', () => {
  autoPlay = false
  prevSlide()
  restartAutoPlay()
})

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % totalSlides
  updateSlidePosition()
  updateSlideIndicator()
  updateContent()
}

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
  updateSlidePosition()
  updateSlideIndicator()
  updateContent()
}

const updateSlidePosition = () => {
  const slidesContainer = document.querySelector('.slides')
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`
}

const updateSlideIndicator = () => {
  document.querySelector('.current-slide').textContent = `${currentSlide + 1}/${totalSlides}`
}

const updateContent = () => {
  const slideContent = [
    {
      text: '"The first time I used the Samsung Bespoke  Jet tm, I cried. I`m not being sensational; I really did. Of course, this vacuum worked great. But that`s not all"',
      link: 'https://example.com',
    },
    {
      text: '"If you`re an over-cleaner, like myself, you`ll nerd out on all of the functions. If you avoid this chore at all costs, you`ll appreciate how simple Samsung makes it"',
      link: 'https://example.com',
    },
    {
      text: '"Both the floor and pet hair attachmentss are cleverly designed to eliminate the dreaded hair wrap. (In other words, uou`ll never have to tackle hair tangles with a pair of scissors again.)"',
      link: 'https://example.com',
    },
    {
      text: '"When I learned the Samsung Bespoke Vac cleaned itself with amazing technology, that`s when I cried. No more scraping spider legs and hair out of the crecices with my hands. Its suction power is so strong, the canister is left perfectly clean after use. It`s like a vacuum for your vacuum"',
      link: 'https://example.com',
    },
    {
      text: '"Because it`s so nice-looking, it can live right in the kitchem. no more hauling a vacuum up and down the basement stairs on the daily"',
      link: 'https://example.com',
    },
  ]

  const p = document.getElementById('slide-text')
  p.innerHTML = `${slideContent[currentSlide].text} <a href="${slideContent[currentSlide].link}" class='read_more' target="_blank">Read more...</a>`

  const logo = document.querySelector('.logo')
  const textHeaders = document.querySelectorAll('.text_header')
  console.log(document.querySelectorAll('slide-text'))

  if (currentSlide === 3) {
    logo.classList.add('animate-logo-up-slide3')
    textHeaders.forEach(header => header.classList.add('animate-text-bot-slide3'))
  } else {
    logo.classList.remove('animate-logo-up-slide3')
    textHeaders.forEach(header => header.classList.remove('animate-text-bot-slide3'))
  }
}
document.addEventListener('DOMContentLoaded', updateContent)

const restartAutoPlay = () => {
  clearTimeout(autoPlayTimeout)
  autoPlayTimeout = setTimeout(() => {
    autoPlay = true
  }, 3000)
}

setInterval(() => {
  if (autoPlay) {
    nextSlide()
  }
}, 10500)

slides.forEach(slide => {
  slide.addEventListener('mouseover', () => {
    autoPlay = false
    clearTimeout(autoPlayTimeout)
  })
  slide.addEventListener('mouseleave', () => {
    restartAutoPlay()
  })
})
if (currentSlide === 3) {
}

document.addEventListener('DOMContentLoaded', function () {
  var logo = document.querySelector('.logo')
  var saveMoney = document.querySelector('.saveMoney')
  var text_header = document.querySelectorAll('.text_header')
  var leftSide = document.querySelector('.left-side')
  var carousel = document.querySelector('.carousel')

  setTimeout(function () {
    logo.classList.add('animate-logo-left')
    saveMoney.classList.add('animate-logo-left')
  }, 1000)

  setTimeout(function () {
    logo.classList.add('animate-logo-up')
  }, 2000)

  setTimeout(function () {
    text_header.forEach((el, id) => {
      setTimeout(function () {
        el.classList.add('animate-text-left')
      }, 2600 + id * 100)
    })
  })
  setTimeout(function () {
    text_header.forEach(el => {
      el.classList.add('animate-text-bot')
    })
  }, 3600)

  setTimeout(function () {
    leftSide.classList.add('animate-side')
    carousel.classList.add('animate-carousel_side')
    leftSide.addEventListener('transitionend', function (event) {
      if (event.propertyName === 'left') {
        leftSide.classList.add('visible')
      }
    })
  }, 4000)
})
