const HouseShopping = require("../model/houseShoppingModel");

exports.getData = (req, res, next) => {
  HouseShopping.getData()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
};

exports.createItemData = (req, res, next) => {
    const shopping = new HouseShopping();
    shopping.createItemData(req.body.itemData)
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        throw err;
    })
}

exports.deleteItemData = (req, res, next) => {
  const shopping = new HouseShopping();
  shopping.deleteItemData(req.params.id)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    throw err;
  })
}
