class ElectricalDevice {
    constructor(name, power, pluggedin) {
        this.name = name;
        this.power = power;
        this.pluggedin = false;
    }
    turnOn() {
        if (!this.pluggedin) {
            console.log(`${this.name} already turn on.`);
            this.pluggedin = true;
        } else {
            console.log(`${this.name} already turn off.`);
        }
    }
    turnOff() {
        if (this.pluggedin) {
            console.log(`${this.name} already turn off.`);
            this.pluggedin = false;
        } else {
            console.log(`${this.name} already turn on.`);
        }
    }
}

class GamingPC extends ElectricalDevice {
    constructor(name, power, gpu, pluggedin) {
        super(name, power);
        this.gpu = 3070;
        this.runnig = false;
    }
    start() {
        if (!this.pluggedin) {
            console.log(`${this.name} is shut down`);
        } else if (this.runnig) {
            console.log(`${this.name} already turn on`);
        } else {
            console.log(`${this.name} have GPU: RTX${this.gpu}`);
        }
        this.runnig = true;
    }
    shutdown() {
        if (!this.runnig) {
            console.log(`${this.name} already shut down`);
        } else {
            console.log(`${this.name} shut down`);
            this.runnig = false;
        }
    }
}

class Printer extends ElectricalDevice {
    constructor(name, power, paperForm, pluggedin) {
        super(name, power);
        this.paperForm = 'A4';
    }
    start() {
        if (!this.pluggedin) {
            console.log(`${this.name} is shut down`);
        } else if (this.runnig) {
            console.log(`${this.name} already turn on`);
        } else {
            console.log(`${this.name} can printing only ${this.paperForm} paper`);
        }
        this.runnig = true;
    }
    shutdown() {
        if (!this.runnig) {
            console.log(`${this.name} already shut down`);
        } else {
            console.log(`${this.name} shut down`);
            this.runnig = false;
        }
    }
}

let computer = new GamingPC('Gaming PC', 350, 3070);
let printer = new Printer('pantum', 25, 'A4');

printer.turnOn();
computer.turnOn();

function calculateTotalPower(...devices) {
    let totalPower = 0;
    for (let device of devices) {
        if (device.pluggedin) {
            totalPower += device.power;
        }
    }
    console.log(`Total power: ${totalPower} W.`);
}

console.log(calculateTotalPower(computer, printer));
console.log(`Printer can print only on ${printer.paperForm} paper`);
console.log(`Gaming PC have RTX${computer.gpu} GPU`);