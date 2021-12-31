const mongoose = require('mongoose');
const path = require('path/posix');
const firstProduct = require('../firstProduct.json');
const otherProducts = require('../otherProducts.json');


//1
mongoose.connect('mongodb://localhost:27017/store')
    .then(() => console.log('mongoose connected'))
    .catch((err) => console.log(`err of connceting is:${err}`));

//1-1
const Product = mongoose.model("Product", {
    type: "string",
    title: "string",
    description: "string",
    shipping: "object",
    pricing: "object",
    details: "object",
});

// //1-2 A
// function insertOne(product) {
//     Product.create(product, (err, result) => {
//         if (err) {
//             return console.log(`err is:${err}`);
//         }
//         console.log(`insertFirst ok`, result);
//     });
// }


// insertOne(firstProduct);

// // 1-2B
// function insertMany(products) {
//     Product.insertMany(products, (err, result) => {
//         if (err) {
//             return console.log(`err is:${err}`);
//         }
//         console.log("insertMany Ok", result);
//     });
// }

// insertMany(otherProducts);

// // 1-3-A,B

// function readAll() {
//     // Product.find({}, (err, products) => {
//     //     if (err) {
//     //         return console.log(`err is:${err}`);
//     //     }
//     //     console.log("reading all Ok", products);
//     // });
//     Product.find({})
//         .then((data) => {
//             console.log(data);
//         })
//         .catch(err => {
//             console.log('err');
//         })
// }

// readAll();

// const readAll = async() => {
//     try {
//         const data = await Product.find({})
//     } catch (err) {
//         console.log(err);
//     }
// }




// // 1-3-C

// function readWithouteId() {
//     Product.find({}, { _id: false }, (err, products) => {
//         if (err) {
//             return console.log(`err is:${err}`);
//         }
//         console.log("reading without Id:", products);
//     });
// }

// readWithouteId();

// // 1-3-D

// function readAudioAlbumsType() {
//     Product.find({ type: "Audio Album" }, (err, products) => {
//         if (err) {
//             return console.log(`err is:${err}`);
//         }
//         console.log("reading Audio album Type:", products);
//     });
// }

// readAudioAlbumsType();

// // // 1-3-E

// function readLess5000() {
//     Product.find({ "pricing.retail": { $lt: 5000 } }, (err, products) => {
//         if (err) {
//             return console.log(`err is:${err}`);
//         }
//         console.log("reading less than 5000", products);
//     });
// }

// readLess5000();

// // // 1-3-F

// function readTypesNotFilm() {
//     Product.find({ type: { $ne: "Film" } }, (err, products) => {
//         if (err) {
//             return console.log(`err is:${err}`);
//         }
//         console.log("reading types notFilm", products);
//     });
// }

// readTypesNotFilm();

// // // 1-3-G

function readMore15() {
    Product.find({ "shipping.weight": { $gt: 15 } }, (err, products) => {
        if (err) {
            return console.log(`err is:${err}`);
        }
        console.log("reading more 15", products);
    });
}

readMore15();

// // // 1-3-H

// function updateMatrixTitle() {
//     Product.updateOne({ "details.title": "The Matrix" }, { "pricing.list": 2500 },
//         (err, result) => {
//             if (err) {
//                 console.log(`err is:${err}`);
//             }
//             console.log("update Matrix", result);
//         }
//     );
// }

// updateMatrixTitle();

// // // 1-3-I

function readFimlTypeAndDepth1() {
    Product.find({ $and: [{ type: "Film" }, { "shipping.dimensions.depth": 1 }] },
        (err, products) => {
            if (err) {
                return console.log(`err is:${err}`);
            }
            console.log("reading type:film and depth:1", products);
        }
    );
}

// readFimlTypeAndDepth1();

// // // 1-3-J

function countFilmType() {
    Product.count({ type: "Film" }, (err, products) => {
        if (err) {
            return console.log(`err is:${err}`);
        }
        console.log("count of film type:", products);
    });
}

countFilmType();

// // // 1-3-K

function readCountainJN() {
    Product.find({ "details.writer": { $regex: "Jonathan Nolan" } },
        (err, products) => {
            if (err) {
                return console.log(`err is:${err}`);
            }
            console.log("reading of countain Jonathan Nolan", products);
        }
    );
}

// readCountainJN();

// // 1-3-L

function maxSaving() {
    Product.find({})
        .sort("-pricing.savings")
        .limit(1)
        .exec((err, products) => {
            if (err) {

                console.log(err);
                return
            }


            console.log("max saving :", products);
        });
}

maxSaving();

// // 1 - 3 - M

function readTitleCountainX() {
    Product.find({ "details.title": { $regex: "x" } }, (err, products) => {
        if (err) {
            return console.log(`err is:${err}`);
        }
        console.log("reading title countaint X letter:", products);
    });
}

// readTitleCountainX();

// 1 - 3 - N

function deleteOne() {
    Product.deleteOne({ "details.aspect_ratio": "1.66:1" },
        (err, result) => {
            if (err) {
                return console.log(`err is:${err}`);
            }
            console.log('Deleting one user Ok', result);
        }
    );
}
deleteOne();