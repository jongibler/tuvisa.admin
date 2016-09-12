exports.copyPropsByName = function copyPropsByName(fromObject, toObject) {
    for (var k in fromObject) toObject[k] = fromObject[k];
};