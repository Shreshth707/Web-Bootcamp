// HOF, action is a function
// OCP
function forEach(elems, action) {
    for(i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
// HOF to get sub-set
function filter(elems, predicate) {
    var result = [];
    forEach(elems, function(e) {
        if(predicate(e)) {
            result.push(e);
        }
    });
    return result;
}