let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//Print Preview & Print Buttons Script

function GeneratePreview(){

    var z=document.getElementById("NamF").value;
    document.getElementById("getNamF").innerHTML=z;

    var u=document.getElementById("NamF").value;
    document.getElementById("getNamF1").innerHTML=u;

    var y=document.getElementById("NumF").value;
    document.getElementById("getNumF").innerHTML=y;

    var x=document.getElementById("EmailF").value;
    document.getElementById("getEmailF").innerHTML=x;

    var w=document.getElementById("AddF").value;
    document.getElementById("getAddF").innerHTML=w;

    var v=document.getElementById("ObjF").value;
    document.getElementById("getObjF").innerHTML=v;

    var t=document.getElementById("ExpF").value;
    document.getElementById("getExpF").innerHTML=t;

    var s=document.getElementById("SkillF").value;
    document.getElementById("getSkillF").innerHTML=s;

    var r=document.getElementById("LangF").value;
    document.getElementById("getLangF").innerHTML=r;

    document.getElementById('tempout').style.display="block";

  } 

  function PrintResume(){

    document.getElementById('forminp').style.display="none";
    document.getElementById('Previewbtn').style.display="none";
    document.getElementById('printbtn').style.display="none";
    document.getElementById('footer').style.display="none";
    document.getElementById('topbranding').style.display="none";   

    window.print();
    
  }