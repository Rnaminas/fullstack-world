class HardWorker {
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 100) {
            alert("Возраст неправильный.");
            return this._age;
        }else if (value < 1) {
            return this._age;
        }
        this._age = value;
    }

    get salary() {
        return this._salary;
    }
    set salary(value) {
        if (value < 100) {
            alert("ЗП неправильная.");
            return this._salary;
        }else if (value > 10000) {
            return this._salary;
        }
        this._salary = value;
    }

    toObject() {
        return this;
    }
}

worker = new HardWorker;

worker.name = 'Bruce';
console.log(worker.name);
// Bruce
worker.age = 50;
worker.salary = 1500;
console.log(worker.toObject());
// Object { name: "Bruce", age: 50, salary: 1500 }

worker.name = 'Linda';
worker.age = 140;
console.log(worker.toObject());
// Object { name: "Linda", age: 50, salary: 1500 }

worker.salary = 1000000;
worker.age = 140;
console.log(worker.toObject());