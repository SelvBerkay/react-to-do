export default function FormList({tasks, handleRemoveBtn, handleEditBtn}) {
  return (
   <>  
      <div className="card mt-3 p-3 mx-auto bg-secondary">
        <div className="card-header text-center text-white">ToDo List</div>
        <div className="card-body">
          <div className="row w-75 mx-auto">
            {
              tasks.map((task,index) => (
                <div className='col-sm-3 mb-3 text-center' key={index}>
                  <div className={"card" + (task.isImportant ? ' bg-danger text-white' : '')}>
                    <div className="card-header d-flex justify-content-between">
                      <h5 className="card-title">{task.title}</h5>
                      {
                        task.isImportant ? <i className="bi bi-info-circle-fill text-black"></i> : <></>
                      }
                    </div>
                    <div className="card-body d-flex flex-column align-items-center">
                      <p className="card-text">{task.task}</p>
                      <div className="btn-group mt-2 w-50" role="group" aria-label="Basic mixed styles example">
                        <i className="btn bg-dark text-white bi bi-trash-fill" onClick={e => handleRemoveBtn(index)}></i>
                        <i className="btn bg-warning  bi bi-pencil-fill" onClick={e => handleEditBtn(index, e)}></i>
                      </div>
                    </div>
                  </div>
                </div>))
            }
          </div>
        </div>
      </div>
   </> 
  )
}