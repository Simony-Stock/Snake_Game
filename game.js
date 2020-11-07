document.addEventListener('DOMContentLoaded', () => {

var toAdd = document.createDocumentFragment();
for(var i=0; i < 1400; i++){
  {
    var newDiv = document.createElement('div');
    newDiv.id = i;
    newDiv.className = "board";
    newDiv.innerHTML = "";
    toAdd.appendChild(newDiv)
  }
  document.body.append(toAdd);
}
})
