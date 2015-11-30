var relationship = {

  "getRelationship" : function getRelationship(x, y) {
    var xchk = false, ychk=false;
    var retVal = "";
    if((Number.isInteger(x)) && (x !== undefined) && (!isNaN(x)) )
    {
        xchk = true;
    }
    if((Number.isInteger(y)) && (y !== undefined) && (!isNaN(x)) )
    {
        ychk = true;
    }
    if((xchk === true) && (ychk === false))
    {
        retVal = "The two values cannot be compared because " + y + " is not a number"; 
    }
    if((xchk === false) && (ychk === true))
    {
        retVal = "The two values cannot be compared because " + x + " is not a number"; 
    }
    if((xchk === false) && (ychk === false))
    {
        retVal = "The two values cannot be compared because " + x + " and " + y + " are not numbers"; 
    }
    if((xchk === true) && (ychk === true))
    {
        // x and y are both numbers
        if(x > y)
        {
          retVal = " x is greater than y"; 
        }
        else if (y > x) 
        {
          retVal = " y is greater than x"; 
        }
        else
        {
          retVal = " x and y are equal."; 
        }
    }
    
    return retVal;
  }
};
    
var rval =  relationship.getRelationship(1,4);   
// Try logging these functions to test your code!
console.log("hello");
console.log(rval);
console.log(relationship.getRelationship(1,1));
console.log(relationship.getRelationship("that",2));
console.log(relationship.getRelationship("this"," something else"));
console.log(relationship.getRelationship(3));
console.log(relationship.getRelationship("hi"));
console.log(relationship.getRelationship(NaN));
console.log(relationship.getRelationship(NaN, undefined));
   

