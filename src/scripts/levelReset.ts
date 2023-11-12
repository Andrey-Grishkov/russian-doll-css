import { levelStatusId } from './constants';

export class LevelReset {
    public resetBtnElement: HTMLElement | null;
    renderer: () => void;

    constructor(options: { resetBtnElement: HTMLElement | null; renderer: () => void }) {
        this.resetBtnElement = options.resetBtnElement;
        this.renderer = options.renderer;
    }

    handleReset(winBtn?: HTMLElement | null): void {
        if (winBtn) {
            localStorage.setItem('level', '1');
            document.querySelectorAll('.levels__button').forEach((button) => {
                button.classList.remove('levels__button_active');
            });
            document.querySelector('#level-1')?.classList.add('levels__button_active');
            levelStatusId.map((status) => {
                const statusElement = document.querySelector(status);
                if (!statusElement) throw new Error('statusElement is null');
                statusElement.classList.remove('levels__status_done');
            });
            this.renderer();
        } else {
            this.resetBtnElement?.addEventListener('click', () => {
                localStorage.setItem('level', '1');
                localStorage.removeItem('helpLevelArray');
                levelStatusId.map((status) => {
                    const statusElement = document.querySelector(status);
                    if (!statusElement) throw new Error('statusElement is null');
                    statusElement.classList.remove('levels__status_done');
                    statusElement.classList.remove('levels__status_done_helped');
                });
                document.querySelectorAll('.levels__button').forEach((button) => {
                    button.classList.remove('levels__button_active');
                });
                document.querySelector('#level-1')?.classList.add('levels__button_active');
                this.renderer();
            });
        }
    }
}
