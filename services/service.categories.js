const CategoryModel = require("../models/model.catogory"); 

let categories = [ 
		{
		  Category:'Electronics', items : [
			{Id: '100', name:'Item1',    imageLoc: 'items/item1.PNG', price : 410  }
			,{Id: '100', name:'Item2',   imageLoc: 'items/item2.PNG', price : 40  }
			,{Id: '100', name:'Item3',   imageLoc: 'items/item3.PNG', price : 60  }
			,{Id: '100', name:'Item4',   imageLoc: 'items/item4.PNG', price : 80  }
			,{Id: '100', name:'Item5',   imageLoc: 'items/item5.PNG', price : 10  }
			,{Id: '100', name:'Item6',   imageLoc: 'items/item6.PNG', price : 10  }
                        ,{Id: '100', name:'Item7',    imageLoc: 'items/item1.PNG', price : 410  }
			,{Id: '100', name:'Item8',   imageLoc: 'items/item2.PNG', price : 40  }
			,{Id: '100', name:'Item9',   imageLoc: 'items/item3.PNG', price : 60  }
			,{Id: '100', name:'Item10',   imageLoc: 'items/item4.PNG', price : 80  }
			,{Id: '100', name:'Item11',   imageLoc: 'items/item5.PNG', price : 10  }
			,{Id: '100', name:'Item12',   imageLoc: 'items/item6.PNG', price : 10  }
		  ]
		},
		{
		  Category:'Mobiles', items : [
			{Id: '100', name:'Item111',    imageLoc: 'items/item1.PNG', price : 50  }
			,{Id: '100', name:'Item222',   imageLoc: 'items/item2.PNG', price : 510  }
			,{Id: '100', name:'Item322',   imageLoc: 'items/item3.PNG', price : 510  }
			,{Id: '100', name:'Item422',   imageLoc: 'items/item4.PNG', price : 310  }
			,{Id: '100', name:'Item522',   imageLoc: 'items/item5.PNG', price : 410  }
			,{Id: '100', name:'Item622',   imageLoc: 'items/item6.PNG', price : 10  }
		  ]
		},
		{
		  Category:'Home', items : [
			{Id: '100', name:'Item122',    imageLoc: 'items/item1.PNG', price : 10  }
			,{Id: '100', name:'Item232',   imageLoc: 'items/item2.PNG', price : 10  }
			,{Id: '100', name:'Item343',   imageLoc: 'items/item3.PNG', price : 10  }
			,{Id: '100', name:'Item44',   imageLoc: 'items/item4.PNG', price : 10  }
			,{Id: '100', name:'Item55',   imageLoc: 'items/item5.PNG', price : 10  }
			,{Id: '100', name:'Item66',   imageLoc: 'items/item6.PNG', price : 10  }
		  ]
		},
                {
		  Category:'Furniture', items : [
			{Id: '100', name:'aItem1',    imageLoc: 'items/item1.PNG', price : 10  }
			,{Id: '100', name:'aItem2',   imageLoc: 'items/item2.PNG', price : 10  }
			,{Id: '100', name:'aItem3',   imageLoc: 'items/item3.PNG', price : 10  }
			,{Id: '100', name:'aItem4',   imageLoc: 'items/item4.PNG', price : 10  }
			,{Id: '100', name:'aItem5',   imageLoc: 'items/item5.PNG', price : 10  }
			,{Id: '100', name:'aItem6',   imageLoc: 'items/item6.PNG', price : 10  }
		  ]
		},
                {
		  Category:'Fashon', items : [
			{Id: '100', name:'bItem1',    imageLoc: 'items/item1.PNG', price : 10  }
			,{Id: '100', name:'bItem2',   imageLoc: 'items/item2.PNG', price : 10  }
			,{Id: '100', name:'bItem3',   imageLoc: 'items/item3.PNG', price : 10  }
			,{Id: '100', name:'bItem4',   imageLoc: 'items/item4.PNG', price : 10  }
			,{Id: '100', name:'bItem5',   imageLoc: 'items/item5.PNG', price : 10  }
			,{Id: '100', name:'bItem6',   imageLoc: 'items/item6.PNG', price : 10  }
		  ]
		},
                {
		  Category:'General', items : [
			{Id: '100', name:'cItem1',    imageLoc: 'items/item1.PNG', price : 10  }
			,{Id: '100', name:'cItem2',   imageLoc: 'items/item2.PNG', price : 10  }
			,{Id: '100', name:'cItem3',   imageLoc: 'items/item3.PNG', price : 10  }
			,{Id: '100', name:'cItem4',   imageLoc: 'items/item4.PNG', price : 10  }
			,{Id: '100', name:'cItem5',   imageLoc: 'items/item5.PNG', price : 10  }
			,{Id: '100', name:'cItem6',   imageLoc: 'items/item6.PNG', price : 10  }
		  ]
		}
		]; 
 

/* static customer service class */
class CatogoryService
{
	 
	static retrieveAll()
	{
	  return categories;
	}
        
        
         static retrieveCategories()
	{
            let refinedCategories = [];
            for(let val of categories) { 
                 refinedCategories.push(val.Category);  
            }
	    return refinedCategories;
	} 
        
        static retrieveItems(category)
	{
            let items = [];
            for(let val of categories) {
                
                if( val.Category == category){
                 items =  val.items;  
                }
                console.log(val)
            }
	  return items;
	} 
 
}

module.exports = CatogoryService;