import express from 'express';
import Foods from '../models/foodsModel.js'

const router = express.Router();

router.get("/", async (req, res) => {

    try {
        const food = await Foods.find()
        res.status(200).json(food)
    }
    catch (err) {
        console.error(err.message)
    }
});

router.post("/", async (req, res) => {
    console.log(req.body);

    try {
        const food = await Foods.create(req.body)
        res.status(201).json(food)
    }
    catch (err) {
        console.error(err.message)
    }
});


router.get("/:id", async (req, res) => {

    try {
        const food = await Foods.findById(req.params.id)
        res.status(200).json(food)
    }
    catch (err) {
        console.error(err.message)
    }
});


router.put("/:id", async (req, res) => {

    try {
        const food = await Foods.findByIdAndUpdate(req.params.id, req.body, { new: true })


        res.status(200).json(food)
    }
    catch (err) {
        console.error(err.message)
    }
});

router.delete("/:id", async (req, res) => {

    try {
        const food = await Foods.findByIdAndDelete(req.params.id)
        res.status(200).json(food)
    }
    catch (err) {
        console.error(err.message)
    }
});

export default router