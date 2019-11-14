class CatogoryModel
{
	constructor(cat_name, cat_type, cat_desc, cat_comments)
	{
		this.cat_name = cat_name;
		this.cat_type = cat_type;
		this.cat_desc = cat_desc;
		this.cat_comments = cat_comments; 
		this.uid = null;
	}
}

module.exports = CatogoryModel;