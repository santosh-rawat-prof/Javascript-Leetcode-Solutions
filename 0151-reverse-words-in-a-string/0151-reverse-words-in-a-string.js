/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const string = s.split(" ");
    const stack = [];
    
    for(let i of string) {
        stack.push(i);
    }
    
    let finalString = "";
    
    while(stack.length) {
        const currentElement = stack.pop();
        
        if(currentElement) {
            finalString += " " + currentElement;
        }
    }
    return finalString.trim();
};