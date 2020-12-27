export class Question{
    id: number;
    questionText: string;
    order: number;
    competitionId: number|null;
    isSelected: boolean;
    questionId: Number;
    companyId: Number;
    answerText: string|null;

    constructor(
        id: number,
        questionText: string,
        order: number,
        competitionId: number,
        isSelected: boolean,
        questionId: Number,
        companyId: Number,
        answerText: string|null,
      ) {
        this.id=id;
        this.questionText= questionText;
        this.order= order;
        this.competitionId= competitionId;
        this.isSelected= isSelected;
        this.questionId = questionId;
        this.companyId = companyId;
        this.answerText = answerText;
    }
};

