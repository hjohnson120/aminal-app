import React, {useState} from 'react'

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  return (
    <form onSubmit={submitForm}>
      <section className="login-input">
        <input
          type="firstName"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="lastName"
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <button onClick={submitForm}>
          REGISTER
        </button>
      </section>
    </form>
  )
}