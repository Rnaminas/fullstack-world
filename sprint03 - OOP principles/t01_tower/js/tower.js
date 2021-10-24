class Building {
	constructor(floors, material, address) {
		this.floors = floors;
		this.material = material;
		this.address = address;
	}

	toString() {
		return [
			`Floors: ${this.floors}`,
			`Material: ${this.material}`,
			`Address: ${this.address}`,
		].join('\n');
	}
}

class Tower extends Building {
	constructor(floors, material, address) {
		super(floors, material, address);
		this.hasElevator;
		this.arcCapacity;
		this.height;
		console.log(this.floors);
	}

	toString() {
		let result = super.toString(this);
		result += '\n' + [`Elevator: ${this.hasElevator === true ? '+':'-'}`,
			`Arc reactor capacity: ${this.arcCapacity}`,
			`Height: ${this.height}`,
			`Arc reactor capacity: ${this.getFloorHeight()}`
		].join('\n');
		return result;
	}

	getFloorHeight() {
			return this.height / this.floors;

	}
}

/*
  Task name: Tower
*/

const starkTower = new Tower(93, 'Different', 'Manhattan, NY');
starkTower.hasElevator = true;
starkTower.arcCapacity = 70;
starkTower.height = 1130;
console.log(starkTower.toString());
/*
Floors: 93
Material: Different
Address: Manhattan, NY
Elevator: +
Arc reactor capacity: 70
Height: 1130
Floor height: 12.150537634408602
*/
