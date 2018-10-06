
let a = prompt('Сколько денег у тебя??');
let apple = prompt('Сколько яблок ты купил??');
let hleb = prompt ('Cколько ты купил батонов хлеба??');
let price1apple = prompt ('Cколько стоит одно яблоко?');
let price1hleb = prompt ('Cколько стоит один батон?');
	parseFloat(a);
	parseInt(apple,hleb,price1hleb,price1apple);
    	let monapple = (apple*price1apple);
        let monhleb = (hleb*price1hleb);
        let zatrata = (monapple+monhleb);
        	let x= (a>=zatrata);
document.write(x);