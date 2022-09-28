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

let wbLine = new LeaderLine(LeaderLine.pointAnchor(wb, { x: 15, y: 85 }), LeaderLine.pointAnchor(ecomImg, { x: 100, y: 20 }), optionLine)
let aliexpressLine = new LeaderLine(LeaderLine.pointAnchor(aliexpress, { x: 15, y: 15 }), LeaderLine.pointAnchor(ecomImg, { x: 100, y: 100 }), optionLine)
let marketAliexpressLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseAliexpress, { x: 75, y: 48 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 30, y: 160 }), optionArc)
let marketYandexLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseYandex, { x: 110, y: 48 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 110, y: 300 }), optionArc)
let marketSberbankLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseSberbank, { x: 230, y: 24 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 305, y: 260 }), optionArc)
let marketOzonLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseOzon, { x: 70, y: 0 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 310, y: 100 }), optionArc)
let marketWbLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseWb, { x: 10, y: 24 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 150, y: 85 }), optionArc)
let notebookLine = new LeaderLine(LeaderLine.pointAnchor(imgGroupMarketplace, { x: 0, y: 80 }), LeaderLine.pointAnchor(notebook, { x: 200, y: 20 }), optionArc)
let line1 = new LeaderLine(b, a, optionLine);
let line2 = new LeaderLine(yandex, ecomImg, optionLine);
let line3 = new LeaderLine(sberbank, ecomImg, optionLine);
let line4 = new LeaderLine(ozon, ecomImg, optionLine);



function createLine() {

    let screenWidth = window.innerWidth

    wbLine.remove()
    aliexpressLine.remove()
    marketAliexpressLine.remove()
    marketYandexLine.remove()
    marketSberbankLine.remove()
    marketOzonLine.remove()
    marketWbLine.remove()
    notebookLine.remove()
    line1.remove()
    line2.remove()
    line3.remove()
    line4.remove()
    console.log("удалить средние")



    if (screenWidth > 480 && screenWidth < 1345) {
        wbLine = new LeaderLine(LeaderLine.pointAnchor(wb, { x: 5, y: 55 }), LeaderLine.pointAnchor(ecomImg, { x: 72, y: 15 }), optionLine)
        aliexpressLine = new LeaderLine(LeaderLine.pointAnchor(aliexpress, { x: 7, y: 15 }), LeaderLine.pointAnchor(ecomImg, { x: 72, y: 72 }), optionLine)
        marketAliexpressLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseAliexpress, { x: 40, y: 30 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 15, y: 95 }), optionArc)
        marketYandexLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseYandex, { x: 60, y: 30 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 75, y: 180 }), optionArc)
        marketSberbankLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseSberbank, { x: 140, y: 14 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 180, y: 155 }), optionArc)
        marketOzonLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseOzon, { x: 50, y: 0 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 195, y: 80 }), optionArc)
        marketWbLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseWb, { x: 0, y: 12 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 90, y: 50 }), optionArc)
        notebookLine = new LeaderLine(LeaderLine.pointAnchor(imgGroupMarketplace, { x: 0, y: 80 }), LeaderLine.pointAnchor(notebook, { x: 200, y: 20 }), optionArc)


    } else if (screenWidth > 1345) {
        wbLine = new LeaderLine(LeaderLine.pointAnchor(wb, { x: 15, y: 85 }), LeaderLine.pointAnchor(ecomImg, { x: 100, y: 20 }), optionLine)
        aliexpressLine = new LeaderLine(LeaderLine.pointAnchor(aliexpress, { x: 15, y: 15 }), LeaderLine.pointAnchor(ecomImg, { x: 100, y: 100 }), optionLine)
        marketAliexpressLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseAliexpress, { x: 75, y: 48 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 30, y: 160 }), optionArc)
        marketYandexLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseYandex, { x: 110, y: 48 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 110, y: 300 }), optionArc)
        marketSberbankLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseSberbank, { x: 230, y: 24 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 305, y: 260 }), optionArc)
        marketOzonLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseOzon, { x: 70, y: 0 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 310, y: 100 }), optionArc)
        marketWbLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseWb, { x: 10, y: 24 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 150, y: 85 }), optionArc)
        notebookLine = new LeaderLine(LeaderLine.pointAnchor(imgGroupMarketplace, { x: 0, y: 80 }), LeaderLine.pointAnchor(notebook, { x: 200, y: 20 }), optionArc)

    } else {
        wbLine = new LeaderLine(LeaderLine.pointAnchor(wb, { x: 5, y: 35 }), LeaderLine.pointAnchor(ecomImg, { x: 50, y: 10 }), optionLine)
        aliexpressLine = new LeaderLine(LeaderLine.pointAnchor(aliexpress, { x: 5, y: 10 }), LeaderLine.pointAnchor(ecomImg, { x: 50, y: 50 }), optionLine)
        marketAliexpressLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseAliexpress, { x: 32, y: 24 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 15, y: 70 }), optionArc)
        marketYandexLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseYandex, { x: 60, y: 24 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 50, y: 120 }), optionArc)
        marketSberbankLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseSberbank, { x: 100, y: 12 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 120, y: 105 }), optionArc)
        marketOzonLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseOzon, { x: 35, y: 0 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 120, y: 40 }), optionArc)
        marketWbLine = new LeaderLine(LeaderLine.pointAnchor(marketplaseWb, { x: 0, y: 12 }), LeaderLine.pointAnchor(arrowRoundImg, { x: 75, y: 40 }), optionArc)
        notebookLine = new LeaderLine(LeaderLine.pointAnchor(imgGroupMarketplace, { x: 0, y: 50 }), LeaderLine.pointAnchor(notebook, { x: 120, y: 10 }), optionArc)
    }

    line1 = new LeaderLine(b, a, optionLine);
    line2 = new LeaderLine(yandex, ecomImg, optionLine);
    line3 = new LeaderLine(sberbank, ecomImg, optionLine);
    line4 = new LeaderLine(ozon, ecomImg, optionLine);
}
createLine()

window.addEventListener('load', createLine)
window.addEventListener('resize', createLine)
window.addEventListener('DOMContentLoaded', setTimeout)

