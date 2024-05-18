const express = require('express');
const router = express.Router();
const { Mitsport } = require('./models/sport.js');

router.get('/sport', async (req, res) => {
    try {
        const sports = await Mitsport.find({});
        res.status(200).json({ sports });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/updateuser/:id', async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedUser = await Mitsport.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/deleteuser/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await Mitsport.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const result = await Mitsport.findByIdAndDelete(id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
