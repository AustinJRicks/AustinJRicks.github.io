function nextPage1() {
document.getElementById("page1").style.display = "none";
	document.getElementById("page4").style.display = "";
}



function nextPage3() {

	var pass=true;	
	if($("input[name='q1']:checked").val()==0) {$("#question1").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question1").removeClass("missedQuestion");}
	if($("input[name='q2']:checked").val()==0) {$("#question2").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question2").removeClass("missedQuestion");}
	if(document.getElementById("q3").value.length==0) {$("#question3").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question3").removeClass("missedQuestion");}
	if($("input[name='q4']:checked").val()==0) {$("#question4").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question4").removeClass("missedQuestion");}
	if($("input[name='q5']:checked").val()==0) {$("#question5").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question5").removeClass("missedQuestion");}
	if($("input[name='q6']:checked").val()==0) {$("#question6").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question6").removeClass("missedQuestion");}
	if($("input[name='q7']:checked").val()==0) {$("#question7").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question7").removeClass("missedQuestion");}
	if($("input[name='q13a']:checked").size()==0) {$("#question13a").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question13a").removeClass("missedQuestion");}
	if($("input[name='q13b']:checked").val()==0) {$("#question13b").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question13b").removeClass("missedQuestion");}
	if($("input[name='q8a']:checked").val()==0) {$("#question8a").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question8a").removeClass("missedQuestion");}
	if($("input[name='q8b']:checked").val()==0) {$("#question8b").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question8b").removeClass("missedQuestion");}
	if($("input[name='q8c']:checked").val()==0) {$("#question8c").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question8c").removeClass("missedQuestion");}
	if($("input[name='q8d']:checked").val()==0) {$("#question8d").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question8d").removeClass("missedQuestion");}
	if($("input[name='q8e']:checked").val()==0) {$("#question8e").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question8e").removeClass("missedQuestion");}
	if($("input[name='q8f']:checked").val()==0) {$("#question8f").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage3").style.display = "";} else {$("#question8f").removeClass("missedQuestion");}
	
	
	if (pass){
		
		
		//if no car hide question about cars
		if($("input[name='q5']:checked").val()==2) {
		document.getElementById("question9").style.display = "none";
		document.getElementById("question10").style.display = "none";
		}
		
		//if no SL card hide questions about SL card
		if($("input[name='q6']:checked").val()==2) {
		document.getElementById("question11").style.display = "none";
		document.getElementById("question12").style.display = "none";
		}
		
		//hide about campuses where person studies or work
		if(document.getElementsByName("q13a")[0].checked) {document.getElementsByClassName('tableMain')[0].style.display="none";document.getElementsByClassName('tableMain')[1].style.display="none";document.getElementsByClassName('tableMain')[2].style.display="none";document.getElementsByClassName('tableMain')[3].style.display="none";document.getElementsByClassName('tableMain')[4].style.display="none";}
		if(document.getElementsByName("q13a")[1].checked) {document.getElementsByClassName('tableSodertalje')[0].style.display="none";document.getElementsByClassName('tableSodertalje')[1].style.display="none";document.getElementsByClassName('tableSodertalje')[2].style.display="none";document.getElementsByClassName('tableSodertalje')[3].style.display="none";document.getElementsByClassName('tableSodertalje')[4].style.display="none";}
		if(document.getElementsByName("q13a")[2].checked) {document.getElementsByClassName('tableFleminsberg')[0].style.display="none";document.getElementsByClassName('tableFleminsberg')[1].style.display="none";document.getElementsByClassName('tableFleminsberg')[2].style.display="none";document.getElementsByClassName('tableFleminsberg')[3].style.display="none";document.getElementsByClassName('tableFleminsberg')[4].style.display="none";}
		if(document.getElementsByName("q13a")[3].checked) {document.getElementsByClassName('tableKista')[0].style.display="none";document.getElementsByClassName('tableKista')[1].style.display="none";document.getElementsByClassName('tableKista')[2].style.display="none";document.getElementsByClassName('tableKista')[3].style.display="none";document.getElementsByClassName('tableKista')[4].style.display="none";}
		if(document.getElementsByName("q13a")[4].checked) {document.getElementsByClassName('tableAlbanova')[0].style.display="none";document.getElementsByClassName('tableAlbanova')[1].style.display="none";document.getElementsByClassName('tableAlbanova')[2].style.display="none";document.getElementsByClassName('tableAlbanova')[3].style.display="none";document.getElementsByClassName('tableAlbanova')[4].style.display="none";}
		if(document.getElementsByName("q13a")[5].checked) {document.getElementsByClassName('tableSolna')[0].style.display="none";document.getElementsByClassName('tableSolna')[1].style.display="none";document.getElementsByClassName('tableSolna')[2].style.display="none";document.getElementsByClassName('tableSolna')[3].style.display="none";document.getElementsByClassName('tableSolna')[4].style.display="none";}
		
		document.getElementById("page3").style.display = "none";
		document.getElementById("page4").style.display = "";		
					
	}
	
}

function nextPage4() {

document.getElementsByName("q17a")[1].parentNode.parentNode.classList.add("missedQuestion");




var pass=true;
if($("input[name='q5']:checked").val()==1) {
	if($("input[name='q9']:checked").val()==0) {$("#question9").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {$("#question9").removeClass("missedQuestion");}
	if($("input[name='q10']:checked").val()==0) {$("#question10").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {$("#question10").removeClass("missedQuestion");}
	}

if($("input[name='q6']:checked").val()==1) {
	if($("input[name='q11']:checked").val()==0) {$("#question11").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {$("#question11").removeClass("missedQuestion");}
	if($("input[name='q12']:checked").val()==0) {$("#question12").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {$("#question12").removeClass("missedQuestion");}
	}	
	
		if(document.getElementsByName("q13a")[0].checked==false){
			if($("input[name='q13c1']:checked").val()==0) {document.getElementsByName("q13c1")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13c1")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13d1']:checked").val()==0) {document.getElementsByName("q13d1")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13d1")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13e1']:checked").val()==0) {document.getElementsByName("q13e1")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13e1")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13f1']:checked").val()==0) {document.getElementsByName("q13f1")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13f1")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13g1']:checked").val()==0) {document.getElementsByName("q13g1")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13g1")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
		}


		if(document.getElementsByName("q13a")[1].checked==false){
			if($("input[name='q13c2']:checked").val()==0) {document.getElementsByName("q13c2")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13c2")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13d2']:checked").val()==0) {document.getElementsByName("q13d2")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13d2")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13e2']:checked").val()==0) {document.getElementsByName("q13e2")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13e2")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13f2']:checked").val()==0) {document.getElementsByName("q13f2")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13f2")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13g2']:checked").val()==0) {document.getElementsByName("q13g2")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13g2")[1].parentNode.parentNode.classList.remove("missedQuestion");}	

		}

		if(document.getElementsByName("q13a")[2].checked==false){
			if($("input[name='q13c3']:checked").val()==0) {document.getElementsByName("q13c3")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13c3")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13d3']:checked").val()==0) {document.getElementsByName("q13d3")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13d3")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13e3']:checked").val()==0) {document.getElementsByName("q13e3")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13e3")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13f3']:checked").val()==0) {document.getElementsByName("q13f3")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13f3")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13g3']:checked").val()==0) {document.getElementsByName("q13g3")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13g3")[1].parentNode.parentNode.classList.remove("missedQuestion");}	

		}
		
		if(document.getElementsByName("q13a")[3].checked==false){
			if($("input[name='q13c4']:checked").val()==0) {document.getElementsByName("q13c4")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13c4")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13d4']:checked").val()==0) {document.getElementsByName("q13d4")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13d4")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13e4']:checked").val()==0) {document.getElementsByName("q13e4")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13e4")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13f4']:checked").val()==0) {document.getElementsByName("q13f4")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13f4")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13g4']:checked").val()==0) {document.getElementsByName("q13g4")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13g4")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
		}
		

		if(document.getElementsByName("q13a")[4].checked==false){
			if($("input[name='q13c5']:checked").val()==0) {document.getElementsByName("q13c5")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13c5")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13d5']:checked").val()==0) {document.getElementsByName("q13d5")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13d5")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13e5']:checked").val()==0) {document.getElementsByName("q13e5")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13e5")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13f5']:checked").val()==0) {document.getElementsByName("q13f5")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13f5")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13g5']:checked").val()==0) {document.getElementsByName("q13g5")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13g5")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
		}
		

		if(document.getElementsByName("q13a")[5].checked==false){
			if($("input[name='q13c6']:checked").val()==0) {document.getElementsByName("q13c6")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13c6")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
			if($("input[name='q13d6']:checked").val()==0) {document.getElementsByName("q13d6")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13d6")[1].parentNode.parentNode.classList.remove("missedQuestion");}		
			if($("input[name='q13e6']:checked").val()==0) {document.getElementsByName("q13e6")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13e6")[1].parentNode.parentNode.classList.remove("missedQuestion");}		
			if($("input[name='q13f6']:checked").val()==0) {document.getElementsByName("q13f6")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13f6")[1].parentNode.parentNode.classList.remove("missedQuestion");}		
			if($("input[name='q13g6']:checked").val()==0) {document.getElementsByName("q13g6")[1].parentNode.parentNode.classList.add("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {document.getElementsByName("q13g6")[1].parentNode.parentNode.classList.remove("missedQuestion");}	
		}
		
		

	
	if($("input[name='q14']:checked").val()==0) {$("#question14").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {$("#question14").removeClass("missedQuestion");}	
	if($("input[name='q15']:checked").val()==0) {$("#question15").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {$("#question15").removeClass("missedQuestion");}	
	if($("input[name='q16']:checked").val()==0) {$("#question16").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {$("#question16").removeClass("missedQuestion");}	
	if($("input[name='q17a']:checked").val()==0) {$("#question17a").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {$("#question17a").removeClass("missedQuestion");}	
	if($("input[name='q17b']:checked").val()==0) {$("#question17b").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {$("#question17b").removeClass("missedQuestion");}	
	if($("input[name='q17c']:checked").val()==0) {$("#question17c").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {$("#question17c").removeClass("missedQuestion");}	
	if($("input[name='q17d']:checked").val()==0) {$("#question17d").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {$("#question17d").removeClass("missedQuestion");}	
	if($("input[name='q17e']:checked").val()==0) {$("#question17e").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {$("#question17e").removeClass("missedQuestion");}	
	if($("input[name='q17f']:checked").val()==0) {$("#question17f").addClass("missedQuestion"); pass=false; document.getElementById("madtatoryPage4").style.display = "";} else {$("#question17f").removeClass("missedQuestion");}	
	

if (pass){
		document.getElementById("page4").style.display = "none";
		document.getElementById("page5").style.display = "";
		
		}			
	
}
function nextPage5() {

	var pass=true;
	
	if(document.getElementById("carLeft").value.length==0) {pass=false; document.getElementById("madtatoryPage5").style.display = "";}
	if(document.getElementById("busLeft").value.length==0) {pass=false; document.getElementById("madtatoryPage5").style.display = "";}
	if(document.getElementById("railLeft").value.length==0) {pass=false; document.getElementById("madtatoryPage5").style.display = "";}
	if(document.getElementById("miniLeft").value.length==0) {pass=false; document.getElementById("madtatoryPage5").style.display = "";}

	if (pass){
		document.getElementById("page5").style.display = "none";
		document.getElementById("MobilityForm").submit();
	}
}