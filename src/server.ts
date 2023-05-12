// const express = require('express')
// const mongoose = require('mongoose');

import mongoose from 'mongoose';
import app from './app'

const port = 5000


// Database Connection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log('Database Connection Successfully');
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (err) {
        console.log(err)
    }
}

main();