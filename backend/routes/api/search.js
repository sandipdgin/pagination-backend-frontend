// import express from "express";
// import { router } from "express";

const express = require('express');
const router = express.Router();
// const { products, cart } = require('../../data/data');
// import { products } from '../../data/data';
// const products = require('../../data/data');

const products = require('../../data/products.json')

// Get All products
router.post('/', (req, res) => res.json(products));

// Paginate products
router.post('/search', (req, res) => {
    const page = parseInt(req.body.pageNo) - 1;

    // --- No. of records required --- 
    const pageSize = parseInt(req.body.pageSize);
    console.log("request = ", req.body )

    console.log("request = ", page, pageSize, page * pageSize, (page + 1) * pageSize )    
    // res.send(JSON.stringify(products));
    const totalPages = products.length/pageSize;
        
    // console.log("request found = ", totalPages, products.length )
    const found = products.slice(page * pageSize, (page + 1) * pageSize);
        
    if (found) {
        const responseBody = {
            "response": found,
            "message": "Success",
            "pageSize": pageSize ,
            "pageNumber": (page + 1),
            "itemsCount": products.length,
            "pageCount": totalPages
        }
        setTimeout(() => {
            res.send(responseBody);
        }, 1000)
    } else {
        res.status(400).send({ message: `No products with the specified parameters` });
    }

});

module.exports = router;