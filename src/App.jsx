import React, { useState } from 'react'

export const App = () => {

  const [disabled, setDisabled] = useState(true)
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    phone: null,
    password: null
  })

  const sendDataForm = data => {
      fetch('https://form-a65b7-default-rtdb.firebaseio.com/dataForm.json', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'aplication/json'
        }
      })
        .then(res => res.json())
        .then(res => console.log(res))
  }

  sendDataForm(formData)

  const handlerSubmitForm = event => {
    event.preventDefault()
  }

  return<>
    <form onSubmit={handlerSubmitForm}>
    <div className="mb-3">
      <label htmlFor="exampleInputName1" className="form-label">User Name</label>
      <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
      <div id="nameHelp" className="form-text"></div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text"></div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPhone1" className="form-label">Email address</label>
      <input type="text" className="form-control" id="exampleInputPhone1" aria-describedby="phoneHelp" />
      <div id="phoneHelp" className="form-text"></div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" disabled={disabled} className="btn btn-primary">Submit</button>
  </form>
  </>
}


