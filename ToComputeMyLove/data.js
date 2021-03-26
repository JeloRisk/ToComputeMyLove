/*
	inside the iInputDetoy() adda dagijay every agabay nga interger ket inaramid ko nga string so bagtit nak ita isu inaramid ko manen nga intergers'n 
*/
parsedInt = (LO, OV, VE, ER) => {
	let LOOV = LO + OV;
	let OVVE = OV + VE;
	let VEER = VE + ER;
	let LOOVOVVE = LOOV + OVVE;
	let OVVEVEER = OVVE + VEER;
	let calculation = LOOVOVVE + OVVEVEER;
	return calculation;
};

/*
	awan serserbi na detoy ngamin adda tay lemmePrint()'en
	haan ideldelete pagpaadigdog. lol
*/
dictate = (calculated) => {
	let evaluated;
	if (calculated > 100) {
		evaluated = 'the love you two have is even stronger than the strongest\n\nSanaol';
	} else if (calculated === 100) {
		evaluated = 'the most beautiful and perfect couple ';
	} else if (calculated >= 75) {
		evaluated = "it's a lover";
	} else if (calculated > 50) {
		evaluated = 'can talk about it to be a lover ';
	} else if (calculated === 50) {
		evaluated = 'it can be over, it can also be lover';
	} else {
		evaluated = "it's over";
	}
	return evaluated;
};

/*
	(1)detoy tay mangiprint in HTML file basta haan nak nalaing agikabesa terminology
	(2)
*/
lemmePrint = (name1, name2, calculated) => {
	let coupleName = `${name1} ${name2}`;
	name1 = toSentenceCase(name1);
	name2 = toSentenceCase(name2);
	name1 = `<b>${name1}</b>`;
	name2 = `<b>${name2}</b>`;

	/*
	Ammok nga adda napinpintas storage dagitoy nga panagsasao ngem, siguro haan ko pay ammo didjay.
	Storing stings inside the object and object as an array
	*/
	let template = [
		{
			//for calculated >100
			comment: `${name1}, your personal relationship or intercession with ${name2} is seemingly limitless. Try telling ${name2} how much you love and adore him/her if he/she doesn't  know it.`,
		},
		{
			//for calculated === 100
			comment: `"Nothing in the world is completely perfect". You've just clearly proven that my entire lifetime has been a big lie. No, it's just a joke!`,
		},
		{
			//for calculated >= 75
			comment: `"${name1} and ${name2}, you two are in love! I imply, you two are just normal ones who appreciate each other enough not to separate or fall apart. You will not be able to dislike each other no matter how many multiple trials you go through, no matter how much you can't feel each other, or even if one of you is already in pain.`,
		},
		{
			//for calculated
			comment: 'can talk about it to be a lover ',
		},
		{
			comment: `I truly believe ${name1} and ${name2} could have a relationship, but the chances are low.   It is possible to have a healthy relationship, but both of you must collaborate on it. Don't stay and assume that everything will work out alright, because it might not. Spend lots of time as possible with each other.`,
		},
		{
			comment: `Your love is like rush hour traffic. Delay and annoying, but it is navigable with dedication and pure strength of will.`,
		},
	];

	document.getElementById('percent').innerText = `${calculated}%`;
	let comment = document.getElementById('dictate');
	if (calculated > 100) {
		comment.innerHTML = template[0].comment;
	} else if (calculated === 100) {
		comment.innerHTML = template[1].comment;
	} else if (calculated >= 75) {
		comment.innerHTML = template[2].comment;
	} else if (calculated > 50) {
		comment.innerHTML = template[3].comment;
	} else if (calculated > 25) {
		comment.innerHTML = template[4].comment;
	} else if (calculated >= 0) {
		comment.innerHTML = template[5].comment;
	}
};

/*
	detoy tay method tapno i sentence case tay in uppercase idjay tagaCompute()
*/
toSentenceCase = (name) => {
	var name = name.toLowerCase().split(' ');
	for (var i = 0; i < name.length; i++) {
		name[i] = name[i][0].toUpperCase() + name[i].slice(1);
	}
	return (name = name.join(' '));
};
