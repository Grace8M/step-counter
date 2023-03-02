input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    basic.clearScreen()
    STEP += -10
})
input.onGesture(Gesture.Shake, function () {
    STEP += 1
    led.stopAnimation()
})
let STEP = 0
basic.forever(function () {
    basic.showNumber(STEP)
})
