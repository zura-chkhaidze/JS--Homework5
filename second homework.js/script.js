let input = document.querySelector(".input-block");
let add_Button = document.querySelector(".add-btn");
let ul_List = document.querySelector(".ul-list");
let clear_All_Items = document.querySelector(".clearall");
let form_Element = document.querySelector(".form-wraper");

form_Element.addEventListener("submit", function (event) {
  event.preventDefault();
  // 1. get input value
  let value = input.value;
  if (value == " ") {
    return;
  }
  // 2. input value add in ulItem
  let li = document.createElement("li");

  //ვამატებთ წაშლის ღილაკს
  let delete_Btn = document.createElement("button");
  delete_Btn.classList.add("fa-solid","fa-square-minus", "delete");
  delete_Btn.addEventListener("click", function () {
    li.remove();
  });

  li.innerText = value;

  li.appendChild(delete_Btn);
  ul_List.appendChild(li);

  // 3. clear input field
  input.value = " ";
});

clear_All_Items.addEventListener("click", function () {
  ul_List.innerHTML = " ";
});