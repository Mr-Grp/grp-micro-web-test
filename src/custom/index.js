export class Custom {
  on(name, cb) {
    window.addEventListener(name, (e) => {
      cb(e)
    })
  }

  emit(name, data) {
    const event = new CustomEvent(name, {
      detail: data
    })
    window.dispatchEvent(event)
  }
}

// window.test = new Custom()

// window.test.on('needSend', () => {
//   window.test.emit('sended', 'data...')
// })

// window.test.on('sended', (e) => {
//   console.log(e.detail)
// })

// window.test.emit('needSend')