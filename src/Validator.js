import ArraySchema from "./ArraySchema.js";
import NumberSchema from "./NumberSchema.js";
import ObjectSchema from "./ObjectSchema.js";

export default class Validator {
	array() {
		return new ArraySchema();
	}

	number() {
		return new NumberSchema();
	}

	object() {
		return new ObjectSchema();
	}
}