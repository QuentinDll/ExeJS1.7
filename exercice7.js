function number(){

  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;

  var shoeSizeInt = parseInt(shoeSize);
  var yearOfBirthInt = parseInt(yearOfBirth);

  var shoeregex = /[2-5][\d]+$/;
  var yearregex = /^(?:19|20)[\d]{2}/;

  if(shoeregex.test(shoeSize) && yearregex.test(yearOfBirth)){

    var shoex = ((shoeSizeInt * 2) + 5) * 50;
    var result = (shoex - yearOfBirthInt) + 1766;

    alert(result)

  }else{
    alert('Veuillez réessayer');
  }
}
