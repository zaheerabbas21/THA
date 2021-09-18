var userInput = document.getElementById("userInput");
var addButton = document.getElementById("addButtonId");
var tasks = document.getElementById("taskList");

function getUserInputLength() {
  return userInput.value.length;
}

function getListCount() {
  return document.getElementsByTagName("li").length;
}

function createListItem() {
  var li = document.createElement("li");
  li.classList.add("list-item");
  li.appendChild(document.createTextNode(userInput.value));
  li.addEventListener("click", toggleTaskDone);
  tasks.appendChild(li);
  userInput.value = "";

  var delButton = document.createElement("button");
  // delButton.innerHTML = '<img src="./images/delete.svg" alt="Delete Icon">';
  var image = document.createElement("img");
  image.src = "./images/delete.svg";
  delButton.appendChild(image);
  delButton.classList.add("deleteButton");
  delButton.addEventListener("click", delItem);
  li.append(delButton);

  if (getListCount() > 0) {
    var emptyList = document.querySelector("h2");
    emptyList.style.display = "none";
  }

  function toggleTaskDone() {
    li.classList.toggle("task-done");
  }

  function delItem() {
    li.remove();
    if (getListCount() === 0) {
      var emptyList = document.querySelector("h2");
      emptyList.style.display = "block";
    }
  }
}

function addClick() {
  if (getUserInputLength() > 0) {
    createListItem();
  }
}

function addKey(event) {
  if (getUserInputLength() > 0 && event.keyCode === 13) {
    createListItem();
  }
}

addButton.addEventListener("click", addClick);
userInput.addEventListener("keypress", addKey);
