import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    gap: 1rem;
    padding: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const ProductCard = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const ProductImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

export const ProductDetails = styled.div`
    padding: 1rem;
    text-align: center;

    p {
        color: #888;
        font-size: 0.875rem;
        margin-top: 0.5rem;
    }
`;

export const ProductName = styled.h3`
    font-size: 1.1rem;
    color: #333;
    margin: 0.5rem 0;
`;

export const ProductPrice = styled.p`
    color: #e74c3c;
    font-weight: bold;
    font-size: 1rem;
`;

export const AddToCartButton = styled.button`
    background-color: #ff6f61;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    cursor: pointer;

    &:hover {
        background-color: #ff5a4d;
    }
`;
