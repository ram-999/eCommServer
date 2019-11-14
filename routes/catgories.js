var express = require('express');
var router = express.Router();
var CategorieService = require('../services/service.categories');

/* GET customer listing. */
router.get('/', async function(req, res, next)
{
	//res.json({error: "Invalid Customer UID."});
        
        try
	{
		const cat = await CategorieService.retrieveAll();

		return res.json(cat);
	}
	catch(err)
	{
		// unexpected error
		return next(err);
	} 
});


router.post('/', async (req, res, next) =>
{
	try
	{ 
            const items = await CategorieService.retrieveCategories(); 
            return res.json(items);
	}
	catch(err)
	{ 
		return next(err);
	}
});

router.get('/:category', async (req, res, next) =>
{
	try
	{ 
            const items = await CategorieService.retrieveItems(req.params.category);
            return res.json(items);
	}
	catch(err)
	{
		// unexpected error
		return next(err);
	}
});

  

module.exports = router;
