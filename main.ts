let F = 0
basic.forever(function () {
    F = input.temperature() * (1.8 + 32)
    if (F >= 104 && input.lightLevel() >= 130) {
        basic.showNumber(F)
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.Heart)
    } else if (F < 104 && (F >= 86 || input.lightLevel() < 130 && input.lightLevel() > 80)) {
        basic.showNumber(F)
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Happy)
    }
})
