const gradleCalc = (score, totalScore) => {

    if (typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('Please provide numbers')
    }
    const percentage = score / totalScore * 100

    let grade = ''

    if (percentage > 90) {
        grade = 'A'
    } else if (percentage >= 80) {
        grade = 'B'
    } else if (percentage >= 70) {
        grade = 'C'
    } else if (percentage >= 60) {
        grade = 'D'
    } else if (percentage >= 50) {
        grade = 'E'
    } else {
        grade = 'F'
    }

    return `your got a grade of ${grade} with a percentage as ${percentage}`
}

try {
    const result = gradleCalc(true, 1000)
    console.log(result)
} catch (e) {
    console.log(e.message)
}


