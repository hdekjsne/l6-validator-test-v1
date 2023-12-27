export default class ArraySchema {
	constructor() {
		this.intsOnly = false;
	}

	allIntegers() {
		this.intsOnly = true;
		return this;
	}

	isValid(value) {
		if (!Array.isArray(value)) return false;
		if (this.intsOnly) {
			return	!value
				.map((item) => typeof item === 'number' && !item.toString().includes('.'))
				.includes(false);
		}
		return true;
	}
}