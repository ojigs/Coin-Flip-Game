document.querySelector('button').addEventListener('click', headsOrTail)
const p = document.querySelector('p')
const head = document.querySelector('#head')
const tail =document.querySelector('#tail')

async function headsOrTail() {
    const res = await fetch('/api')
    const data = await res.json()
    console.log(data)
    if (data.value === 0) {
        head.style.display = 'block'
        tail.style.display = 'none'
        p.innerText = 'Head'
    } else if (data.value === 1) {
        tail.style.display = 'block'
        head.style.display = 'none'
        p.innerText = 'Tail'
    }
}