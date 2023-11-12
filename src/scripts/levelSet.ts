import { levelBtnId } from './constants';

export class LevelSet {
    renderer: (levelItem: string) => void;

    constructor(options: { renderer: (levelItem: string) => void }) {
        this.renderer = options.renderer;
    }

    listenLevelBtn(): void {
        levelBtnId.map((levelId, index) => {
            document.querySelector(levelId)?.addEventListener('click', () => {
                if (
                    index + 1 < Number(localStorage.getItem('level')) ||
                    index + 1 === Number(localStorage.getItem('level'))
                ) {
                    document.querySelectorAll('.levels__button').forEach((button) => {
                        button.classList.remove('levels__button_active');
                    });
                    document.querySelector(levelId)?.classList.add('levels__button_active');
                    const thisLevel = index + 1;
                    this.renderer(thisLevel.toString());
                } else {
                    console.log('errore');
                }
            });
        });
    }
}
