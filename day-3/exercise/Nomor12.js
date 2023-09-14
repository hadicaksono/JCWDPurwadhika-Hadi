// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others datatype.
let n= 2

switch (typeof n){
    case 'string' :
        console.log('string');
        break;
    case 'number' :
        console.log('number');
        break;
    case 'boolean' :
        console.log('boolean');
        break;
    case 'object':
        console.log('object');
        break;
    case 'null' :
        console.log('null');
        break;
    default:
        console.log('undefined');
}