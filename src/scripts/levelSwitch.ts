import { IlevelObj } from './constants';

export class LevelSwitch {
    public levelOneObj: IlevelObj;
    public levelTwoObj: IlevelObj;
    public levelThreeObj: IlevelObj;
    public levelFourObj: IlevelObj;
    public levelFiveObj: IlevelObj;
    public levelSixObj: IlevelObj;
    public levelSevenObj: IlevelObj;
    public levelEightObj: IlevelObj;
    public levelNineObj: IlevelObj;
    public levelTenObj: IlevelObj;

    constructor(
        levelOneObj: IlevelObj,
        levelTwoObj: IlevelObj,
        levelThreeObj: IlevelObj,
        levelFourObj: IlevelObj,
        levelFiveObj: IlevelObj,
        levelSixObj: IlevelObj,
        levelSevenObj: IlevelObj,
        levelEightObj: IlevelObj,
        levelNineObj: IlevelObj,
        levelTenObj: IlevelObj
    ) {
        this.levelOneObj = levelOneObj;
        this.levelTwoObj = levelTwoObj;
        this.levelThreeObj = levelThreeObj;
        this.levelFourObj = levelFourObj;
        this.levelFiveObj = levelFiveObj;
        this.levelSixObj = levelSixObj;
        this.levelSevenObj = levelSevenObj;
        this.levelEightObj = levelEightObj;
        this.levelNineObj = levelNineObj;
        this.levelTenObj = levelTenObj;
    }

    switchLevelMethod(levelCase: string | null) {
        let levelNumberObject;

        switch (levelCase) {
            case '1':
                return (levelNumberObject = this.levelOneObj);
            case '2':
                return (levelNumberObject = this.levelTwoObj);
            case '3':
                return (levelNumberObject = this.levelThreeObj);
            case '4':
                return (levelNumberObject = this.levelFourObj);
            case '5':
                return (levelNumberObject = this.levelFiveObj);
            case '6':
                return (levelNumberObject = this.levelSixObj);
            case '7':
                return (levelNumberObject = this.levelSevenObj);
            case '8':
                return (levelNumberObject = this.levelEightObj);
            case '9':
                return (levelNumberObject = this.levelNineObj);
            case '10':
                return (levelNumberObject = this.levelTenObj);
            default:
                levelNumberObject = this.levelOneObj;
        }
        return levelNumberObject;
    }
}
