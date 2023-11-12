import { IlevelObj } from './constants';

export class Section {
    public insertCode: string;
    public task: string;
    public tableClass: string;
    public tableElement: HTMLElement | null;
    public helpTitleElement: HTMLElement | null;

    constructor(LevelObj: IlevelObj, tableElement: HTMLElement | null, helpTitleElement: HTMLElement | null) {
        this.insertCode = LevelObj.insertCode;
        this.task = LevelObj.task;
        this.tableClass = LevelObj.tableClass;
        this.tableElement = tableElement;
        this.helpTitleElement = helpTitleElement;
    }

    addIntoHtml() {
        if (!this.tableElement) throw new Error('tableElement is null');
        this.tableElement.className = this.tableClass;
        this.tableElement.innerHTML = this.insertCode;
        if (!this.helpTitleElement) throw new Error('helpTitleElement is null');
        this.helpTitleElement.textContent = this.task;
    }
}
