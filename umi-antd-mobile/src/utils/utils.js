/** 设置 title */
export function changeTitle(title) {
  document.setTitle = t => {
    document.title = t
    const i = document.createElement('iframe')
    i.src = 'https://img.maihaoche.com/ico/favicon.ico'
    i.style.display = 'none'
    i.onload = () => {
      setTimeout(() => {
        i.remove()
      }, 9)
    }
    document.body.appendChild(i)
  }
  setTimeout(() => {
    document.setTitle(title)
  }, 0)
}
