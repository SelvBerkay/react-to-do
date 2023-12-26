import { useState } from 'react'
import FormList from './components/FormList'
function App() {
  const [tasks, setTasks] = useState([])
  const [isEdit, setIsEdit] = useState(false)

  function handleSubmitBtn(e) {
    console.log(e.target.elements)
    let formTitle = e.target.elements[0]
    let formTask = e.target.elements[1]
    let formImportant = e.target.elements[2]
    e.preventDefault()
    if (newTitle != "" && newTask != "") {
      if(!isEdit) {
        const updatedTasks = [...tasks, {
          id : tasks.length,
          title : formTitle.value,
          task : formTask.value,
          isImportant : formImportant.checked,
          isSelected : false
        }]
        setTasks(updatedTasks)
      } else if (isEdit) {
        tasks.map(item => {
          if(item.isSelected) {
            item.title = formTitle.value
            item.task  = formTask.value
            item.isImportant = formImportant.checked
            item.isSelected = false
          }
        }) 
      }
    }
    setIsEdit(false)
    e.target.reset()
    console.log(isEdit)
  }
  function handleRemoveBtn(selectedIndex) {
    const newTasks = tasks.filter((task,index) => index !== selectedIndex)
    setTasks(newTasks)
  }

  function handleEditBtn(selectedIndex, e) {
    const form = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousSibling
    console.log(form)
    let formTitle = form.elements[0]
    let formTask = form.elements[1]
    let formImportant = form.elements[2]
    setIsEdit(true)
    tasks.map((item,index) => {
      if(index === selectedIndex) {
        item.isSelected = true
        formTitle.value = item.title
        formTask.value = item.task
        formImportant.checked = item.isImportant 
      }
    })
  }
  

  return (
    <>
      <form className="d-flex flex-column justify-content-center align-items-center w-100 mt-3" onSubmit={handleSubmitBtn}>
        <div className="mb-3">
          <label htmlFor="newTitle" className="form-label">Enter your task's title</label>
          <input type="text" className="form-control" id="newTitle" name='newTitle'/>
        </div>
        <div className="mb-3">
          <label htmlFor="newTask" className="form-label">Enter your task</label>              <input type='text' className="form-control" id="newTask" name='newTask'></input>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="newIsImportant" name='newIsImportant'/>
          <label className="form-check-label" htmlFor="newIsImportant">Önemli</label>
        </div>
        <button type="submit" className={"btn" + (isEdit ? ' btn-warning' : ' btn-primary')}>{isEdit ? "Kaydet" : "Ekle"}</button>
      </form>
      {/* list group */}
      {
        tasks.length > 0 ? <FormList tasks={tasks} handleRemoveBtn={handleRemoveBtn} handleEditBtn={handleEditBtn}/> : <></>
      } 
    </>
    )
  }

export default App
