import React, { useState } from 'react'

export const App = () => {

  const [disabled, setDisabled] = useState(true)
  const [formDara, setFormData] = useState({
    name: null,
    email: null,
    phone: null,
    password: null
  })

  const sendDataForm = () => {
    
  }

  const handlerSubmitForm = event => {
    event.preventDefault()
  }

  return<>
    <form onSubmit={handlerSubmitForm}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text"></div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" disabled={disabled} className="btn btn-primary">Submit</button>
  </form>
  </>
}


