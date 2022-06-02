function GeneratePreview(){

  var z=document.getElementById("NamF").value;
    document.getElementById("getNamF").innerHTML=z;

    var y=document.getElementById("NumF").value;
    document.getElementById("getNumF").innerHTML=y;

    document.getElementById('tempout').style.display="block";

  } 

  function PrintResume(){

    document.getElementById('forminp').style.display="none";
    document.getElementById('Previewbtn').style.display="none";
    document.getElementById('printbtn').style.display="none";
    window.print();
    
  }