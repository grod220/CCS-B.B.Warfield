class ColorGenerator {
  constructor() {
    this.colorObj =
      typeof window !== 'undefined' && window.sessionStorage
        ? window.sessionStorage
        : {}
  }

  removeOldEvents(eventsArr) {
    const twentyFourHours = 1000 * 60 * 60 * 24
    return eventsArr.filter(
      event => Date.parse(event.date) + twentyFourHours > Date.now()
    )
  }

  hasEventsToShow(events) {
    return Boolean(this.removeOldEvents(events).length)
  }

  getColor(name) {
    const refColors = [
      '#ef5350',
      '#EC407A',
      '#AB47BC',
      '#7E57C2',
      '#5C6BC0',
      '#42A5F5',
      '#29B6F6',
      '#26C6DA',
      '#26A69A',
      '#66BB6A',
      '#9CCC65',
      '#FFCA28',
      '#FFA726',
      '#FF7043',
      '#8D6E63',
      '#78909C',
    ]
    if (this.colorObj[name]) {
      return this.colorObj[name]
    } else {
      const usedColors = Object.values(this.colorObj)
      const leftOverColors = refColors.filter(
        refColor => !usedColors.includes(refColor)
      )

      let randomIndex
      let randomColor
      if (leftOverColors.length) {
        randomIndex = Math.floor(Math.random() * leftOverColors.length)
        randomColor = leftOverColors[randomIndex]
      } else {
        randomIndex = Math.floor(Math.random() * refColors.length)
        randomColor = refColors[randomIndex]
      }
      this.colorObj[name] = randomColor
      return randomColor
    }
  }
}

export default new ColorGenerator()
