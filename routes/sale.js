var express = require('express');
var models = require('../models');
var middle_auth = require('../middlewares/auth');
var router = express.Router();

router.post('/', async function (req, res, next) {
  let transaction;
  let data = req.body;
  let products = JSON.parse(data.products);

  let data_token = middle_auth.decode_token(data.token);

  let total = 0;
  let bulk_prod = [];

  products.forEach(element => {
    let total_prod = element.price * element.quantity;
    total += total_prod;
    element.total = total;
  });

  try {
    // get transaction
    transaction = await models.sequelize.transaction();

    let current_comp = await models.COMPROBANTE.create({
      fecha_retiro: '2018-09-09 00:00:00',
      estado_retiro: true
    }, { transaction });

    let current_venta = await models.VENTA.create({
      rut_retiro: data_token.user.rut,
      nombre_retiro: data.nombre_retiro,
      descuento: 0,
      valor_final: total,
      estado: true,
      mediodepago_id: 1,
      comprobante_id: current_comp.id,
      usuario_id: data_token.user.id
    }, { transaction });

    let current_carrito = await models.CARRITO.create({
      valortotal: total,
      estado: true,
      venta_id: current_venta.id
    }, { transaction });

    products.forEach(element => {
      bulk_prod.push({ carrito_id: current_carrito.id, producto_id: element.product_id })
    });

    await models.PRODUCTO_CARRITO.bulkCreate(bulk_prod, { transaction });

    // commit
    await transaction.commit();

    res.json({status: true, msg: 'La venta fue realizada exitosamente'});

  } catch (err) {
    console.log(err)
    // Rollback transaction if any errors were encountered
    await transaction.rollback();
    res.json({status: false, msg: 'La venta no pudo ser realizada exitosamente'});
  }
});


module.exports = router;