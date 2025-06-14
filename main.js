document.addEventListener('DOMContentLoaded', () => {
  const textEl = document.getElementById('animated-text')
  const text = textEl.textContent.trim()
  textEl.textContent = '' // 기존 텍스트 지우기
  ;[...text].forEach((char, index) => {
    const span = document.createElement('span')
    span.textContent = char
    textEl.appendChild(span)
    setTimeout(() => {
      span.classList.add('visible')
    }, index * 100) // 글자마다 0.1초씩 딜레이
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box1')
  boxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add('show')
    }, index * 300) // 0.3초 간격으로 등장
  })
})
