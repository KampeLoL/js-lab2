// Имена студентов, у которых балл ниже проходного
function filterFailed(data, passScore) {
    let result = [];
    for (let student of data) {
        if (student.score < passScore) {
            result.push(student.name);
        }
    }
    return result;
}

module.exports = filterFailed;
