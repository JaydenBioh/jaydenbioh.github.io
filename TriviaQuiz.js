var score = 0

var i = 1

var ans = 1

function submitAnswer(){

    y = document.getElementById("qans").value

    var yy=y.toUpperCase();

    x = document.getElementById("question").value

if (ans===1){

    y = document.getElementById("qans").value

    if(yy==="A"){

        document.getElementById("question").value="You are right"

	 score++

	document.searchImage.src = "WooHoo.gif"

    }

    else {

        document.getElementById("question").value="You are wrong"

        document.searchImage.src = "Crying.gif"

    }

    document.view.qscore.value=score

}

else if (ans===2){ 

	y = document.getElementById("qans").value

    if(yy==="B"){

        document.getElementById("question").value="You are right"

	 score++

	document.searchImage.src = "WooHoo.gif"

    }

    else {

        document.getElementById("question").value="You are wrong"

        document.searchImage.src = "Crying.gif"


    }

    document.view.qscore.value=score

}

else if (ans===3){ 

	y = document.getElementById("qans").value

    if(yy==="A"){

        document.getElementById("question").value="You are right"

	 score++

	document.searchImage.src = "WooHoo.gif"

    }

    else {

        document.getElementById("question").value="You are wrong"

        document.searchImage.src = "Crying.gif"

    }

    document.view.qscore.value=score

}

else if (ans===4){ 

	y = document.getElementById("qans").value

    if(yy==="A"){

        document.getElementById("question").value="You are right"

	 score++

	document.searchImage.src = "WooHoo.gif"

    }

    else {

        document.getElementById("question").value="You are wrong"

        document.searchImage.src = "Crying.gif"

    }

    document.view.qscore.value=score

}

else if (ans===5){ 

	y = document.getElementById("qans").value

    if(yy==="C"){

        document.getElementById("question").value="You are right"

	 score++

	document.searchImage.src = "WooHoo.gif"
    }

    else {

        document.getElementById("question").value="You are wrong"

        document.searchImage.src = "Crying.gif"

    }

    document.view.qscore.value=score

}

else if (ans===6){ 

	y = document.getElementById("qans").value

    if(yy==="A"){

        document.getElementById("question").value="You are right"

	 score++

	document.searchImage.src = "WooHoo.gif"

    }

    else {

        document.getElementById("question").value="You are wrong"

        document.searchImage.src = "Crying.gif"

    }

    document.view.qscore.value=score

}

else if (ans===7){ 

	y = document.getElementById("qans").value

    if(yy==="A"){

        document.getElementById("question").value="You are right"

	 score++

	document.searchImage.src = "WooHoo.gif"
    }

    else {

        document.getElementById("question").value="You are wrong"

        document.searchImage.src = "Crying.gif"

    }

    document.view.qscore.value=score

}

else if (ans===8){ 

	y = document.getElementById("qans").value

    if(yy==="C"){

        document.getElementById("question").value="You are right"

	 score++

	document.searchImage.src = "WooHoo.gif"

    }

    else {

        document.getElementById("question").value="You are wrong"

        document.searchImage.src = "Crying.gif"

    }

    document.view.qscore.value=score

}

else if (ans===9){ 

	y = document.getElementById("qans").value

    if(yy==="A"){

        document.getElementById("question").value="You are right"

	 score++

	document.searchImage.src = "WooHoo.gif"

    }

    else {

        document.getElementById("question").value="You are wrong"

        document.searchImage.src = "Crying.gif"

    }

    document.view.qscore.value=score

}

else if (ans===10){ 

	y = document.getElementById("qans").value

    if(yy==="D"){

        document.getElementById("question").value="You are right"

	score++

	document.searchImage.src = "WooHoo.gif"

    }

    else {

        document.getElementById("question").value="You are wrong"

        document.searchImage.src = "Crying.gif"

    }

    document.view.qscore.value=score

}

	ans++; 

}
function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
    document.view.qscore.value=0;
	document.view.question.value ="What is the most points ever scored in a NBA game? \na)70 points \nb)81 points\nc)100 points\nd)78 points";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What team has the best NBA record of All-Time? \na)Bulls 72-10 \nb)Warriors 73-9 \nc)Cavs 77-5 \nd)Spurs 74-8";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the most yars thrown by a QB in a NFL game?\na)554 yards \nb)558 yards \nc)500 yards \nd)603 yards";
    document.view.qans.value="" 
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the most receiving? \na)National Horse League \nb)National Housing Lease \nc)Normal Horse Lancing \nd)National Hockey League";
    document.view.qans.value=""
}

	document.view.question.value ="What team has the best NBA record of All-Time? \na)Bulls 72-10 \nb)Warriors 73-9 \nc)Cavs 77-5 \nd)Spurs 74-8";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the most yars thrown by a QB in a NFL game?\na)554 yards \nb)558 yards \nc)500 yards \nd)603 yards";
    document.view.qans.value="" 
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the most receiving? \na)National Horse League \nb)National Housing Lease \nc)Normal Horse Lancing \nd)National Hockey League";
    document.view.qans.value=""
}
	document.view.question.value ="What team has the best NBA record of All-Time? \na)Bulls 72-10 \nb)Warriors 73-9 \nc)Cavs 77-5 \nd)Spurs 74-8";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the most yars thrown by a QB in a NFL game?\na)554 yards \nb)558 yards \nc)500 yards \nd)603 yards";
    document.view.qans.value="" 
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the most receiving? \na)5 \nb)7H \nc)3 Horse \nd)6";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which MLB team has won the most world series? \na)Boston Red Soxs \nb)New York Mets \nc)New York Yankees \nd)St. Louis Cardinals";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which MLB player holds the record for most home runs hit in a season with 762? \na)Barry Bonds\nb)Babe Ruth\nc)Hank Aaron\nd)John Cena";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who has the most career points in the NBA\na)Kareem Abdul - Jabbar \nb)Micheal Jordan\nc)LeBron James\nd)Earl Llyod";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who was the first African American player in the NBA? \na)Randy Orton \nb)Micheal Jackson\nc)Earl Llyod \nd)Pittsburgh Steelers";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which coach has the most career wins in the NFL?\na)Don Shula\nb)Bill Belicheck\nc)Thomas Henson \nd)Ehab Henin";
    document.view.qans.value=""
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who was the first pick in the 2007 NBA draft?\na)Kevin Durant\nb)Kyrie Irving\nc)Stephen Curry\nd)Greg Oden";
    document.view.qans.value=""
}
else if (i===11){
    alert("You got"+ " " + Math.round(score/(i-1)*100)  + "% for this Trivia Quiz")
if (score>=8) {
	
	alert("You got an 80% or above! Somebody knows their sports! Good job!")
}
else {
	
	alert("Don't feel bad not everbody wins on their first try, did MJ quit when he was cut from his high school team, NOPE! So you can do this.")
}
	}
	i++; 
}
