import product from "../models/product.js"


export const createProducts = async (req, res)=>{
    const {name, category, price, imgURL} =  req.body

    const newProduct = new product({name, category, price, imgURL});
    
    const productSaved = await newProduct.save()

    res.status(201).json(productSaved)
}



export const getProducts = async (req, res)=>{ 
    const products = await product.find();

    res.json(products)   
}



export const getProductsById = async (req, res)=>{
    const products = await product.findById(req.params.productId);
    res.status(200).json(products)
    
}

export const updateProductsById = async(req, res)=>{
    const updateProduct = await product.findByIdAndUpdate(req.params.productId, req.body,{
        new: true
    })
    res.status(200).json(updateProduct)
}

export const deleteProductsById = async (req, res)=>{
    const { productId} = req.params;
    await product.findByIdAndDelete(productId);
    res.status(204).json({message:"Producto Eliminado"});
}