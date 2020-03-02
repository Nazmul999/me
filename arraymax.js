var marks = [44, 55, 66, 88, 99, 77, 54 ];
var max = marks [0];

for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("higest value is: ", max);