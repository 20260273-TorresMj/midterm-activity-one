import { Link } from "react-router-dom"

function StudentList({ student }) {
  return (
    <div>
      <p>Name: {student.name}</p>
      <p>Course: {student.course}</p>

      <Link to={`/student/${student.id}`}>
        View Details
      </Link>
      <hr />
    </div>
  )
}

export default StudentList