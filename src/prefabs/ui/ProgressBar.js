export default class ProgressBar extends Phaser.GameObjects.Container {
    constructor(scene, x, y, width, height, { backColor, barColor, borderSize = 0, borderColor, minValue = 0, maxValue = 1, value = 1 }) {
        super(scene, x, y)

        scene.add.existing(this)

        this.height = height
        this.width = width

        this.minValue = minValue
        this.maxValue = maxValue
        this.value = value

        this.background = scene.add.rectangle(0, 0, width + borderSize, height + borderSize, backColor)

        this.background.setStrokeStyle(borderSize, borderColor ?? backColor)

        this.background.setOrigin((borderSize / 2) / this.background.width, (borderSize / 2) / this.background.height)

        this.add(this.background)

        this.bar = scene.add.rectangle(0, 0, width, height, barColor)
        this.setValue(value)

        this.bar.setOrigin(0)

        this.add(this.bar)

    }

    setHeight(v) {
        this.height = v
        this.background.height = v
        this.bar.height = v
    }

    setWidth(v) {
        this.width = v
        this.background.width = v
        this.bar.width = v
    }

    addValue(value) {
        this.value += value
        this.setValue(this.value)
    }

    setValue(value) {
        this.value = value
        
        this.bar.scaleX = Phaser.Math.Percent(this.value, this.minValue, this.maxValue)

        if (this.value >= this.maxValue) {
            this.value = this.maxValue
            this.emit('complete')
            return true
        }
        
    }
}