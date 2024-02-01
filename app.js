const inputTxt = document.querySelector('.input-txt')
const allTaskList = document.querySelector('.allTasks')
const addBtn = document.querySelector('.addBtn')
const saveBtn = document.querySelector('.saveBtn')
const cancleBtn = document.querySelector('.cancleBtn')

function deleteTask(unitTask) {
  unitTask.remove()
}

function reset() {
  allTaskList.style.display = 'block'
  addBtn.style.display = 'block'
  saveBtn.style.display = 'none'
  inputTxt.value = ''
}

cancleBtn.addEventListener('click', reset)

function editTask(taskHead) {
  allTaskList.style.display = 'none'
  addBtn.style.display = 'none'
  saveBtn.style.display = 'block'
  inputTxt.value = taskHead.innerText

  //onek bhebechi bhai                           timestamp:11:32pm
  saveBtn.addEventListener('click', () => {
    let newTask = inputTxt.value
    if (newTask.trim() === '') return

    taskHead.innerHTML = newTask
    reset()
  })
}

function addTask(task) {
  if (task.trim() === '') return
  const taskHead = document.createElement('h3')
  const btnDiv = document.createElement('div')
  const editBtn = document.createElement('p')
  const deleteBtn = document.createElement('p')
  const unitTask = document.createElement('li')

  editBtn.className = 'editBnt'
  deleteBtn.className = 'deleteBtn'
  btnDiv.className = 'actionBtns'
  unitTask.className = 'unitTask'

  taskHead.innerHTML = task
  deleteBtn.innerHTML = 'Delete'
  editBtn.innerHTML = 'Edit'

  unitTask.appendChild(taskHead)
  btnDiv.appendChild(editBtn)
  btnDiv.appendChild(deleteBtn)
  unitTask.appendChild(btnDiv)

  allTaskList.appendChild(unitTask)

  taskHead.addEventListener('click', () => {
    taskHead.classList.toggle('checked')
  })

  deleteBtn.addEventListener('click', () => {
    deleteTask(unitTask)
  })
  editBtn.addEventListener('click', () => {
    editTask(taskHead)
  })
}

addBtn.addEventListener('click', () => {
  addTask(inputTxt.value)
  //   console.log(inputTxt.value)
  inputTxt.value = ''
})
