function pop(elem){
  var modal = document.getElementById("myModal");
  var img = elem.getElementsByTagName("img")[0];
  var modalImg = document.getElementById("img01");
  
  modal.style.display = "block";
  modalImg.src = img.src;
   
// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
 span.onclick = function() {
  modal.style.display = "none";
  }
}






