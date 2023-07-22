// default values in functions

function studentInfo(
  studentName: string,
  studentId: number,
  studentClass: number = 12
): void {
  console.log(studentName, studentId, studentClass);
}

studentInfo("arvind", 1);
