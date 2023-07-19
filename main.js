let btn = document.querySelector('#btn')
let inp = document.querySelector('#inp')
let boxs = document.querySelectorAll('.box')
let drag = null

const addItem = (e) => {
    if (inp.value.trim() !== '') {
        boxs[0].innerHTML += `
        <p class="item" draggable="true" >${inp.value}</p>
        `
        inp.value = ''
    }
    dragItem()
}

const dragItem = () => {
    let items = document.querySelectorAll('.item')
    items.forEach((item) => {
        item.addEventListener('dragstart', (e) => {
            drag = item
            item.style.opacity = '0.5'
        })

        item.addEventListener('dragend', (e) => {
            drag = null
            item.style.opacity = '1'
        })

        boxs.forEach((box) => {
            box.addEventListener('dragover', (e) => {
                e.preventDefault()
                box.style.border = '4px solid gray'
                box.style.color = 'gray'
            })
            box.addEventListener('dragleave', (e) => {
                box.style.border = '4px solid transparent'
                box.style.color = 'black'
            })

            box.addEventListener('drop', () => {
                box.append(drag)
                box.style.border = '4px solid transparent'
                box.style.color = 'black'
            })
        })
    })
}

inp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addItem(e)
    }
})

btn.addEventListener('click', addItem)
