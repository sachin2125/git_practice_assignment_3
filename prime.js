 let count = 0;
 let num = 23;
 
 for(i = 0;i <= num;i++){
   if(num % i == 0){
     count++;
   }
 }
 if(count == 2){
   console.log(num,"prime");
 } else{
   console.log(num,"Not prime");
 }