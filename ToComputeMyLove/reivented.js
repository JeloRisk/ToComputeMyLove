/*
it is just a introduction to my next project. I think!? lol
*/

document.getElementById('form').addEventListener('keyup', function (event) {
	if (event.keyCode === 13) {
		tagaCompute();
	}
});

tagaCompute = () => {
	let name1 = document.getElementById('yourName').value;
	let name2 = document.getElementById('someoneName').value;
	name1 = name1.toUpperCase();
	name2 = name2.toUpperCase();
	let coupleName = name1 + name2;
	coupleName = coupleName.split('');
	let num1 = coupleName.length;
	let L = 'L',
		O = 'O',
		V = 'V',
		E = 'E',
		R = 'R';
	L = tagaBilang(L, coupleName, num1);
	O = tagaBilang(O, coupleName, num1);
	V = tagaBilang(V, coupleName, num1);
	E = tagaBilang(E, coupleName, num1);
	R = tagaBilang(R, coupleName, num1);
	iInputDetoy(L, O, V, E, R, name1, name2);
};

//inseperate ko detoy para haan nga adigdog.
//base tay nabasak a libro, napinpintas nga haan nga ado linya.
//instead na agaramid nak ti ado nga loops idjay tagaCompute, nakaaramid nag function/methods to count
tagaBilang = (everyString, coupleName, num1) => {
	let eachLetterHas = 0;
	let num = 0;
	for (let i = 0; i < num1; i++) {
		if (coupleName[i] === everyString) {
			num++;
		}
		eachLetterHas = num;
	}
	return eachLetterHas;
};


iInputDetoy = (L, O, V, E, R, name1, name2) => {
	let strLO, strOV, strVE, strER;
	// MAKING integer INSIDE variables L,O,V,E,R to string
	//for example(the value of L is 1, the value of O is 2)
	//LO will equal to "1" "2" means 12(kasla lang 1 abay abay 1)
	L = L.toString();
	O = O.toString();
	V = V.toString();
	E = E.toString();
	R = R.toString();
	strLO = L + O;
	strOV = O + V;
	strVE = V + E;
	strER = E + R;
	let LO, OV, VE, ER;
	LO = parseInt(strLO);
	OV = parseInt(strOV);
	VE = parseInt(strVE);
	ER = parseInt(strER);
	calculated = parsedInt(LO, OV, VE, ER);
	dictated = dictate(calculated);
	// window.alert(`it is ${calculated}% and ${dictated}`);

	// if (name2 == ""||name1=="") {
	// 	document.getElementById("dictate").innerText = "wala kang jowa?";
	// } else {
	// 	document.getElementById("dictate").innerText = dictated;
	// }
	if (name1 === '' && name2 === '') {
		setTimeout(function () {
			document.getElementById('dictate').innerText = 'o sadya lang na wala kang jowa?';
		}, 900);
		document.getElementById('percent').innerText = 'Empty boxes';
	} else if (name1 === '') {
		setTimeout(function () {
			document.getElementById('dictate').innerText = 'nahihiya ka pang imention name mo';
		}, 900);
		document.getElementById('percent').innerText = 'Please do provide names.';
	} else if (name2 === '') {
		setTimeout(function () {
			document.getElementById('dictate').innerText = 'tayo lang naman makakaalam sa name niya!';
		}, 900);
		document.getElementById('percent').innerText = 'Please do provide names.';
	} else {
		lemmePrint(name1, name2, calculated);
	}
	// var x = document.getElementById("dictate");
	// switch (x.innerText ==='') {
	// 	case x.innerText==='':
	// 		x.innerText = dictated;
	// 		break;
	// 	default:
	// 		break;
	// }

	// if (x.innerText === '') {
	// 	x.innerText = dictated;
	// } else {
	// 	x.innerText = '';
	// }
};
