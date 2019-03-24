export const findIndexNested = function(messageData, index){
    if (messageData.index === index) return [];
    let result;
    const i = (messageData.children || []).findIndex(child => {
        return result = findIndexNested(child, index)
    });
    if (result) return [i, ...result];
}

export const findByPath = function(path, data) {
    for (let i of Array.from(path))
    data = data.children[i];
    // console.log("---->", data);
    return data
}

export const trimName = function(name){
    return name.slice(0, 18);
}