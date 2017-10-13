var person = [
    {firstname: 'Gosho', lastname: 'Petrov', age: '32'},
    {firstname: 'Bay', lastname: 'Ivan', age: '81'},
    {firstname: 'John', lastname: 'Doe', age: '2'}
];

function youngestPerson(person){
let young=parseInt(person[0].age), key=0;
for (var i in person){
    page = parseInt(person[i].age)
//    console.log(parseInt(person[i].age));
        if (young > page) { young=page, key=i; }
    }
  return (person[key].firstname +' '+ person[key].lastname);
}
console.log(youngestPerson(person));

