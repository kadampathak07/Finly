import express from 'express';
import {
  showCustomers,
  editCustomer,
  deleteCustomer,
  updateCustomer,
  createCustomer,
  validateCustomer
} from '../controllers/customer.controller.js';
const router = express.Router();

router.get('/', showCustomers);
router.get('/create', (req, res) => {
  res.render('pages/customers', {
    title: 'Create Customer',
    formAction: 'create',
    type: 'form',
    customer: req.flash('data')[0],
    errors: req.flash('errors'),
  });
});

router.post('/create', validateCustomer, createCustomer);
router.get('/:id/edit', editCustomer);
router.post('/:id/edit', validateCustomer, updateCustomer);
router.post('/:id/delete', deleteCustomer);

export default router;
