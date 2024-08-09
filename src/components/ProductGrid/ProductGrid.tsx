import React from 'react';
import {
    GridContainer,
    ProductCard,
    ProductImage,
    ProductDetails,
    ProductName,
    ProductPrice,
    AddToCartButton,
} from './ProductGridStyles';

const products = [
    { id: 1, name: 'Cheesy Turnover', price: 2.8, image: 'cheesy-turnover.jpg', watermark: 'Water Included' },
    { id: 2, name: 'Buttery Croissants', price: 4.6, image: 'buttery-croissants.jpg', watermark: 'Water Included' },
    { id: 3, name: 'Danish', price: 2.8, image: 'danish.jpg', watermark: 'Water Included' },
    { id: 4, name: 'Eclair', price: 2.8, image: 'eclair.jpg', watermark: 'Water Included' },
    { id: 5, name: 'Cream Puffs', price: 4.6, image: 'cream-puffs.jpg', watermark: 'Water Included' },
    { id: 6, name: 'Mille-Feuille', price: 2.8, image: 'mille-feuille.jpg', watermark: 'Water Included' },
    { id: 7, name: 'Fruit Tartlet', price: 2.8, image: 'fruit-tartlet.jpg', watermark: 'Water Included' },
    { id: 8, name: 'Palmier', price: 4.6, image: 'palmier.jpg', watermark: 'Water Included' },
    { id: 9, name: 'Profiterole', price: 2.8, image: 'profiterole.jpg', watermark: 'Water Included' },
    { id: 10, name: 'Cheesy Turnover', price: 2.8, image: 'cheesy-turnover.jpg', watermark: 'Water Included' },
    { id: 11, name: 'Buttery Croissants', price: 4.6, image: 'buttery-croissants.jpg', watermark: 'Water Included' },
    { id: 12, name: 'Mille-Feuille', price: 2.8, image: 'mille-feuille.jpg', watermark: 'Water Included' },
];

const ProductGrid: React.FC = () => {
    return (
        <GridContainer>
            {products.map((product) => (
                <ProductCard key={product.id}>
                    <ProductImage src={product.image} alt={product.name} />
                    <ProductDetails>
                        <ProductName>{product.name}</ProductName>
                        <ProductPrice>${product.price}</ProductPrice>
                        <p>{product.watermark}</p>
                        {product.name === 'Buttery Croissants' && (
                            <AddToCartButton>Add to Cart</AddToCartButton>
                        )}
                    </ProductDetails>
                </ProductCard>
            ))}
        </GridContainer>
    );
};

export default ProductGrid;
