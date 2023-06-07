let taskForm = document.getElementById("task-form");
console.log(taskForm);

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskInputField = document.getElementById("task-input");
  const task = taskInputField.value;
  console.log(task);

  //creao il div vuoto
  let newTask = document.createElement("div");
  //assegno una classe a div
  newTask.classList.add("task");
  //riempio il div
  newTask.innerHTML = `
     <p><i class="far fa-square"></i> ${task}</p>
     `;
  //prendo il div lista promemoria
  let taskList = document.getElementById("task-list");
  console.log(taskList);
  //attaco il nuovo div promemoria al div lista
  taskList.appendChild(newTask);

  //cerco tutti gli i sotto classe .task
  const allI = document.querySelectorAll(".task i");
  allI.forEach((i) => {
    i.addEventListener("click", function (e) {
      let iClicked = e.target;
      //assegno al parent di i (p) una classe
      let parentI = iClicked.parentElement
      iClicked.parentElement.classList.add("task-complete");
      //rimuovo la i
      iClicked.remove();


      let newI = document.createElement("i");
      newI.innerHTML = `<i class="fas fa-square"></i>`
      parentI.insertBefore(newI, parentI.firstChild)

    });
  });

  taskInputField.value = "";
});
