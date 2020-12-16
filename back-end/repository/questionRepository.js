const models = require('../models')

const questions = ['Value Propositions',
  'Key Activities',
  'Customer Segments & Customer Relationships',
  'Channels',
  'Cost structure',
  'Key partners',
  'Key Resources',
  'Revenue streams']

module.exports = {

  async loadQuestions (competition) {
    console.log(competition)
    console.log('here', questions.length)
    //  const t = await sequelize.transaction();
    try {
      for (let index = 0; index < questions.length; index++) {
        const element = questions[index]
        console.log(element)
        await models.Question.create({
          questionText: element,
          competitionId: competition.id,
          order: index + 1,
          isSelected: false
        }
          //  ,{transaction: t}
        )
      } return true

      // await t.commit();
    } catch (error) {
      // await t.rollback();
      console.log(error)
      return false
    }
  },

  async addQuestion (questionText, competitionId) {
    const order = await models.Question.max('order', { where: { competitionId: competitionId } })
    console.log(order)
    try {
      const question = await models.Question.create({
        questionText: questionText,
        competitionId: competitionId,
        order: order + 1,
        isSelected: true
      })
      return question
    } catch (error) {
      return false
    }
  },

  async toggleQuestion (questionId, isSelected) {
    try {
      await models.Question.update({
        isSelected: isSelected
      }, {
        where: { id: questionId }
      })
      return true
    } catch (error) {
      return error
    }
  }
}
