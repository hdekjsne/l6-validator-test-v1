export default class ObjectSchema {
	constructor() {
		this.customV = {};
	}

	shape(value) {
		this.customV = value;
		return this;
	}

	isValid(value) {
		
		function validateDeep(obj, validator) {
			const validations = [];
			for (const key of Object.keys(obj)) {
				if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
					validations.push(validateDeep(obj[key], validator[key]));
				} else {
					validations.push(validator[key].isValid(obj[key]));
				}
			}
			return !validations.includes(false);
		}

		return validateDeep(value, this.customV);
	}
}