const getProducts = (req, res)=>{
    res.status(200).send("This is my second server.");
};

const createProduct = (req, res)=>{
    res.status(201).send("Product has been created.");
};

const updateProduct =(req, res)=>{
    res.status(200).send(" product has been updated.");
};

const deleteProduct =  (req, res)=>{
    res.status(200).send(" Product has been deleted.");
};

module.exports = { //we are exporting products to 
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};