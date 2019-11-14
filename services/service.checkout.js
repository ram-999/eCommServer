/* static customer service class */
class CheckoutService
{
	 
    static checkout(cartItmes)
    {    
        let statusMsg = {};
        let totalPrice = 0;
       
        for(let val of cartItmes) {
          totalPrice  +=  val.price; 
        }
        if( cartItmes.length == 1 && totalPrice > 60){
            statusMsg.status = 500;
            statusMsg.msg = "Your Order with single item should less than $60";
             
        } /*else if(totalPrice > 60){
           statusMsg.status = 500;
            statusMsg.msg = "Your Order should less than $60, please remove the items from cart and try again";
             
        }*/else{
          statusMsg.status = 200;
          statusMsg.msg = " Your Order processed successfully ";
           
        } 
      return statusMsg;
    } 
 
}

module.exports = CheckoutService;