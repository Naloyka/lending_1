const a = document.querySelector('.img_1')
const b = document.querySelector('.img-group')
const yandex = document.querySelector('.ecom__yandex')
const wb = document.querySelector('.ecom__wb')
const sberbank = document.querySelector('.ecom__sberbank')
const aliexpress = document.querySelector('.ecom__aliexpress')
const ozon = document.querySelector('.ecom__ozon')
const ecomImg = document.querySelector('.ecom__img')

const marketplaseAliexpress = document.querySelector('.marketplase__aliexpress')
const marketplaseYandex = document.querySelector('.marketplase__yandex')
const marketplaseWb = document.querySelector('.marketplase__wb')
const marketplaseOzon = document.querySelector('.marketplase__ozon')
const marketplaseSberbank = document.querySelector('.marketplase__sberbank')
const arrowRoundImg = document.querySelector(".arrow-round_img")
const imgGroupMarketplace = document.querySelector(".img-group-marketplace")
const notebook = document.querySelector(".notebook")

const optionLine = {
    color: 'white',
    size: 3,
    dash: { animation: true },
    startSocket: 'auto',
    endSocket: 'auto',
    path: 'straight',
}

const optionArc = {
    color: 'white',
    size: 3,
    dash: { animation: true },
    path: 'arc',
    startSocketGravity: 800,
    endSocketGravity: 400,
}

let wbLineBig = new LeaderLine(LeaderLine.pointAnchor(wb, { x: 15, y: 85 }), LeaderLine.pointAnchor(ecomImg, { x: 100, y: 20 }), optionLine)
let aliexpressLineBig = new LeaderLine(LeaderLine.pointAnchor(aliexpress, { x: 15, y: 15 }), LeaderLine.pointAnchor(ecomImg, { x: 100, y: 100 }), optionLine)
let marketAliexpressLineBig = new LeaderLine(LeaderLine.pointAnchor(marketplaseAliexpress, { x: 75, y: 48 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 30, y: 160 }), optionArc)
let marketYandexLineBig = new LeaderLine(LeaderLine.pointAnchor(marketplaseYandex, { x: 110, y: 48 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 110, y: 300 }), optionArc)
let marketSberbankLineBig = new LeaderLine(LeaderLine.pointAnchor(marketplaseSberbank, { x: 230, y: 24 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 305, y: 260 }), optionArc)
let marketOzonLineBig = new LeaderLine(LeaderLine.pointAnchor(marketplaseOzon, { x: 70, y: 0 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 310, y: 100 }), optionArc)
let marketWbLineBig = new LeaderLine(LeaderLine.pointAnchor(marketplaseWb, { x: 10, y: 24 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 150, y: 85 }), optionArc)


let wbLine;
let aliexpressLine;
let marketAliexpressLine;
let marketYandexLine;
let marketSberbankLine;
let marketOzonLine;
let marketWbLine;

function refreshArrow() {

    let screenWidth = window.innerWidth

    // Ширина экрана

    if (screenWidth < 1345) {
        wbLineBig.remove()
        aliexpressLineBig.remove()
        marketAliexpressLineBig.remove()
        marketYandexLineBig.remove()
        marketSberbankLineBig.remove()
        marketOzonLineBig.remove()
        marketWbLineBig.remove()

        wbLine = new LeaderLine(LeaderLine.pointAnchor(wb, { x: 5, y: 55 }), LeaderLine.pointAnchor(ecomImg, { x: 72, y: 15 }), optionLine)
        aliexpressLine = new LeaderLine(LeaderLine.pointAnchor(aliexpress, { x: 7, y: 15 }), LeaderLine.pointAnchor(ecomImg, { x: 72, y: 72 }), optionLine)
        marketAliexpressLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseAliexpress, { x: 40, y: 30 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 15, y: 95 }), optionArc)
        marketYandexLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseYandex, { x: 60, y: 30 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 75, y: 180 }), optionArc)
        marketSberbankLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseSberbank, { x: 140, y: 14 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 180, y: 155 }), optionArc)
        marketOzonLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseOzon, { x: 50, y: 0 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 195, y: 80 }), optionArc)
        marketWbLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseWb, { x: 0, y: 12 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 90, y: 50 }), optionArc)
    } else {
        wbLine.remove()
        aliexpressLine.remove()
        marketAliexpressLine.remove()
        marketYandexLine.remove()
        marketSberbankLine.remove()
        marketOzonLine.remove()
        marketWbLine.remove()

        wbLineBig = new LeaderLine(LeaderLine.pointAnchor(wb, { x: 15, y: 85 }), LeaderLine.pointAnchor(ecomImg, { x: 100, y: 20 }), optionLine)
        aliexpressLineBig = new LeaderLine(LeaderLine.pointAnchor(aliexpress, { x: 15, y: 15 }), LeaderLine.pointAnchor(ecomImg, { x: 100, y: 100 }), optionLine)
        marketAliexpressLineBig = new LeaderLine(LeaderLine.pointAnchor(marketplaseAliexpress, { x: 75, y: 48 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 30, y: 160 }), optionArc)
        marketYandexLineBig = new LeaderLine(LeaderLine.pointAnchor(marketplaseYandex, { x: 110, y: 48 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 110, y: 300 }), optionArc)
        marketSberbankLineBig = new LeaderLine(LeaderLine.pointAnchor(marketplaseSberbank, { x: 230, y: 24 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 305, y: 260 }), optionArc)
        marketOzonLineBig = new LeaderLine(LeaderLine.pointAnchor(marketplaseOzon, { x: 70, y: 0 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 310, y: 100 }), optionArc)
        marketWbLineBig = new LeaderLine(LeaderLine.pointAnchor(marketplaseWb, { x: 10, y: 24 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 150, y: 85 }), optionArc)
    }
}
refreshArrow
window.addEventListener('load', refreshArrow)
window.addEventListener('resize', refreshArrow)



new LeaderLine(b, a, optionLine);
new LeaderLine(yandex, ecomImg, optionLine);
new LeaderLine(sberbank, ecomImg, optionLine);
new LeaderLine(ozon, ecomImg, optionLine);
new LeaderLine(LeaderLine.pointAnchor(imgGroupMarketplace, { x: 0, y: 80 }), LeaderLine.pointAnchor(notebook, { x: 325, y: 0 }), optionArc)



