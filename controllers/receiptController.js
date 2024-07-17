const { v4: uuidv4 } = require('uuid');
const { receipts } = require('../models/receiptModel.js');
const receiptSchema = require('../components/schemas/receiptSchema.js');
const itemSchema = require('../components/schemas/itemSchema.js');
const calculatePoints = require('../utils/points.js');

const createReceipt = (req, res) => {
    try{
        const { error, value } = receiptSchema.validate(req.body, { allowUnknown: true });

        if (error) {
            return res.status(400).json({ description: "The receipt is invalid" });
        }

        // Validate each item in the items array
        for (let i = 0; i < value.items.length; i++) {
            const item = value.items[i];
            const { error: itemError } = itemSchema.validate(item, { allowUnknown: true });
            if (itemError) {
                return res.status(400).json({ description: "One or more items are invalid" });
            }
        }
        
        // Generate UUID for the receipt
        value.id = uuidv4();
        receipts.push(value);
        return res.status(200).json({"id" : value.id});
    } catch (error) {
        return res.status(400).json({"error" : String(error)});
    }
}

const getPointsByReceiptId = (req, res) => {
    try {
        const id = req.params.id;
        const receipt = receipts.find(receipt => receipt.id === id);
        if (receipt) {
            const points = calculatePoints(receipt);
            return res.status(200).json({"points" : points });
        } else {
            return res.status(404).json({ description: "No receipt found for that id" });
        }
    } catch (error) {
        return res.status(400).json({"error" : String(error)});
    }
}

const getReceipts = (req, res) => {
    try {
        res.status(200).json(receipts);
    } catch(error) {
        return res.status(400).json({"error" : String(error)});
    }
}

module.exports = {
    createReceipt,
    getPointsByReceiptId,
    getReceipts
};
