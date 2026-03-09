import { useParams } from "react-router-dom"

function StudentDetails() {

  const {id} = useParams()

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

  const student = studentData.find(s => s.id === parseInt(id))

  return (
    <div>

      <h2>Student Details</h2>

      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Course: {student.course}</p>

    </div>
  )
}

export default StudentDetails