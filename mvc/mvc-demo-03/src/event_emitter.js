export const eventEmitter = {
  queue: {},
  on(name, fn) {
    this.queue[name] = this.queue[name] || []
    this.queue[name].push(fn)
  },
  // off: ... 这节课用不到 off 可以不写
  emit(name, ...args) {
    this.queue[name]?.forEach(fn => {
      fn(...args)
    })
  }
}
