const assert = require("assert");
const request = require("request");

const PORT = 7865;
const BASE = `http://localhost:${PORT}`;

describe("Test the index page", () => {
	for (let i = 0; i < 7; i++) {
		it("should be listening on port 7865", (done) => {
			request(`http://localhost:${PORT}`, (err, res) => {
				if (err) {
					throw err;
				} else {
					done();
				}
			});
		});

		it("should return status code 200", (done) => {
			request(`http://localhost:${PORT}`, (err, res) => {
				if (err) {
					throw err;
				} else {
					assert.equal(res.statusCode, 200);
					done();
				}
			});
		});

		it("should return correct message", (done) => {
			request(`http://localhost:${PORT}`, (err, res, body) => {
				if (err) {
					throw err;
				} else {
					assert.equal(body, "Welcome to the payment system");
					done();
				}
			});
		});
	}

	it("should be listening on port 7865", (done) => {
		request(`http://localhost:${PORT}`, (err, res) => {
			if (err) {
				throw err;
			} else {
				done();
			}
		});
	});

	it("should return status code 200", (done) => {
		request(`http://localhost:${PORT}`, (err, res) => {
			if (err) {
				throw err;
			} else {
				assert.equal(res.statusCode, 200);
				done();
			}
		});
	});
});

describe("Test the payment page", () => {
	for (let i = 0; i < 11; i++) {
		it("should return the correct result", (done) => {
			request(`http://localhost:${PORT}/cart/69`, (err, res, body) => {
				if (err) {
					throw err;
				} else {
					assert.equal(body, "Payment methods for cart 69");
					done();
				}
			});
		});

		it("should only allow numerical ids", (done) => {
			request(
				`http://localhost:${PORT}/cart/fuck_my_life`,
				(err, res, body) => {
					if (err) {
						throw err;
					} else {
						assert.equal(res.statusCode, 404);
						assert(body.indexOf("Cannot GET /cart/fuck_my_life") !== -1);
						done();
					}
				},
			);
		});
	}

	it("should return the correct result", (done) => {
		request(`http://localhost:${PORT}/cart/89`, (err, res, body) => {
			if (err) {
				throw err;
			} else {
				assert.equal(body, "Payment methods for cart 89");
				done();
			}
		});
	});
});

describe("Test /login endpoint", () => {
	const req = {
		url: BASE + "/login",
		json: true,
		body: {
			userName: "A7a",
		},
	};

	it("should be exist", (done) => {
		request.post(req, (err, res) => {
			if (err) {
				throw err;
			} else {
				assert.equal(res.statusCode, 200);
				done();
			}
		});
	});

	it("should return the expected message", (done) => {
		request.post(req, (err, res) => {
			if (err) {
				throw err;
			} else {
				assert.equal(res.statusCode, 200);
				assert.equal(res.body, "Welcome A7a");
				done();
			}
		});
	});
});

describe("Test /available_payments endpoint", () => {
	it("should be exist", (done) => {
		request(BASE + "/available_payments", (err, res) => {
			if (err) {
				throw err;
			} else {
				assert.equal(res.statusCode, 200);
				done();
			}
		});
	});

	it("should return the correct response object", (done) => {
		const resObj = {
			payment_methods: {
				credit_cards: true,
				paypal: false,
			},
		};

		request(BASE + "/available_payments", (err, res, body) => {
			if (err) {
				throw err;
			} else {
				assert.equal(res.statusCode, 200);
				assert.deepEqual(JSON.parse(body), resObj);
				done();
			}
		});
	});
});
