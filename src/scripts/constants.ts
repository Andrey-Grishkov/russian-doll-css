const levelOneObj = {
    insertCode:
        '<div class="game-element game-element__doll game-element__doll_red animation-dance">\n' +
        '<div class="game-element game-element__flame"></div></div>\n' +
        '<div class="game-element game-element__doll game-element__doll_red animation-dance">\n' +
        '<div class="game-element game-element__flame"></div></div>',
    viewCode: '<doll>\n' + '</doll>\n' + '<doll>\n' + '</doll>',
    task: 'Select dolls',
    tableClass: 'game__table game__table_big-gap',
};

const levelTwoObj = {
    insertCode:
        '<div class="game-element game-element__bear animation-dance">\n' +
        '<div class="game-element game-element__flame game-element__flame_bear"></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__doll game-element__doll_white">\n' +
        '</div>\n' +
        '<div class="game-element game-element__bear animation-dance">\n' +
        '<div class="game-element game-element__flame"></div>\n' +
        '</div>',
    viewCode: '<bear>\n' + '</bear>\n' + '<doll>\n' + '</doll>\n' + '<bear>\n' + '</bear>',
    task: 'Select bears',
    tableClass: 'game__table',
};

const levelThreeObj = {
    insertCode:
        '<div class="game-element game-element__doll game-element__doll_red"></div>\n' +
        '<div class="game-element game-element__doll game-element__doll_white animation-dance">\n' +
        '<div class="game-element game-element__flame"></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__doll game-element__doll_red"></div>',
    viewCode: '<doll>\n' + '</doll>\n' + '<doll id="white">\n' + '</doll>\n' + '<doll>\n' + '</doll>',
    task: 'Select white doll',
    tableClass: 'game__table',
};

const levelFourObj = {
    insertCode:
        '<div class="game-element game-element__doll game-element__doll_blue"></div>\n' +
        '<div class="game-element game-element__doll game-element__doll_blue animation-dance">\n' +
        '<div class="game-element game-element__mask game-element__mask_med"></div>\n' +
        '<div class="game-element game-element__flame_red-doll game-element__flame"></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__mask game-element__mask_med game-element__mask_med_down"></div>',
    viewCode: '<doll>\n' + '</doll>\n' + '<doll>\n' + '<mask>\n' + '</mask>\n' + '</doll>\n' + '<mask>\n' + '</mask>',
    task: 'Select mask on the doll',
    tableClass: 'game__table',
};

const levelFiveObj = {
    insertCode:
        '<div class="game-element game-element__doll game-element__doll_blue"></div>\n' +
        '<div class="game-element game-element__doll game-element__doll_white animation-dance">\n' +
        '<div class="game-element game-element__mask game-element__mask_joker"></div>\n' +
        '<div class="game-element game-element__flame game-element__flame_red-doll"></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__doll game-element__doll_blue">\n' +
        '<div class="game-element game-element__mask game-element__mask_joker game-element__mask_joker_left"></div>\n' +
        '</div>',
    viewCode:
        '<doll>\n' +
        '</doll>\n' +
        '<doll id="white">\n' +
        '<mask>\n' +
        '</mask>\n' +
        '</doll>\n' +
        '<doll>\n' +
        '<mask>\n' +
        '</mask>\n' +
        '</doll>',
    task: 'Select mask on white doll',
    tableClass: 'game__table',
};

const levelSixObj = {
    insertCode:
        '<div class="game-element game-element__mask game-element__mask_criminal game-element__mask_criminal_down animation-dance">\n' +
        '<div class="game-element game-element__flame game-element__flame_crime-mask"></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__doll game-element__doll_red animation-dance">\n' +
        '<div class="game-element game-element__mask game-element__mask_criminal"></div>\n' +
        '<div class="game-element game-element__flame game-element__flame_red-doll"></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__doll game-element__doll_white">\n' +
        '<div class="game-element game-element__mask game-element__mask_joker"></div>\n' +
        '</div>',
    viewCode:
        '<mask class="criminal">\n' +
        '</mask>\n' +
        '<doll>\n' +
        '<mask class="criminal">\n' +
        '</mask>\n' +
        '</doll>\n' +
        '<doll>\n' +
        '<mask>\n' +
        '</mask>\n' +
        '</doll>',
    task: 'Select criminal masks',
    tableClass: 'game__table',
};

