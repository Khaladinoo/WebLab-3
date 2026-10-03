import { Student } from "./models";
import { fetchStudents } from "./database";
import { calculateClassAvarage,findTopStudent, filterStudents } from "./analytics";

fetchStudents((rawData) => {
    const students = rawData.map(data => new Student(data.id, data.name, data.courses));
})