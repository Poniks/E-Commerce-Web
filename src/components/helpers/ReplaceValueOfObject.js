//Replace object property in array without mutating it

function ReplaceValueOfObject(oldArray, id, key, value) {

    const objIndex = oldArray.findIndex((obj) => obj.id === id);

    const updatedObj = { ...oldArray[objIndex], [key]: value };

    const newUpdatedArray = [
        ...oldArray.slice(0, objIndex),
        updatedObj,
        ...oldArray.slice(objIndex + 1)
    ];

    return newUpdatedArray;
}

export default ReplaceValueOfObject;