const levelSevenObj = {
    insertCode:
        '<div class="game-element game-element__doll game-element__doll_blue animation-dance">\n' +
        '<div class="game-element game-element__mask game-element__mask_criminal game-element__mask_criminal_blue-doll"></div>\n' +
        '<div class="game-element game-element__flame game-element__flame_red-doll"></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__automat">\n' +
        '</div>\n' +
        '<div class="game-element game-element__doll game-element__doll_red animation-dance">\n' +
        '<div class="game-element game-element__mask game-element__mask_criminal"></div>\n' +
        '<div class="game-element game-element__flame game-element__flame_red-doll"></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__doll game-element__doll_white">\n' +
        '<div class="game-element game-element__mask game-element__mask_joker"></div>\n' +
        '</div>',
    viewCode:
        '<doll>\n' +
        '<mask class="criminal">\n' +
        '</mask>\n' +
        '</doll>\n' +
        '<automat class="criminal">\n' +
        '</automat>\n' +
        '<doll>\n' +
        '<mask class="criminal">\n' +
        '</mask>\n' +
        '</doll>\n' +
        '<doll>\n' +
        '<mask>\n' +
        '</mask>\n' +
        '</doll>',
    task: 'Select criminal masks',
    tableClass: 'game__table test__container_small-gap',
};

const levelEightObj = {
    insertCode:
        '<div class="game-element game-element__doll game-element__doll_blue animation-dance">\n' +
        '<div class="game-element game-element__mask game-element__mask_criminal game-element__mask_criminal_blue-doll"></div>\n' +
        '<div class="game-element game-element__flame game-element__flame_red-doll"></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__mask_criminal game-element__mask_criminal_down">\n' +
        '</div>\n' +
        '<div class="game-element game-element__doll game-element__doll_red animation-dance">\n' +
        '<div class="game-element game-element__mask game-element__mask_criminal"></div>\n' +
        '<div class="game-element game-element__flame game-element__flame_red-doll"></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__automat">\n' +
        '</div>',
    viewCode:
        '<doll>\n' +
        '<mask class="criminal">\n' +
        '</mask>\n' +
        '</doll>\n' +
        '<mask class="criminal">\n' +
        '</mask>\n' +
        '<doll>\n' +
        '<mask class="criminal">\n' +
        '</mask>\n' +
        '</doll>\n' +
        '<automat class="criminal">\n' +
        '</automat>',
    task: 'Select criminal mask on te doll',
    tableClass: 'game__table test__container_small-gap',
};

const levelNineObj = {
    insertCode:
        '<div class="game-element game-element__mask_criminal game-element__mask_criminal_down"></div>\n' +
        '<div class="game-element game-element__doll game-element__doll_red animation-dance">\n' +
        '<div class="game-element game-element__flame "></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__doll game-element__doll_blue animation-dance">\n' +
        '<div class="game-element game-element__mask game-element__mask_med"></div>\n' +
        '<div class="game-element game-element__flame game-element__flame_red-doll"></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__bear animation-dance">\n' +
        '<div class="game-element game-element__flame game-element__flame_bear"></div>\n' +
        '</div>',
    viewCode:
        '<mask>\n' +
        '</mask>\n' +
        '<doll>\n' +
        '</doll>\n' +
        '<doll>\n' +
        '<mask>\n' +
        '</mask>\n' +
        '</doll>\n' +
        '<bear>\n' +
        '</bear>',
    task: 'Select dolls and bear',
    tableClass: 'game__table test__container_small-gap',
};

