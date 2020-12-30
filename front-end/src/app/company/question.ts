export class Question{
    id: number;
    questionText: string;
    order: number;
    competitionId: number|null;
    isSelected: boolean;

    constructor(
        id: number,
        questionText: string,
        order: number,
        competitionId: number,
        isSelected: boolean
      ) {
        this.id=id;
        this.questionText= questionText;
        this.order= order;
        this.competitionId= competitionId;
        this.isSelected= isSelected
    }
};

