var click = 0;
var clickRange = 1;
var byTo = 20;
var cena1 = 100;
var cena2 = 700;
var cena3 = 1800;
var cena4 = 4000;
var cena5 = 6500;
var cena6 = 9000;
var cena7 = 12418;
const btn1 = document.querySelector('#sh1');
const btn2 = document.querySelector('#sh2');
const btn3 = document.querySelector('#sh3');
const btn4 = document.querySelector('#sh4');
const btn5 = document.querySelector('#sh5');
const btn6 = document.querySelector('#sh6');
const btn7 = document.querySelector('#sh7');
const btn = document.querySelector('#btn0');
btn.setAttribute("disabled", "true")
btn1.setAttribute("disabled", "true")
btn2.setAttribute("disabled", "true")
btn3.setAttribute("disabled", "true")
btn4.setAttribute("disabled", "true")
btn5.setAttribute("disabled", "true")
btn6.setAttribute("disabled", "true")
btn7.setAttribute("disabled", "true")

function clicker() {
    click += clickRange
    let cht = document.getElementById('chet').innerHTML = click 
    let printByTo = document.getElementById('btn0').innerHTML = byTo
    if (btn7.innerHTML === 'One Piece') {
        let cht3 = document.getElementById('chet').innerHTML = 'You WIN! С Днем Рождения!!!'
        let printByTo3 = document.getElementById('btn0').innerHTML = " "
        btn.setAttribute("disabled", "true")
        
    }
    if (click >= byTo && btn7.innerHTML !== 'One Piece') {
        btn.removeAttribute("disabled", "false")
    } 
    if (click >= cena1) {
        btn1.removeAttribute("disabled", "false")
    } 
    if (click >= cena2 && btn1.innerHTML === 'Шоколад') {
        btn2.removeAttribute("disabled", "false")
    }
    if (click >= cena3 && btn2.innerHTML === 'Кольца') {
        btn3.removeAttribute("disabled", "false")
    }
    if (click >= cena4  && btn3.innerHTML === 'Доктор Перец') {
        btn4.removeAttribute("disabled", "false")
    }
    if (click >= cena5  && btn4.innerHTML === 'Миска') {
        btn5.removeAttribute("disabled", "false")
    }
    if (click >= cena6  && btn5.innerHTML === 'Подарок от тещи') {
        btn6.removeAttribute("disabled", "false")
    }
    if (click >= cena7  && btn6.innerHTML === 'Автомат') {
        btn7.removeAttribute("disabled", "false")
    }
    
}


function x2() {
    if(click >= byTo) {
        click -= byTo
        byTo += 40
        clickRange += 8
        let cht = document.getElementById('chet').innerHTML = click 
        let printByTo = document.getElementById('btn0').innerHTML = byTo
    } 
    if (click < byTo) {
        btn.setAttribute("disabled", "true")
    }
    if (click < cena1) {
        btn1.setAttribute("disabled", "true")
    }
    if (click < cena2) {
        btn2.setAttribute("disabled", "true")
    }
    if (click < cena3) {
        btn3.setAttribute("disabled", "true")
    }
    if (click < cena4) {
        btn4.setAttribute("disabled", "true")
    }
    if (click < cena5) {
        btn5.setAttribute("disabled", "true")
    }
    if (click < cena6) {
        btn6.setAttribute("disabled", "true")
    }
    if (click < cena7) {
        btn7.setAttribute("disabled", "true")
    }
}

function shop1() {
    if(click >= cena1) {
        click -= cena1
        cena1 = 99999999999999
        let cht = document.getElementById('chet').innerHTML = click 
        let printByTo = document.getElementById('sh1').innerHTML = 'Шоколад'  
        btn1.setAttribute("disabled", "true")
    }
    
    if (click < byTo) {
        btn.setAttribute("disabled", "true")
    }

}

function shop2() {
    if(click >= cena2) {
        click -= cena2
        cena2 = 99999999999999
        btn2.setAttribute("disabled", "true")
        let cht = document.getElementById('chet').innerHTML = click 
        let printByTo = document.getElementById('sh2').innerHTML = 'Кольца'
        btn2.setAttribute("disabled", "true")
    }
    if (click < byTo) {
        btn.setAttribute("disabled", "true")
    }

}

function shop3() {
    if(click >= cena3) {
        click -= cena3
        cena3 = 99999999999999
        btn3.setAttribute("disabled", "true")
        let cht = document.getElementById('chet').innerHTML = click 
        let printByTo = document.getElementById('sh3').innerHTML = 'Доктор Перец'
        btn3.setAttribute("disabled", "true")
    }
    if (click < byTo) {
        btn.setAttribute("disabled", "true")
    }
}

function shop4() {
    if(click >= cena4) {
        click -= cena4
        cena4 = 99999999999999
        btn4.setAttribute("disabled", "true")
        let cht = document.getElementById('chet').innerHTML = click 
        let printByTo = document.getElementById('sh4').innerHTML = 'Миска'
        btn4.setAttribute("disabled", "true")
    }
    if (click < byTo) {
        btn.setAttribute("disabled", "true")
    }

}

function shop5() {
    if(click >= cena5) {
        click -= cena5
        cena5 = 99999999999999
        btn5.setAttribute("disabled", "true")
        let cht = document.getElementById('chet').innerHTML = click 
        let printByTo = document.getElementById('sh5').innerHTML = 'Подарок от тещи'
        btn5.setAttribute("disabled", "true")
    }
    if (click < byTo) {
        btn.setAttribute("disabled", "true")
    }

}

function shop6() {
    if(click >= cena6) {
        click -= cena6
        cena6 = 99999999999999
        btn6.setAttribute("disabled", "true")
        let cht = document.getElementById('chet').innerHTML = click 
        let printByTo = document.getElementById('sh6').innerHTML = 'Автомат'
        btn6.setAttribute("disabled", "true")
    }
    if (click < byTo) {
        btn.setAttribute("disabled", "true")
    }

}

function shop7() {
    if(click >= cena7) {
        click -= cena7
        cena7 = 99999999999999
        btn7.setAttribute("disabled", "true")
        let cht = document.getElementById('chet').innerHTML = click 
        let printByTo = document.getElementById('sh7').innerHTML = 'One Piece'
        let cht3 = document.getElementById('chet').innerHTML = 'You WIN! С Днем Рождения!!!'
        let printByTo3 = document.getElementById('btn0').innerHTML = " "
        btn7.setAttribute("disabled", "true")
        btn.setAttribute("disabled", "true")
    }
    
}