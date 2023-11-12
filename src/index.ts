import './pages/index.scss';
import {
    tableElement,
    helpTitleElement,
    htmlViewerElement,
    submitBtnElement,
    inputAreaElement,
    resetBtnElement,
    helpBtnElement,
    popupElement,
    popupTitleElement,
    popupBtnElement,
    gameRedactorPrintElement,
    IlevelObj,
    levelOneObj,
    levelTwoObj,
    levelThreeObj,
    levelFourObj,
    levelFiveObj,
    levelSixObj,
    levelSevenObj,
    levelEightObj,
    levelNineObj,
    levelTenObj,
    levelStatusId,
    levelBtnId,
} from './scripts/constants';
import { Section } from './scripts/section';
import { HtmlView } from './scripts/htmlView';
import { Solution } from './scripts/solution';
import { LevelReset } from './scripts/levelReset';
import { LevelSet } from './scripts/levelSet';
import { LevelHelp } from './scripts/levelHelp';
import { LevelSwitch } from './scripts/levelSwitch';

const testElement = document.querySelector('.test');

if (!localStorage.getItem('level')) {
    localStorage.setItem('level', '1');
}

levelStatusId.map((status, index) => {
    if (Number(localStorage.getItem('level')) > 1 && index < Number(localStorage.getItem('level')) - 1) {
        const statusElement = document.querySelector(status);
        if (!statusElement) throw new Error('statusElement is null');
        statusElement.classList.add('levels__status_done');
        const helpLevelArray = localStorage.getItem('helpLevelArray');
        if (helpLevelArray !== null && helpLevelArray.includes((index + 1).toString())) {
            statusElement.classList.add('levels__status_done_helped');
        }
    }
});

levelBtnId.map((currentLevelId, index) => {
    if (index + 1 === Number(localStorage.getItem('level'))) {
        const currentLevelElement = document.querySelector(currentLevelId);
        if (!currentLevelElement) throw new Error('currentLevelElement is null');
        currentLevelElement.classList.add('levels__button_active');
    }
});

const switchLevel = new LevelSwitch(
    levelOneObj,
    levelTwoObj,
    levelThreeObj,
    levelFourObj,
    levelFiveObj,
    levelSixObj,
    levelSevenObj,
    levelEightObj,
    levelNineObj,
    levelTenObj
);

const levelNumberObject = switchLevel.switchLevelMethod(localStorage.getItem('level'));

const checkSolution = new Solution({
    LevelObj: levelNumberObject,
    submitBtnElement: submitBtnElement,
    inputAreaElement: inputAreaElement,
    renderer: (storageItem): void => {
        console.log(storageItem, 'storageItem');
        if (storageItem !== '0') {
            if (storageItem === '11' || Number(storageItem) > 11) {
                levelClue.open('You Win!!!', 'reset');
            }
            if (inputAreaElement) {
                inputAreaElement.value = '';
            }
            const levelNumberObjectSwitched = switchLevel.switchLevelMethod(storageItem);
            generateGame(levelNumberObjectSwitched, 'correct');
            checkSolution.lisenSubmitBtn();
        }
    },
});

checkSolution.lisenSubmitBtn();

const generateGame = (LevelObj: IlevelObj, flag?: string) => {
    if (flag) {
        const correctElements = tableElement?.querySelectorAll('.animation-dance');
        const flameElements = tableElement?.querySelectorAll('.game-element__flame');
        if (correctElements && flameElements) {
            flameElements?.forEach((flameElement) => {
                flameElement?.classList.add('game-element__flame_active');
            });
            correctElements.forEach((danceElement) => {
                testElement?.classList.add('animation-fly');
                danceElement?.classList.add('animation-fly');

                const timerFly = setTimeout(() => {
                    testElement?.classList.remove('animation-fly');
                    danceElement?.classList.remove('animation-fly');
                    const addSection = new Section(LevelObj, tableElement, helpTitleElement);
                    addSection.addIntoHtml();
                    const addHtmlView = new HtmlView(LevelObj, htmlViewerElement);
                    addHtmlView.setViewHtml();
                    clearTimeout(timerFly);
                }, 800);
            });
        }
    } else {
        const addSection = new Section(LevelObj, tableElement, helpTitleElement);
        addSection.addIntoHtml();

        const addHtmlView = new HtmlView(LevelObj, htmlViewerElement);
        addHtmlView.setViewHtml();
    }
};

generateGame(levelNumberObject);

const resetGame = new LevelReset({
    resetBtnElement: resetBtnElement,
    renderer: (): void => {
        if (inputAreaElement) {
            inputAreaElement.textContent = '';
        }
        levelStatusId.map((status) => {
            const statusElement = document.querySelector(status);
            if (!statusElement) throw new Error('statusElement is null');
            statusElement.classList.remove('levels__status_done_helped');
        });
        generateGame(levelOneObj);
    },
});
resetGame.handleReset();
const resetWin = (winBtn: HTMLElement | null) => resetGame.handleReset(winBtn);

const levelSetter = new LevelSet({
    renderer: (levelItem): void => {
        const levelNumberObjectSwitched = switchLevel.switchLevelMethod(levelItem);
        generateGame(levelNumberObjectSwitched);
        checkSolution.lisenSubmitBtn();
    },
});
levelSetter.listenLevelBtn();

const levelClue = new LevelHelp({
    helpBtnElement,
    popupElement,
    popupTitleElement,
    popupBtnElement,
    resetWin,
    inputAreaElement,
    gameRedactorPrintElement,
    clearTextAreaHandler: (text: string): void => {
        if (inputAreaElement) {
            inputAreaElement.value = text;
        }
    },
});
levelClue.lisenHelpBtn();
