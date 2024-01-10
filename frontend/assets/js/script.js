document.addEventListener('DOMContentLoaded', function () {
  const underlineLinks = document.querySelectorAll('.underline')

  underlineLinks.forEach(link => {
    link.addEventListener('click', function (event) {

      // Remove a div 'active' existente, se houver
      const existingActiveDiv = document.querySelector(
        '.underline-container .current'
      )
      if (existingActiveDiv) {
        existingActiveDiv.remove()
      }

      // Cria e adiciona uma div com a classe 'active' dentro da li
      const activeDiv = document.createElement('div')
      activeDiv.classList.add('current')
      link.parentNode.appendChild(activeDiv)

      // Remove a classe 'current-url' de outros links
      const otherLinks = document.querySelectorAll('.underline.current-url')
      otherLinks.forEach(otherLink => {
        otherLink.classList.remove('current-url')
      })

      link.classList.add('current-url')
    })
  })
})
