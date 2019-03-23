export const findIndexNested = function(messageData, index){
    if (messageData.index === index) return [];
    let result;
    const i = (messageData.children || []).findIndex(child => {
        return result = findIndexNested(child, index)
    });
    if (result) return [i, ...result];
}

export const getCurrentIndexProp = function(indexArray, data){
    let day;
    switch (indexArray.length) {
        case 0:
            day = data[indexArray[0]];
            break;
        case 1:
            day = data[indexArray[0].children];
            break;
        case 2:
            day = data[indexArray[0].children[indexArray[1]].children];
            break;
        case 3:
            day = "X";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5: 
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break
        default: 
            day = "default"
    }
    return day;
}
