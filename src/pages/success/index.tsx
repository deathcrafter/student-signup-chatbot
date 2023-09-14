import { useSelector } from "react-redux";
import { selectStudent } from "../../models/student";

export default function Success() {
  const student = useSelector(selectStudent);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-center">Success!</h1>
      <p className="text-center">
        Your name {student.name}, aged {student.age} has been added to the
        student system. You may exit now!
      </p>
    </div>
  );
}
