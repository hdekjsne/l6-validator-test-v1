export default class ArraySchema {
	constructor() {
		this.intsOnly = false;
		this.customValidator = 'none';
	}

	allIntegers() {
		this.intsOnly = true;
		return this;
	}

	custom(func) {
		this.customValidator = func;
		return this;
	}

	isValid(value) {
		let isValid = true;
		if (!Array.isArray(value)) isValid = false;
		if (this.intsOnly && isValid) isValid = !value
			.map((item) => Number.isInteger(item))
			.includes(false);
		if (this.customValidator !== 'none' && isValid) isValid = !value
			.map((item) => this.customValidator(item))
			.includes(false);
		return isValid;
	}
}