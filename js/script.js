document.addEventListener('DOMContentLoaded', () => {
  const roles = [
    'Sinh viên năm cuối PTIT',
    'Full-stack Developer',
    'Giảng viên MindX',
    'Cựu Amser',
  ]

  const textElement = document.querySelector('.typing-text')
  let roleIndex = 0
  let charIndex = 0
  let isDeleting = false
  let typeSpeed = 100

  function typeEffect() {
    const currentRole = roles[roleIndex]

    if (isDeleting) {
      textElement.innerHTML =
        currentRole.substring(0, charIndex - 1) +
        '<span class="cursor">|</span>'
      charIndex--
      typeSpeed = 50
    } else {
      textElement.innerHTML =
        currentRole.substring(0, charIndex + 1) +
        '<span class="cursor">|</span>'
      charIndex++
      typeSpeed = 100
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true
      typeSpeed = 2000
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      roleIndex++
      if (roleIndex === roles.length) {
        roleIndex = 0
      }
      typeSpeed = 500
    }

    setTimeout(typeEffect, typeSpeed)
  }

  typeEffect()

  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')
  const navLinks = document.querySelectorAll('.nav-links li')

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`
      }
    })
  })

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-active')
      burger.classList.remove('toggle')
    })
  })

  let lastScrollTop = 0
  const navbar = document.querySelector('.navbar')

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop) {
      navbar.style.top = '-80px'
    } else {
      navbar.style.top = '0'
      if (scrollTop > 0) {
        navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)'
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)'
      } else {
        navbar.style.boxShadow = 'none'
      }
    }
    lastScrollTop = scrollTop
  })

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth',
        })
      }
    })
  })
})
