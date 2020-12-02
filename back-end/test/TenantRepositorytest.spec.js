/* const tenantRepository = require('../repository/tenantRepository')

jest.mock('../models/tenant', () => () => {
  const SequelizeMock = require('sequelize-mock')
  const dbMock = new SequelizeMock()
  return dbMock.define('Tenant', {
    id: 2,
    email: 'xyz@abc.com',
    mame: 'good',
    username: 'day',
    password: 'pass',
    tenanttype_id: '2',
    createdAt: '2019-01-01 13:30:31',
    updatedAt: '2019-01-01 13:30:31'
  })
})

describe('Test Sequelize Mocking', () => {
  it('Should get value from mock', async () => {
    const user = await tenantRepository.getByEmail('xyz@abc.com')
    expect(user.id).toEqual('2')
  })
})

/*
// src/user/user.repository.test.js
const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const UserModel = require("../models");
const UserRepository = require("../repository/tenantRepository");
describe("UserRepository", function() {
  const stubValue = {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past()
  };
  describe("create", function() {
    it("should add a new user to the db", async function() {
      const stub = sinon.stub(UserModel.Tenant, "create").returns(stubValue);
      const user = await UserRepository.addTenant(stubValue.name, stubValue.email);
      expect(stub.calledOnce).to.be.true;
      expect(user.id).to.equal(stubValue.id);
      expect(user.name).to.equal(stubValue.name);
      expect(user.email).to.equal(stubValue.email);
      expect(user.createdAt).to.equal(stubValue.createdAt);
      expect(user.updatedAt).to.equal(stubValue.updatedAt);
    });
  });
}); */
