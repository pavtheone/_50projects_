const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Coding! <3<3<3'
let idx = 1
let speed = 300 / speedEl.nodeValue

writeText ()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)