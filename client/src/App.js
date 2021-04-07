import React, { useState } from 'react'
import TeacherTable from './components/TeacherTable'

const App = () => {

  const teachersData = [
    { id: 1, name: 'Tania', lastname: 'floppydiskette', inicio: "16:00:00" , finalizacion: "18:00:00"},
    { id: 2, name: 'Craig', lastname: 'siliconeidolon', inicio: "12:00:00" , finalizacion: "14:00:00" },
    { id: 3, name: 'Ben', lastname: 'benisphere', inicio: "10:00:00" , finalizacion: "12:00:00" },
  ]

  const [teachers, setteachers] = useState(teachersData)

  const addTeacher = (teacher) => {
    teacher.id = teachers.length + 1
    setteachers([...teachers, teacher])
  }

  return (
    <div className="container">
      <h1>CRUD Teacher</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Form teacher</h2>
        </div>
        <div className="flex-large">
          <h2>List teachers</h2>
          <TeacherTable teachers={teachers} />
        </div>
      </div>
    </div>
  )
}

export default App