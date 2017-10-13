var obj  = {higth: 20, width:40, length:20};
function hasProperty (obj, property){
    let res=-1;
    for (let key in obj){
        console.log (key);
        if (key == property) res=obj[key];
    }return res;
}
var hasProp = hasProperty(obj, 'length');
console.log(hasProp);
