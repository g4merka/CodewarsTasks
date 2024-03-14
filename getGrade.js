function getGrade (s1, s2, s3) {
    const averageScore = (s1 + s2 + s3) / 3;
    if (90 <= averageScore && averageScore <= 100){
        return 'A';
    }
    else if (80 <= averageScore && averageScore < 90){
        return 'B';
    }
    else if (70 <= averageScore && averageScore < 80){
        return 'C';
    }
    else if (60 <= averageScore && averageScore < 70){
        return 'D';
    }
    else {
        return 'F';
    }
}
getGrade(48,55,52);