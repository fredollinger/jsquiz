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
}

/* getGreatestChoice()
 *
 * Given an array of hashes, return the one with the highest number.
 *
 */
function getGreatestChoice(arr){
    res="";
    size=0;
    for ( key in arr){
        console.log(key.name);
        console.log(key.count);
    }
    return size;
}

function results(){
     item = {}; // reusable hash
     arr=[];    // array of items
 
     // BEGIN BUILD HASH ARRAY
     item["name"]="saguine";
     item["count"]=countTotalByClassName("A");
     arr.push(item);
     console.log(arr[0].name);
     console.log(arr[0].count);
     item["name"]="phlegmatic";
     item["count"]=countTotalByClassName("B");
     arr.push(item);
     item["name"] = "meloncholic";
     item["count"] = countTotalByClassName("C");
     arr.push(item);
     item["name"] = "choleric";
     item["count"] = countTotalByClassName("D");
     arr.push(item);
     // END BUILD HASH ARRAY

     //res=getGreatestChoice(arr);
}
