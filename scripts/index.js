const lines = document.getElementById('lines')
const slide = document.getElementById('slide')
const cross = document.getElementById('cross')
cross.classList.add('hide')
lines.classList.add('unhide')

lines.addEventListener('click', () => {
    slide.style.transform = 'translateX(0)'
    cross.classList.remove('hide')
    lines.classList.add('hide')
})
cross.addEventListener('click', () => {
    slide.style.transform = 'translateX(100%)'
    lines.classList.remove('hide')
    cross.classList.add('hide')
})


