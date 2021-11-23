const input = document.getElementById("input");
const addFoods = document.getElementById("addFoods");
const addHow = document.getElementById("addHow");


input.addEventListener('change', function(e) {
  let file = e.target.files[0];
  const blobUrl = window.URL.createObjectURL(file);
  const img = document.getElementById("preview")
  img.src = blobUrl;
  img.height = 400;
});


addFoods.addEventListener('click', function(e) {
  const newForm = document.getElementById("foods")
  const newForm2 = document.getElementById("quan");
  const clone = newForm.firstElementChild.cloneNode(true);
  const clone2 = newForm2.firstElementChild.cloneNode(true);

  newForm.appendChild(clone);
  newForm2.appendChild(clone2);
});


addHow.addEventListener('click', function(e) {
  const newform3 = document.getElementById("textHow");
  const clone3 = newform3.firstElementChild.cloneNode(true);

  newform3.appendChild(clone3);
});
