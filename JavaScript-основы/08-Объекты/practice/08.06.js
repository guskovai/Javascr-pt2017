var people = [
  { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'John', lastname: 'Doe', age: 42 },
  { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
  { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
  { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];
function group (inArr){
var sortArr={};
for (var i in inArr){
    if (inArr[i].age in sortArr){sortArr[inArr[i].age].push(inArr[i]);
        } else 
            sortArr[inArr[i].age]=[inArr[i],];
    }
    return sortArr;
}
var groupedByAge = group(people);
console.log(groupedByAge);
