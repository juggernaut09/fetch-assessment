const express = require('express');
const router = express.Router();
const receiptController = require('../controllers/receiptController');

// getReceipts
router.get('/', receiptController.getReceipts);

// createReceipt
router.post('/process', receiptController.createReceipt);

// Get Points by Receipt Id
router.get("/:id/points", receiptController.getPointsByReceiptId);

module.exports = router;


