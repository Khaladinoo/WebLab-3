import { Student } from "./models";
import { fetchStudents } from "./database";
import { calculateClassAvarage,findTopStudent, filterStudents } from "./analytics";

fetchStudents((rawData) => {
    const students = rawData.map(data => new Student(data.id, data.name, data.courses));

    console.log("Testing Immutability:");
    console.log('Original ID: ${students[0].id}');
    console.log("Attempting to change ID to 999");
    try{
        students[0].id = 999;
    }catch (e){

    }
    console.log('Final ID: ${students[0].id} (success: ID did not change)\n');

    console.log("Analytics Report");

    const avg101 = calculateClassAvarage(students, 101);
    console.log('Class Avrage for Course 101: ${avg101}');

    const topStudent = findTopStudent(students);
    if(topStudent){
        console.log('Top Student: ${topStudent.name} (Average: ${topStudent.getAverage().toFixed(1)})');
        
    }

    
    
})