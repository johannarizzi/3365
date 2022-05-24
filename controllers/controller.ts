let car: Car;


function submitCar() {
    let errores = 0;
    let plateInput = <HTMLInputElement>document.getElementById("plateInput");
    let brandInput = <HTMLInputElement>document.getElementById("brandInput");
    let colorInput = <HTMLInputElement>document.getElementById("colorInput");

    //EX1. Validar los campos de matricula, marca y color, antes de hacer el new Car
    var expreg = /^\d{4}-[A-Z]{3}$/;
    let expreg2 = /^[a-zA-Z\s]+$/;
     
    if (!expreg.test(plateInput.value)) {
        alert("La matrícula NO es correcta, deber contenet 4 números y 3 letras en mayúscula 0000-XXX");
        errores ++;
    }
    if (!expreg2.test(brandInput.value)) {
        alert("La marca NO es correcta, debe contener sólo letras");
        errores ++;
    }
    if (!expreg2.test(colorInput.value)) {
        alert("El color NO es correcto, debe contener sólo letras");
        errores ++;
    }
    else if (errores === 0) {
    car = new Car(plateInput.value, colorInput.value, brandInput.value);
    showVehicle();
    showWheelForm();
    }
}

function showVehicle() {
    let carTitle = <HTMLInputElement>document.getElementById("carTitle");
    let plateOutput = <HTMLInputElement>document.getElementById("plateOutput");
    let brandOutput = <HTMLInputElement>document.getElementById("brandOutput");
    let colorOutput = <HTMLInputElement>document.getElementById("colorOutput");

    carTitle.innerText = "Car:";
    plateOutput.innerText = "Plate: " + car.plate;
    brandOutput.innerText = "Brand: " + car.brand;
    colorOutput.innerText = "Color: " + car.color;

}

function submitWheelForm() {
    let errores = 0;
	//EX2. Solo hacer el "new Wheel" si las 4 ruedas son correctas
	//EX3. Una rueda correcta deberá tener un diámetro entre 1 y 2. Crear una función para validarlas
   
		let diameterWheel = <HTMLInputElement>document.getElementById("diameterWheel");
        for (let i = 1; i <= 4; i++) {
            diameterWheel = <HTMLInputElement>document.getElementById("diameterWheel" + i);

        if(!Validar(Number(diameterWheel.value))){
            alert ("El diámetro NO es correcto, debe estar comprendido entre 1 y 2.")
            errores++;
        }
    }
    if (errores === 0) {
        for (let i = 1; i <= 4; i++) {

          let brandWheel = <HTMLInputElement>document.getElementById("brandWheel" + i);
          diameterWheel = <HTMLInputElement>document.getElementById("diameterWheel" + i);
       
            let wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
            car.addWheel(wheel_generica);
           
        }
        console.log(car)
        showWheels();
    
  }
    function Validar (diameterWheel:number) {
        if(diameterWheel >= 1 && diameterWheel <= 2){
        return true;
    }
    return false;
    }
}


function showWheels() {
	//EX4. Optimizar la función showWheels
    
    let wheelTitle = <HTMLInputElement>document.getElementById("wheelTitle");
    let wheelOutput: any = <HTMLInputElement>document.getElementById("wheelOutput");
    wheelTitle.innerText = "Wheels:";

    /* wheelOutput1.innerText = "Wheel 1:  " + "Brand: " + car.wheels[0].brand + "  Diameter: " + car.wheels[0].diameter;
    wheelOutput2.innerText = "Wheel 2:  " + "Brand: " + car.wheels[1].brand + "  Diameter: " + car.wheels[1].diameter;
    wheelOutput3.innerText = "Wheel 3:  " + "Brand: " + car.wheels[2].brand + "  Diameter: " + car.wheels[2].diameter;
    wheelOutput4.innerText = "Wheel 4:  " + "Brand: " + car.wheels[3].brand + "  Diameter: " + car.wheels[3].diameter;
*/
    for(let i = 0; i <= 4 ; i++) {
        wheelOutput.innerHTML +=  "Wheel "+ "  " + [i+1] + ": " + " Brand: " + car.wheels[i].brand + " Diameter: " + car.wheels[i].diameter + "<br>" ;
        }
}

function showWheelForm() {
    let carForm = <HTMLInputElement>document.getElementById("create-car-form");
    let carWheel = <HTMLInputElement>document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";

}