process.env.NODE_ENV = 'test'

const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
const proxyquire = require('proxyquire')

const { makeMockModels } = require('sequelize-test-helpers')

describe('../repository/userRepository', () => {
  const mockModels = makeMockModels({ User: { findOne: sinon.stub(), findByPk: sinon.stub(), build: sinon.stub(), create: sinon.stub() }, UserType: { findOne: sinon.stub() }, Invite: { findOne: sinon.stub() } }, 'models', 'js')

  const repository = proxyquire('../repository/userRepository', {
    '../models': mockModels
  })

  const requestData = {
    userType: 'Entrepeneur',
    managerId: 2,
    tenantId: 2,
    name: 'Testy',
    username: 'McTestface',
    email: 'testy.mctestface.test.tes',
    password: 'ppopo',
    inviteToken: '123434'
  }

  const requestDataManager = {
    userType: 'Manager',
    managerId: null,
    tenantId: 2,
    name: 'Testy',
    username: 'McTestface',
    email: 'testy.mctestface.test.tes',
    password: 'ppopo',
    inviteToken: '18726'
  }
  const createArgs = {
    email: 'testy.mctestface.test.tes',
    managerId: 2,
    name: 'Testy',
    password: 'ppopo',
    tenantId: 2,
    userTypeId: 1,
    username: 'McTestface'
  }
  
  const createArgsManager = {
    email: 'testy.mctestface.test.tes',
    managerId: null,
    name: 'Testy',
    password: 'ppopo',
    tenantId: 2,
    userTypeId: 3,
    username: 'McTestface'
  }
  const createdUser = {
    id: 1,
    managerId: 2,
    tenantId: 2,
    userTypeId: 1,
    name: 'Testy',
    username: 'McTestface',
    email: 'testy.mctestface.test.tes',
    password: 'ppopo'
  }
  const manager = {
    dataValues: {
      id: 2,
      managerId: null,
      tenantId: 2,
      userTypeId: 3,
      name: 'Testy',
      username: 'McTestface',
      email: 'testy.mctestface.test.tes',
      password: 'ppopo'
    }
  }
  const UserTypes = [
    {
      dataValues: {
        id: 1,
        userType: 'Entrepeneur',
        isManager: false
      }
    },
    {
      dataValues: {
        id: 3,
        userType: 'Manager',
        isManager: true
      }
    }
  ]
  const invite = [{
    dataValues: {
      id: '1',
      token: '123434',
      invitedBy: 2,
      isManager: 'false',
      competitionId: '1',
      isValid: 'true',
      email: 'mamaa@gmail.com',
      createdAt: '',
      updatedAt: '',
    }
  }, {
    dataValues: {
      id: '2',
      token: '12333',
      invitedBy: null,
      isManager: 'true',
      competitionId: '1',
      isValid: 'true',
      email: 'mamaa@gmail.com',
      createdAt: '',
      updatedAt: '',
    }
  }
  ]

  let result, req, res
  describe('AddUser - Entrepeneur', () => {
    before(async () => {
      mockModels.User.findOne.resolves(undefined)
      mockModels.User.findByPk.resolves(manager)
      mockModels.UserType.findOne.resolves(UserTypes[0])
      mockModels.User.create.resolves({ dataValues: createdUser })
      mockModels.User.build.resolves(createdUser)
      mockModels.Invite.findOne.resolves(invite[0])
      req = { body: requestData }
      result = await repository.addUser(req, res)
    })

    after(sinon.resetHistory)

    it('called UserType.findOne, find userType', () => {
      console.log('reTT',requestData.userType)
      chai.expect(mockModels.UserType.findOne).to.have.been.calledWith(sinon.match({ where: { userType: requestData.userType } }))
    })

    it('called User.findByPk, find manager', () => {
      chai.expect(mockModels.User.findByPk).to.have.been.calledWith(requestData.managerId)
    })

    it('called User.create, create User', () => {
       console.log(createArgs);
      chai.expect(mockModels.User.create).to.have.been
        .calledWith({
          name: createArgs.name,
          username: createArgs.username,
          email: createArgs.email,
          password: createArgs.password,
          tenantId: createArgs.tenantId,
          userTypeId: createArgs.userTypeId,
          managerId:createArgs.managerId
        })
    })

    it('Created User', () => {
      chai.expect(result).to.be.equals(createdUser)

      // chai.expect(res.status).to.be.equals(200);
      // chai.expect(res.json).to.be.equals(createdUser);
    })
  })

  describe('AddUser - Manager', () => {
    before(async () => {
      mockModels.UserType.findOne.resolves(UserTypes[1])
      mockModels.User.create.resolves({ dataValues: manager })
      mockModels.User.build.resolves(manager),
      mockModels.Invite.findOne.resolves(invite[1])
      req = { body: {} }
      req.body = requestDataManager
      result = await repository.addUser(req, res)
    })

    after(sinon.resetHistory)

  /*  it('called UserType.findOne, find userType', () => {
      chai.expect(mockModels.UserType.findOne).to.have.been.calledWith(sinon.match({ where: { userType: requestDataManager.userType } }))
    })*/

    it('called User.findByPk, find manager', () => {
      chai.expect(mockModels.User.findByPk).to.have.been.calledWith(null)
    })

    it('called User.create, create User', () => {
      // console.log(createArgs);
      chai.expect(mockModels.User.create).to.have.been
        .calledWith({
          name: createArgsManager.name,
          username: createArgsManager.username,
          email: createArgsManager.email,
          password: createArgsManager.password,
          tenantId: createArgsManager.tenantId,
          userTypeId: createArgsManager.userTypeId,
          managerId: null
        })
    })

    it('Created User', () => {
      chai.expect(result).to.be.equals(manager)

      // chai.expect(res.status).to.be.equals(200);
      // chai.expect(res.json).to.be.equals(createdUser);
    })
  })

  context('User Type doesn\'t exists', () => {
    before(async () => {
      mockModels.UserType.findOne.resolves(undefined)
      mockModels.User.findByPk.resolves(null)
      req = { body: requestData }
      result = await repository.addUser(req, res)
    })

    after(sinon.resetHistory)

    it('called UserType.findOne, find userType', () => {
      chai.expect(mockModels.UserType.findOne).to.have.been.calledWith(sinon.match({ where: { userType: requestData.userType } }))
    })

    it('Returns 400, does not find the manager', () => {
      chai.expect(result).to.deep.equal(400)
    })
  })

  context('Manager doesn\'t exists', () => {
    before(async () => {
      mockModels.UserType.findOne.resolves(UserTypes[0])
      req = { body: {} }
      req.body = requestData
      result = await repository.addUser(req, res)
    })

    after(sinon.resetHistory)

    it('called UserType.findOne, find userType', () => {
      chai.expect(mockModels.UserType.findOne).to.have.been.calledWith(sinon.match({ where: { userType: requestData.userType } }))
    })

    it('Returns 400, does not find the user', () => {
      chai.expect(result).to.deep.equal(400)
    })
  })

  describe('GetUserById', () => {
    before(async () => {
      mockModels.User.findOne.resolves(createdUser)
      req = { body: { id: 1 } }
      result = await repository.getUserById(req, res)
    })

    after(sinon.resetHistory)

    it('called User.findOne', () => {
      chai.expect(mockModels.User.findOne).to.have.been.calledWith(sinon.match({ where: { id: req.body.id } }))
    })
    it('Returns the user', () => {
      chai.expect(result).to.deep.equal(createdUser)
    })
  })

  describe('GetUserByEmail', () => {
    before(async () => {
      mockModels.User.findOne.resolves(createdUser)
      mockModels.User.build.resolves(createdUser)
      req = { body: { id: 1 } }
      result = await repository.getByEmail(requestData.email)
    })

    after(sinon.resetHistory)

    it('called User.findOne', () => {
      chai.expect(mockModels.User.findOne).to.have.been.calledWith(sinon.match({ where: { email: requestData.email } }))
    })
    it('Returns the user', () => {
      chai.expect(result).to.deep.equal(createdUser)
    })
  })

  describe('GetUserByEmail - fails', () => {
    before(async () => {
      mockModels.User.findOne.resolves(null)
      mockModels.User.build.resolves(null)
      req = { body: { id: 1 } }
      result = await repository.getByEmail(requestData.email)
    })

    after(sinon.resetHistory)

    it('called User.findOne', () => {
      chai.expect(mockModels.User.findOne).to.have.been.calledWith(sinon.match({ where: { email: requestData.email } }))
    })

    it('did not called User.build', () => {
      chai.expect(mockModels.User.build).not.to.have.been.called
    })

    it('Returns the null user', () => {
      chai.expect(result).to.deep.equal(null)
    })
  })
})
