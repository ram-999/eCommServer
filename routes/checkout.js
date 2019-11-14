var express = require('express');
var router = express.Router();
var CheckoutService = require('../services/service.checkout');

/* GET customer listing. */
router.post('/', async function(req, res, next)
{
	//res.json({error: "Invalid Customer UID."});
        
        try
	{ 
		const statusMsg = await CheckoutService.checkout(req.body);

                if(statusMsg.status == 200){
                    return res.status(200).json({ data: statusMsg });
                }else{
                    return res.status(500).json({ data: statusMsg });
                }
	}
	catch(err)
	{
		// unexpected error
		return next(err);
	} 
}); 

  

module.exports = router;
