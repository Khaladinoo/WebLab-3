function calculateClassAvarage(students, courseId){
    let totalScore = 0;
    let count = 0;
    students.forEach(student => {
        const course = student.courses.find(c => c.courseId === courseId);
        if (course) {
            totalScore += course.grade;
            count++;
        }
    });
    return count > 0 ? (totalScore / count).toFixed(2) : 0;
}
    function findTopStudent(students){
        if (!students || students.length === 0) return null;

        return students.reduce((top, current) => {
        return current.getAverage() > top.getAverage() ? current : top;
        });
    }
    function filterStudents(students, criteriaFn) {
        return students.filter(criteriaFn);
    }
    export{calculateClassAvarage, findTopStudent, filterStudents};

