import { useState, useEffect } from "react"
import StudentList from "../components/StudentList"

function Students() {

  const [students, setStudents] = useState([])

  const studentData = [
    {id:1, name:"John Cruz", course:"BSIT"},
    {id:2, name:"Maria Santos", course:"BSCS"},
    {id:3, name:"Pedro Reyes", course:"BSIT"},
    {id:4, name:"Ana Lopez", course:"BSCS"},
    {id:5, name:"Carlos Garcia", course:"BSIT"},
    {id:6, name:"Liza Ramos", course:"BSCS"},
    {id:7, name:"Mark Dela Cruz", course:"BSIT"},
    {id:8, name:"Sarah Lim", course:"BSCS"},
    {id:9, name:"Paul Tan", course:"BSIT"},
    {id:10, name:"Angel Bautista", course:"BSCS"}
  ]

  useEffect(() => {
    setStudents(studentData)
  }, [])

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <StudentList key={student.id} student={student}/>
      ))}

    </div>
  )
}

export default Students