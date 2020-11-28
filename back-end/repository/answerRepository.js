const models = require('../models');

module.exports={
    async addAnswer(answerText, companyId, questionId) {
        try {
            var answer = await models.Answer.create({
                questionId: questionId,
                companyId:companyId,
                answerText:answerText
            })
            return answer;
        } catch (error) {
            return false;
        }
    }
}