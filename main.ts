function seguelinha_bool (booleano: boolean) {
    if (hackbit.detectline(DigitalPin.P4, true) && hackbit.detectline(DigitalPin.P10, true)) {
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        45,
        hackbitmotors.Motors.M1B,
        45
        )
    } else if (hackbit.detectline(DigitalPin.P4, false) && hackbit.detectline(DigitalPin.P10, false)) {
        basic.pause(100)
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        50,
        hackbitmotors.Motors.M1B,
        50
        )
    } else if (hackbit.detectline(DigitalPin.P4, false) && hackbit.detectline(DigitalPin.P10, true)) {
        basic.pause(100)
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        -100,
        hackbitmotors.Motors.M1B,
        50
        )
    } else if (hackbit.detectline(DigitalPin.P4, true) && hackbit.detectline(DigitalPin.P10, false)) {
        basic.pause(100)
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        50,
        hackbitmotors.Motors.M1B,
        -100
        )
    }
}
function Virar_a_Direita () {
    hackbitmotors.MotorRun(hackbitmotors.Motors.M1A, 0)
    hackbitmotors.MotorRunDelay(hackbitmotors.Motors.M1B, 60, 2)
    return 0
}
function Virar_a_Esquerda () {
    hackbitmotors.MotorRun(hackbitmotors.Motors.M1B, 0)
    hackbitmotors.MotorRunDelay(hackbitmotors.Motors.M1A, 60, 2)
    return 0
}
let distancia2 = 0
led.enable(false)
basic.forever(function () {
    distancia2 = hackbit.us_sonar(
    DigitalPin.P13,
    DigitalPin.P14,
    hackbit.PingUnit.cm
    )
    seguelinha_bool(true)
    if (distancia2 < 6) {
        seguelinha_bool(false)
        hackbitmotors.MotorStopAll()
        basic.pause(100)
    }
})
