var arr = [3,4,5,6,76,7,8];

var pushedarr = [9,10,11,12];

//Original array
console.log(arr);

//loop to push elements to array
for(var i=0; i<pushedarr.length; i++){
    arr.push(pushedarr[i]);
}
//array after elements pushed to it
console.log(arr);
// loop to pop pushed array elemnts and make an array of popped elements
var popArr = [];
for (var i=0;i<pushedarr.length;i++){
    var popEle = (arr.pop());
    popArr.push(popEle);
}
//array of popped elements
console.log(popArr);
// console.log(popArr.reverse());

//function to chagne index of first element in an array to fourth index
function changeIndex(arr){
var arrFirst = (arr.splice(0,1));
arr.splice(3,0,parseInt(arrFirst.toString()));
return(arr);
}
// forEach loop used to list all items of the array
var changeIndexarr = changeIndex(arr);
changeIndexarr.forEach(function(item){
console.log(item);
});


