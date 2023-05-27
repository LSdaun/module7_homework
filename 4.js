function ElectricalDevices(name, power){
    this.name = name,
    this.power = power;
}
const computer = new ElectricalDevices('PC', 350);
const printer = new ElectricalDevices('Printer', 25);

console.log(computer);
console.log(printer);

ElectricalDevices.prototype.turnOn = function() {
    if (!this.pluggedin) {
        console.log(`${this.name} включен(а) в розетку.`);
        this.pluggedin = true;
    } else {
        console.log(`${this.name} уже включен(а) в розетку.`);
    }
}
ElectricalDevices.prototype.turnOff = function() {
    if (this.pluggedin) {
        console.log(`${this.name} выключен(а) из розетки.`);
        this.pluggedin = false;
    } else {
        console.log(`${this.name} уже выключен(а) из розетки.`);
    }
}
function GamingPC(name, power, gpu, pluggedin){
    this.name = gamingPC,
    this.power = 350,
    this.gpu = RTX3070,
    this.pluggedin = true;
}
function GamingPC(name, power, gpu, pluggedin){
    ElectricalDevices.call(this, name, power);
    this.name = gamingPC,
    this.power = 350,
    this.gpu = RTX3070,
    this.pluggedin = false;
}
GamingPC.prototype = new ElectricalDevices();