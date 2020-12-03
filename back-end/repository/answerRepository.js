const models = require('../models')

module.exports = {
  async addAnswer (answerText, companyId, questionId) {
    try {
      // var response = await this.getAnswerByQuestionIdForCompanyId(companyId, questionId)
      const response = await models.Answer.findOne({
        where: {
          companyId: companyId,
          questionId: questionId
        }
      })
      if (!response) {
        var answer = await models.Answer.create({
          questionId: questionId,
          companyId: companyId,
          answerText: answerText
        })
        return answer
      } else {
        console.log('NEEEEW', answerText, companyId, questionId)
        const newText = answerText
        // await this.updateAnswer(answerText, companyId, questionId)
        answer = await models.Answer.update({
          answerText: newText
        }, {
          where: {
            companyId: companyId,
            questionId: questionId
          }
        })
        return answer
      }
    } catch (error) {
      return false
    }
  },

  async updateAnswer (answerText, companyId, questionId) {
    try {
      console.log('novo', answerText)
      await models.Answer.upate({
        answerText: answerText
      }, {
        where: {
          questionId: questionId,
          companyId: companyId
        }
      })
    } catch (error) {
      return false
    }
  },

  async getAnswerByQuestionIdForCompanyId (companyId, questionId) {
    try {
      const answer = await models.Answer.findOne({
        where: {
          companyId: companyId,
          questionId: questionId
        }
      })
      return answer
    } catch (error) {
      return null
    }
  }
}
