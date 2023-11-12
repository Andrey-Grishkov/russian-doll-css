import { IlevelObj } from './constants';

export class HtmlView {
    public viewCode: string;
    public htmlViewerElement: HTMLElement | null;

    constructor(LevelObj: IlevelObj, htmlViewerElement: HTMLElement | null) {
        this.viewCode = LevelObj.viewCode;
        this.htmlViewerElement = htmlViewerElement;
    }

    setViewHtml() {
        if (!this.htmlViewerElement) throw new Error('htmlViewerElement is null');
        this.htmlViewerElement.textContent = this.viewCode;
    }
}
