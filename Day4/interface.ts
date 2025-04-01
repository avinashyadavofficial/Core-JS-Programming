interface Rectangle{ //this refers as type
    height:number,
    width:number

}
const rect:Rectangle={
    height:20,
    width:30
}
console.log(rect);

interface ColorRec extends Rectangle{
    color:string
}

const a: ColorRec={
    height:10,
    width:20,
    color:"red"
};
console.log(a);
