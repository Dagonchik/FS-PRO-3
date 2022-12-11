const findElement = (id, array) => {
    return array.find((element) => element.id === id);
}

const array = [
    {
        id: 1,
        name: 'Ivan'
    },
    {
        id: 4,
        name: 'John'
    }
]

module.exports.find = findElement;
module.exports.data = array;