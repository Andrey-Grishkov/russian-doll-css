import { IlevelObj, levelStatusId, levelBtnId, answers, gameRedactorElement } from './constants';
const testElement = document.querySelector('.test');

export class Solution {
    public submitBtnElement: HTMLElement | null;
    public inputAreaValue: string | null;
    public inputAreaElement: HTMLTextAreaElement | null;
    renderer: (storageItem: string) => void;
    LevelObj: IlevelObj;

    constructor(options: {
        LevelObj: IlevelObj;
        submitBtnElement: HTMLElement | null;
        inputAreaElement: HTMLTextAreaElement | null;
        renderer: (storageItem: string) => void;
    }) {
        this.LevelObj = options.LevelObj;
        this.submitBtnElement = options.submitBtnElement;
        this.inputAreaElement = options.inputAreaElement;
        this.renderer = options.renderer;
        this.inputAreaValue = this.inputAreaElement !== null ? this.inputAreaElement.value : null;
    }

    private handleButtonClick = () => {
        if (
            (this.inputAreaElement !== null ? this.inputAreaElement.value : null)?.trim() ===
            answers[Number(localStorage.getItem('level'))]
        ) {
            this.handleCorrectAnswer();
        } else {
            this.handleError();
            return this.renderer('0');
        }
        const levelNumber = localStorage.getItem('level');
        if (levelNumber !== null) {
            this.renderer(levelNumber);
        } else {
            this.renderer('2');
        }
    };

    private handleCorrectAnswer(): void {
        const statusElement = document.querySelector(levelStatusId[Number(localStorage.getItem('level')) - 1]);
        if (!statusElement) throw new Error('statusElement is null');
        statusElement.classList.add('levels__status_done');
        const helpLevelArray = localStorage.getItem('helpLevelArray');
        const level = localStorage.getItem('level');
        if (helpLevelArray !== null && level !== null && helpLevelArray.includes(level)) {
            statusElement.classList.add('levels__status_done_helped');
        }
        localStorage.setItem('level', (Number(localStorage.getItem('level')) + 1).toString());

        levelBtnId.forEach((btnLevelID) => {
            const btnLevelElement = document.querySelector(btnLevelID);
            btnLevelElement?.classList.remove('levels__button_active');
        });
        document
            .querySelector(levelBtnId[Number(localStorage.getItem('level')) - 1])
            ?.classList.add('levels__button_active');
    }

    private handleError(): void {
        testElement?.classList.add('animation-shake');
        gameRedactorElement?.classList.add('animation-shake');
        const timerId = setTimeout(() => {
            testElement?.classList.remove('animation-shake');
            gameRedactorElement?.classList.remove('animation-shake');
            clearTimeout(timerId);
        }, 0);
    }

    private enterKeyListener = (event: KeyboardEvent): void => {
        if (event.key === 'Enter') this.handleButtonClick();
    };

    lisenSubmitBtn(): void {
        this.submitBtnElement?.addEventListener('click', this.handleButtonClick);
        this.inputAreaElement?.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
            }
        });
        document.addEventListener('keydown', this.enterKeyListener);
    }
}
