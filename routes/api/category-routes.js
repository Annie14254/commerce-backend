const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories with associated products

router.get('/', async (req, res) => {
  try{
    const categoryData = await Category.findAll({
      include: [{model: Product}],
  });
  res.status(200).json(categoryData);
  } catch(err){
    res.status(500).json(err)
  }
});

// get one category by id with associated products
router.get('/:id', async (req, res) => {
  try{
    const categoryData = await Category.findByPk(req.params.id, {
        include: [{model: Product}],
    });
        
    if(!categoryData){
        res.status(404).json({message: "No category with this id found"})
        return;
    }
    res.status(200).json(categoryData);
} catch (err) {
    console.error(err)
    res.status(500).json(err)
}
});

router.post('/', async (req, res) => {
  // create a new category
  // follows format similar to the following:
  // {
  //   "category_name": "Socks",
  //   "products": []
  // }
  try{
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch(err){
    res.status(400).json(err)
}
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try{
    const categoryData = await Category.update(req.body, {
        where: {
            id: req.params.id
        }
    }
  );
  if(!categoryData){
      res.status(404).json({message: "No category with this id found"})
      return;
  }
      res.status(200).json(categoryData);
  } catch (err) {
      res.status(500).json(err)
  }
});

  // delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try{
    const categoryData = await Category.destroy({
        where: {
            id: req.params.id
        }
    }
  );
  if(!categoryData){
      res.status(404).json({message: "No category with this id found"})
      return;
  }
      res.status(200).json(categoryData);
  } catch (err) {
      res.status(500).json(err)
  }
});

module.exports = router;
