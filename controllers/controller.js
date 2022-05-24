"use strict";
var car;
function submitCar() {
    var errores = 0;
    var plateInput = document.getElementById("plateInput");
    var brandInput = document.getElementById("brandInput");
    var colorInput = document.getElementById("colorInput");
    //EX1. Validar los campos de matricula, marca y color, antes de hacer el new Car
    var expreg = /^\d{4}-[A-Z]{3}$/;
    var expreg2 = /^[a-zA-Z\s]+$/;
    if (!expreg.test(plateInput.value)) {
        alert("La matrícula NO es correcta, deber contenet 4 números y 3 letras en mayúscula 0000-XXX");
        errores++;
    }
    if (!expreg2.test(brandInput.value)) {
        alert("La marca NO es correcta, debe contener sólo letras");
        errores++;
    }
    if (!expreg2.test(colorInput.value)) {
        alert("El color NO es correcto, debe contener sólo letras");
        errores++;
    }
    else if (errores === 0) {
        car = new Car(plateInput.value, colorInput.value, brandInput.value);
        showVehicle();
        showWheelForm();
    }
}
function showVehicle() {
    var carTitle = document.getElementById("carTitle");
    var plateOutput = document.getElementById("plateOutput");
    var brandOutput = document.getElementById("brandOutput");
    var colorOutput = document.getElementById("colorOutput");
    carTitle.innerText = "Car:";
    plateOutput.innerText = "Plate: " + car.plate;
    brandOutput.innerText = "Brand: " + car.brand;
    colorOutput.innerText = "Color: " + car.color;
}
function submitWheelForm() {
    var errores = 0;
    //EX2. Solo hacer el "new Wheel" si las 4 ruedas son correctas
    //EX3. Una rueda correcta deberá tener un diámetro entre 1 y 2. Crear una función para validarlas
    var diameterWheel = document.getElementById("diameterWheel");
    for (var i = 1; i <= 4; i++) {
        diameterWheel = document.getElementById("diameterWheel" + i);
        if (!Validar(Number(diameterWheel.value))) {
            alert("El diámetro NO es correcto, debe estar comprendido entre 1 y 2.");
            errores++;
        }
    }
    if (errores === 0) {
        for (var i = 1; i <= 4; i++) {
            var brandWheel = document.getElementById("brandWheel" + i);
            diameterWheel = document.getElementById("diameterWheel" + i);
            var wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
            car.addWheel(wheel_generica);
        }
        console.log(car);
        showWheels();
    }
    function Validar(diameterWheel) {
        if (diameterWheel >= 1 && diameterWheel <= 2) {
            return true;
        }
        return false;
    }
}
function showWheels() {
    //EX4. Optimizar la función showWheels
    var wheelTitle = document.getElementById("wheelTitle");
    var wheelOutput = document.getElementById("wheelOutput");
    wheelTitle.innerText = "Wheels:";
    /* wheelOutput1.innerText = "Wheel 1:  " + "Brand: " + car.wheels[0].brand + "  Diameter: " + car.wheels[0].diameter;
    wheelOutput2.innerText = "Wheel 2:  " + "Brand: " + car.wheels[1].brand + "  Diameter: " + car.wheels[1].diameter;
    wheelOutput3.innerText = "Wheel 3:  " + "Brand: " + car.wheels[2].brand + "  Diameter: " + car.wheels[2].diameter;
    wheelOutput4.innerText = "Wheel 4:  " + "Brand: " + car.wheels[3].brand + "  Diameter: " + car.wheels[3].diameter;
*/
    for (var i = 0; i <= 4; i++) {
        wheelOutput.innerHTML += "Wheel " + "  " + [i + 1] + ": " + " Brand: " + car.wheels[i].brand + " Diameter: " + car.wheels[i].diameter + "<br>";
    }
}
function showWheelForm() {
    var carForm = document.getElementById("create-car-form");
    var carWheel = document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";
}
