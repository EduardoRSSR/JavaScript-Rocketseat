
const arrow = [1, 2, 5, 3, 9, 6, 14];

const newArrow = arrow.map(function(item, index){
    return item+index;
});

console.log(newArrow);

const newArrow2 = arrow.reduce(function(total, next){
    return total+next;
});

console.log(newArrow2);

const filter = arrow.filter(function(item){
    
    return item % 2 ===0;
    
});

console.log(filter);

const find = arrow.find(function(item){
    return item === 2;
})

if(find != undefined){
console.log(find);
}else{
    console.log("nao encontrado")
}