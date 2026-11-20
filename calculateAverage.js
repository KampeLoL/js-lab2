// Средний балл группы
function calculateAverage(data) {
    if (data.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum = sum + data[i].score;
    }
    return sum / data.length;
}

module.exports = calculateAverage;
