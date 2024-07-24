const calc = require("./2-calcul_chai.js");
const expect = require("chai").expect;

describe("Test with type equal to SUM", function () {
	const type = "SUM";

	it("should return 6", function () {
		expect(calc(type, 1.4, 4.5)).to.equal(6);
	});

	it("should return 5", function () {
		expect(calc(type, 1, 4)).to.equal(5);
	});

	it("should return 5", function () {
		expect(calc(type, 1.2, 4)).to.equal(5);
	});

	it("should return 5", function () {
		expect(calc(type, 1.2, 4.3)).to.equal(5);
	});

	it("should return 6", function () {
		expect(calc(type, 1.5, 4.3)).to.equal(6);
	});

	it("should return 7", function () {
		expect(calc(type, 1.5, 4.8)).to.equal(7);
	});

	it("should return -2", function () {
		expect(calc(type, 3.2, -4.8)).to.equal(-2);
	});

	it("should return 0", function () {
		expect(calc(type, 0.2, -0.3)).to.equal(0);
	});
});

describe("Test with type equal to SUBTRACT", function () {
	const type = "SUBTRACT";

	it("should return -4", function () {
		expect(calc(type, 1.4, 4.5)).to.equal(-4);
	});

	it("should return -3", function () {
		expect(calc(type, 1, 4)).to.equal(-3);
	});

	it("should return -3", function () {
		expect(calc(type, 1.2, 4)).to.equal(-3);
	});

	it("should return -3", function () {
		expect(calc(type, 1.2, 4.3)).to.equal(-3);
	});

	it("should return -2", function () {
		expect(calc(type, 1.5, 4.3)).to.equal(-2);
	});

	it("should return -3", function () {
		expect(calc(type, 1.5, 4.8)).to.equal(-3);
	});

	it("should return 8", function () {
		expect(calc(type, 3.2, -4.8)).to.equal(8);
	});

	it("should return 0", function () {
		expect(calc(type, 0.2, -0.3)).to.equal(0);
	});
});

describe("Test with type equal to DIVIDE", function () {
	const type = "DIVIDE";

	it("should return 0.2", function () {
		expect(calc(type, 1.4, 4.5)).to.equal(0.2);
	});

	it("should return 2", function () {
		expect(calc(type, 8, 4)).to.equal(2);
	});

	it("should return 2", function () {
		expect(calc(type, 8.2, 4)).to.equal(2);
	});

	it("should return 2", function () {
		expect(calc(type, 8.2, 4.3)).to.equal(2);
	});

	it("should return 1", function () {
		expect(calc(type, 3.5, 4.3)).to.equal(1);
	});

	it("should return 0.4", function () {
		expect(calc(type, 1.5, 4.8)).to.equal(0.4);
	});

	it("should return -0.6", function () {
		expect(calc(type, 3.2, -4.8)).to.equal(-0.6);
	});

	it("should return 0", function () {
		expect(calc(type, 0.2, -1.3)).to.equal(0);
	});

	it("should return Error", function () {
		expect(calc(type, 0.2, -0.3))
			.to.be.a("string")
			.that.equal("Error");
	});

	it("should return Error", function () {
		expect(calc(type, 1.4, 0))
			.to.be.a("string")
			.that.equal("Error");
	});
});
