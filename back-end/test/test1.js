const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')

const expect = chai.expect
chai.use(chaiHttp)

describe('Hello World Test!!', () => {
  describe('GET /', () => {
    it('The expected status code is 200', (done) => {
      chai.request(server)
        .get('/')
        .end((err, response) => {
          if (err) {
            done(err)
          }
          expect(response.statusCode).to.equal(200)
          expect(response.text).to.equal('Hello World!')
          done()
        })
    })
  })
})
