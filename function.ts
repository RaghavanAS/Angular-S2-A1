// FAT Arrow function with two parameters
var myFunc = (x: string, y:number): string =>
{
    return "The String passed is '"+x + "' \nThe Number passed is  " + y;
};
//alert box to call the function and display the values in HTML
alert(myFunc("hello", 2));