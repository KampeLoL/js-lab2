// Имя студента с максимальным баллом
function findTopStudent(data) {
    if (data.length === 0) {
        return null;
    }
    let top = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i].score > top.score) {
            top = data[i];
        }
    }
    return top.name;
}

module.exports = findTopStudent;
