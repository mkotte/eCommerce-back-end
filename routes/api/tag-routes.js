const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags & be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id` & be sure to include its associated Product data
  try{ 
    const tagData = await Tag.findByPk(req.params.id, 
      {
        include: Product, through: ProductTag
      });
    if(!tagData){
      res.status(404).json({ message:'No location found with this id!' })
      return;
    }
    
    res.status(200).json(tagData)
  } catch (err) {
      res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const tagData = await Tag.create()
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  console.log('route hit')
  try{
    const tagData = await Tag.update({tag_name: req.body.tag_name},{where: {id: req.params.id}})
    console.log(req.body.tag_name)
    if(!tagData){
      copnsole.log(2)
      res.status(404).json({ message:'No location found with this id!' })
      return;
    } else{
      //  console.log ('successfully updated tag_name')
       
      return res.status(200).json(tagData) 
    }
  }catch (err) {
    res.status(500).json(err)
}
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try{
    const tagData = await Tag.destroy(req.params.id)
  }
});

module.exports = router;
