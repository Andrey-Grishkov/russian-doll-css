import { answers } from './constants';

export class LevelHelp {
    public helpBtnElement: HTMLElement | null;
    public popupElement: HTMLElement | null;
    public popupTitleElement: HTMLElement | null;
    public popupBtnElement: HTMLElement | null;
    public resetWin: (winBtn: HTMLElement | null) => void;
    public inputAreaElement: HTMLElement | null;
    public gameRedactorPrintElement: HTMLElement | null;
    public clearTextAreaHandler: (text: string) => void;

    constructor(options: {
        helpBtnElement: HTMLElement | null;
        popupElement: HTMLElement | null;
        popupTitleElement: HTMLElement | null;
        popupBtnElement: HTMLElement | null;
        resetWin: (winBtn: HTMLElement | null) => void;
        inputAreaElement: HTMLElement | null;
        gameRedactorPrintElement: HTMLElement | null;
        clearTextAreaHandler: (text: string) => void;
    }) {
        this.helpBtnElement = options.helpBtnElement;
        this.popupElement = options.popupElement;
        this.popupTitleElement = options.popupTitleElement;
        this.popupBtnElement = options.popupBtnElement;
        this.inputAreaElement = options.inputAreaElement;
        this.gameRedactorPrintElement = options.gameRedactorPrintElement;
        this.resetWin = options.resetWin.bind(null, this.popupBtnElement);
        this.clearTextAreaHandler = options.clearTextAreaHandler;
    }

    open(answer: string, flag: string) {
        this.popupElement?.classList.add('popup_is-opened');

        if (this.popupTitleElement !== null) {
            this.popupTitleElement.textContent = answer;
        }

        if (flag === 'help') {
            this.popupBtnElement?.addEventListener('click', () => {
                this.close();
            });
        } else {
            if (this.popupBtnElement !== null) {
                this.popupBtnElement.textContent = 'Reset';
            }
            this.popupBtnElement?.addEventListener('click', () => {
                this.resetWin(this.popupBtnElement);
                this.close();
            });
        }
    }

    close() {
        this.popupElement?.classList.remove('popup_is-opened');
    }

    lisenHelpBtn(): void {
        this.helpBtnElement?.addEventListener('click', () => {
            const helpLevelStorage = localStorage.getItem('helpLevelArray');
            const helpLevelArray = helpLevelStorage ? JSON.parse(helpLevelStorage) : [];
            helpLevelArray.push(localStorage.getItem('level'));
            localStorage.setItem('helpLevelArray', JSON.stringify(helpLevelArray));
            console.log(localStorage.getItem('helpLevelArray'));
            //const answer = `Insert "${answers[Number(localStorage.getItem('level'))]}" in CSS Editor`;
            //this.open(answer, 'help');
            if (this.gameRedactorPrintElement && this.inputAreaElement) {
                this.gameRedactorPrintElement.textContent = answers[Number(localStorage.getItem('level'))];
                this.clearTextAreaHandler('');
                this.gameRedactorPrintElement?.classList.remove('game-redactor__help-print_hidden');
                this.gameRedactorPrintElement?.classList.add('animation-print');
                const timerPrint = setTimeout(() => {
                    this.gameRedactorPrintElement?.classList.remove('animation-print');
                    this.gameRedactorPrintElement?.classList.add('game-redactor__help-print_hidden');
                    clearTimeout(timerPrint);
                    this.clearTextAreaHandler(answers[Number(localStorage.getItem('level'))]);
                }, 700);
            }
        });
    }
}
