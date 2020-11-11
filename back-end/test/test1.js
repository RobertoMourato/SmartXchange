let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

var expect = chai.expect;
chai.use(chaiHttp);

describe("Hello World Test!!", () => {

    describe("GET /", () => {
        it("The expected status code is 200", (done) => {
            chai.request(server)
                .get("/")
                .end((err, response) => {
                    expect(response.statusCode).to.equal(200);
                    expect(response.text).to.equal("Hello World!");
                done();
                })
        })
    });

})
