import React from 'react'

const TeacherTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Lastname</th>
        <th>Inicio</th>
        <th>finalizacion</th>
      </tr>
    </thead>
    <tbody>
      {props.teachers.length > 0 ? (
        props.teachers.map((teacher) => (
          <tr key={teacher.id}>
            <td>{teacher.name}</td>
            <td>{teacher.lastname}</td>
            <td>{teacher.inicio}</td>
            <td>{teacher.finalizacion}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Teachers</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default TeacherTable