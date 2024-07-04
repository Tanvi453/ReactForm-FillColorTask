
import './App.css';
import { useState } from 'react';

function App() {
  const [student, setStudent] = useState({ uname1: "", email1: "", gender: "" });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.name);
    setStudent({ ...student, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setData([...data, student])
  }
  console.log(student);
  console.log(data);

  return (

    <div>
      
      <h1 style={{ marginTop: '5%' }}>Objects</h1>

      <div>
        <label htmlFor="uname1">User ame:</label>
        <input type="text" id="uname1" name="uname1" value={student.uname1} onChange={(e) => handleChange(e)} />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email1" name="email1" value={student.email1} onChange={(e) => handleChange(e)} />
      </div>

      <div>
        <label htmlFor="gender">Gender:</label>
        <input type="radio" name="gender" id="male" value="Male" onChange={(e) => handleChange(e)} />Male
        <input type="radio" name="gender" id="female" value="female" onChange={(e) => handleChange(e)} />female
      </div>

      <button type='submit' onClick={() => handleSubmit()}>Submit</button>

    </div>
  );
}

export default App;

