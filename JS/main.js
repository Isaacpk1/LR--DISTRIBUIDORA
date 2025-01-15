const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else  {
            entry.target.classList.remove('show')
        }
    })
})

const items = document.querySelectorAll('.hiddenLeft,.hiddenRight')
items.forEach((item) => {
    myObserver.observe(item)
})