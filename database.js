function fetchStudents(callback){
    console.log("Fetching data from database");
    const rawData = [
        {id: 1, name: "Ahmad", courses: [{ courseId: 101, grade: 90}, {courseId: 102, grade: 90}]},
        {id: 1, name: "Salih", courses: [{ courseId: 101, grade: 80}, {courseId: 102, grade: 85}]},
        {id: 1, name: "Khaldoun", courses: [{ courseId: 101, grade: 70}, {courseId: 102, grade: 75}]},
    ];
    setTimeout(() => {
        console.log("Data received!\n");
        callback(rawData);
    }, 2000);
}
export{fetchStudents};