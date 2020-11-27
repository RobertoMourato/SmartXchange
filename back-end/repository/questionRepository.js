const models = require('../models');
const question = require('../models/question');

var questions = ["Value Propositions",
    "Key Activities",
    "Customer Segments & Customer Relationships",
    "Channels",
    "Cost structure",
    "Key partners",
    "Key Resources",
    "Revenue streams"];


module.exports = {

    async loadQuestions(competition) {
        console.log(competition);
        console.log('here', questions.length)
        //  const t = await sequelize.transaction();
        try {
            for (let index = 0; index < questions.length; index++) {
                var element = questions[index];
                console.log(element)
                await models.Question.create({
                    questionText: element,
                    competitionId: competition.id,
                    order: index + 1
                }
                    //  ,{transaction: t}
                )

            } return true;

            // await t.commit();
        } catch (error) {
            //await t.rollback();
            console.log(error)
            return false;
        }

    },

    async addQuestion(questionText, competitionId, order) {
        try {
            this.models.Question.create({
                questionText: questionText,
                competitionId: competitionId,
                order: order
            })
            return true;
        } catch (error) {
            return false;
        }
    }



}