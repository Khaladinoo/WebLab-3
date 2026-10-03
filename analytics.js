function calculateClassAvarage(student, courseId){
    let totalScore = 0;
    let count = 0;
    student.forEach(student => {
        const course = student.course.find(c => c.courseId === courseId);
        if (course) {
            totalScore += course.grade;
            count++;
        }
    });
    return count > 0 ? (totalScore / count).toFixed(2) : 0;
}
