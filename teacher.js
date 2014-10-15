/* countTotalByClassName()
 *
 * Given:
 *
 * klass = name of class
 *
 * Count all the times it is checked
 *
 */
function countTotalByClassName(klass){
     total=0;
     var arr = document.getElementsByClassName(klass);
     for (var index = 0; index < arr.length; index++) {
         // console.log(arr[index].checked);
         if(arr[index].checked){
	     total=total+1;
         }
     };
     return total;
} // END countTotalByClassName()

/* getGreatestChoice()
 *
 * Given an array of hashes, return the one with the highest number.
 *
 */
function getGreatestChoice(arr){
    res="";
    size=0;
    for (var i = 0; i < arr.length; i++) {
	if (arr[i].count > size){
	    res=arr[i].name;
	}
    }
    return res;
} // END getGreatestChoice()

function results(){
     item1 = {}; 
     item2 = {}; 
     item3 = {}; 
     item4 = {}; 

     arr=[];    // array of items
 
     // BEGIN BUILD HASH ARRAY
     item1["name"]="saguine";
     item1["count"]=countTotalByClassName("A");
     arr.push(item1);
     item2["name"]="phlegmatic";
     item2["count"]=countTotalByClassName("B");
     arr.push(item2);
     item3["name"] = "meloncholic";
     item3["count"] = countTotalByClassName("C");
     arr.push(item3);
     item4["name"] = "choleric";
     item4["count"] = countTotalByClassName("D");
     arr.push(item4);
     // END BUILD HASH ARRAY

     res=getGreatestChoice(arr);

     alert("Your temperment is: " + res);

} // END results()
