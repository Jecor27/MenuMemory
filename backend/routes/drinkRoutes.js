import express from 'express';
import Drinks from '../models/drinksModel.js'

const router = express.Router();

router.get("/", async (req, res) => {

    try {
        const drinks = await Drinks.find()
        res.status(200).json(drinks)
    }
    catch (err) {
        console.error(err.message)
    }
});

router.post("/", async (req, res) => {

    try {
        const drinks = await Drinks.create(req.body)
        res.status(201).json(drinks)
    }
    catch (err) {
        console.error(err.message)
    }
});


router.get("/:id", async (req, res) => {

    try {
        const drinks = await Drinks.findById(req.params.id)
        res.status(200).json(drinks)
    }
    catch (err) {
        console.error(err.message)
    }
});


router.put("/:id", async (req, res) => {

    try {
        const drinks = await Drinks.findByIdAndUpdate(req.params.id, req.body, { new: true })


        res.status(200).json(drinks)
    }
    catch (err) {
        console.error(err.message)
    }
});

router.delete("/:id", async (req, res) => {

    try {
        const drinks = await Drinks.findByIdAndDelete(req.params.id)
        res.status(200).json(drinks)
    }
    catch (err) {
        console.error(err.message)
    }
});

export default router