const levelTenObj = {
    insertCode:
        '<div class="game-element game-element__mask_med game-element__mask_med_down animation-dance">' +
        '<div class="game-element game-element__flame game-element__flame_med-mask"></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__doll game-element__doll_white animation-dance">\n' +
        '<div class="game-element game-element__mask_joker"></div>\n' +
        '<div class="game-element game-element__flame game-element__flame_red-doll "></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__bear animation-dance">\n' +
        '<div class="game-element game-element__flame game-element__flame_bear"></div>\n' +
        '</div>\n' +
        '<div class="game-element game-element__doll game-element__doll_blue animation-dance">\n' +
        '<div class="game-element game-element__mask game-element__mask_batman"></div>\n' +
        '<div class="game-element game-element__flame game-element__flame_red-doll"></div>\n' +
        '</div>',
    viewCode:
        '<mask>\n' +
        '</mask>\n' +
        '<doll>\n' +
        '<mask>\n' +
        '</mask>\n' +
        '</doll>\n' +
        '<bear>\n' +
        '</bear>\n' +
        '<doll>\n' +
        '<mask>\n' +
        '</mask>\n' +
        '</doll>',
    task: 'Select All',
    tableClass: 'game__table test__container_small-gap',
};

const tableElement: HTMLElement | null = document.querySelector('.game__table');
const helpTitleElement: HTMLElement | null = document.querySelector('.help__title');
const htmlViewerElement: HTMLElement | null = document.querySelector('.game-redactor__editor_dark');
const submitBtnElement: HTMLElement | null = document.querySelector('.game-redactor__submit-button');
const inputAreaElement: HTMLTextAreaElement | null = document.querySelector('#input-area');
const resetBtnElement: HTMLTextAreaElement | null = document.querySelector('.game-menu__reset-button');
const helpBtnElement: HTMLTextAreaElement | null = document.querySelector('.help__button');
const popupElement: HTMLTextAreaElement | null = document.querySelector('.popup');
const popupTitleElement: HTMLTextAreaElement | null = document.querySelector('.popup__title');
const popupBtnElement: HTMLTextAreaElement | null = document.querySelector('.popup__button-submit');
const gameRedactorElement: HTMLTextAreaElement | null = document.querySelector('.game-redactor');
const gameRedactorPrintElement: HTMLTextAreaElement | null = document.querySelector('.game-redactor__help-print');

const levelBtnId = [
    '#level-1',
    '#level-2',
    '#level-3',
    '#level-4',
    '#level-5',
    '#level-6',
    '#level-7',
    '#level-8',
    '#level-9',
    '#level-10',
];

const levelStatusId = [
    '#level-status-1',
    '#level-status-2',
    '#level-status-3',
    '#level-status-4',
    '#level-status-5',
    '#level-status-6',
    '#level-status-7',
    '#level-status-8',
    '#level-status-9',
    '#level-status-10',
];

const answers = [
    '0',
    'doll',
    'bear',
    '#white',
    'doll mask',
    '#white mask',
    '.criminal',
    'mask.criminal',
    'doll>mask.criminal',
    'doll, bear',
    '*',
];

interface IlevelObj {
    insertCode: string;
    viewCode: string;
    task: string;
    tableClass: string;
}

export {
    levelOneObj,
    tableElement,
    IlevelObj,
    levelTwoObj,
    levelThreeObj,
    levelFourObj,
    levelFiveObj,
    levelSixObj,
    levelSevenObj,
    levelEightObj,
    levelNineObj,
    levelTenObj,
    helpTitleElement,
    htmlViewerElement,
    submitBtnElement,
    inputAreaElement,
    resetBtnElement,
    helpBtnElement,
    popupElement,
    popupTitleElement,
    popupBtnElement,
    gameRedactorElement,
    gameRedactorPrintElement,
    levelBtnId,
    levelStatusId,
    answers,
};
