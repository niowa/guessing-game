class GuessingGame {
    constructor() {
	}

    setRange(min, max) {
		this.min = min;
		this.max = max;
    }

    guess() {
		this.med = Math.round((this.min + this.max) / 2);
		return this.med;
    }

    lower() {
		this.max = this.med;
    }

    greater() {
		this.min = this.med;
    }
}

module.exports = GuessingGame;
