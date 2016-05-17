module.exports = function (){
  return {
    add: function(num1, num2) { 
         // add code here 
         return num1 + num2;
       },
    multiply: function(num1, num2) {
         // add code here 
         return num1 * num2;
       },
    square: function(num) {
         // add code here 
         return num * num;
        },
    random: function (num1, num2){

            if (num1 < 0) {
                return num1 + Math.random() * (Math.abs(num1)+num2);
            }else {
                return num1 + Math.random() * num2;
            }

        }

    };
  }