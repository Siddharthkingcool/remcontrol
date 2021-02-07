let ir_code = 0
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.NEC)
serial.writeValue("x", 0)
let new_value = 0
basic.forever(function () {
    ir_code = makerbit.irButton()
    if (new_value != ir_code) {
        new_value = ir_code
        if (ir_code == 67) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 31)
            basic.pause(500)
            maqueen.motorStop(maqueen.Motors.All)
        } else if (ir_code == 66) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 31)
            basic.pause(500)
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
