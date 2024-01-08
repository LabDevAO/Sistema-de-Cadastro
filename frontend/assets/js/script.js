document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openBtn')
  const closeBtn = document.getElementById('closeBtn')
  const navbar = document.getElementById('navbar')
  const links = navbar.querySelectorAll('a')

  openBtn.addEventListener('click', () => navbar.classList.add('ativar'))
  closeBtn.addEventListener('click', () => navbar.classList.remove('ativar'))

  // Adiciona um listener de clique para cada link no navbar
  links.forEach(link => {
    link.addEventListener('click', () => navbar.classList.remove('ativar'))
    
  })

})
