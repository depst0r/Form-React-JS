import React, { useState } from 'react'

export const App = () => {

  const [disabled, setDisabled] = useState(false)
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [phone, setPhone] = useState('')
  // const [password, setPassword] = useState('')
  const [dataForm, setDataForm] = useState({
      name: '',
      email: '',
      phone: '',
      password: ''
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

  const emptyString = ({name, email, phone, password}) => {

  }


  const handlerSubmitForm = event => {
    event.preventDefault()
    console.log(dataForm);
    emptyString(dataForm)
  }

  return<>
    <form onSubmit={handlerSubmitForm}>
    <div className="mb-3">
      <label htmlFor="exampleInputName1" className="form-label">User Name</label>
      <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" value={dataForm.name} onChange={e => setDataForm({...dataForm, name: e.target.value})} />
      <div id="nameHelp" className="form-text">
        
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={dataForm.email} onChange={e => setDataForm({...dataForm, email: e.target.value})} />
      <div id="emailHelp" className="form-text"></div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPhone1" className="form-label">Phone number</label>
      <input type="phone" className="form-control" id="exampleInputPhone1" aria-describedby="phoneHelp" value={dataForm.phone} onChange={e => setDataForm({...dataForm, phone: e.target.value})} />
      <div id="phoneHelp" className="form-text"></div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" value={dataForm.password} onChange={e => setDataForm({...dataForm, password: e.target.value})} />
    </div>
    <button type="submit" disabled={disabled} className="btn btn-primary">Submit</button>
  </form>
  </>
}

