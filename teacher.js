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


function results(){
     a = countTotalByClassName("A");
     item = {};
     item["sanguine"]=countTotalByClassName("A");
     item["phlegmatic"]=countTotalByClassName("B");
     item["meloncholic"] = countTotalByClassName("C");
     item["choleric"] = countTotalByClassName("D");
}
