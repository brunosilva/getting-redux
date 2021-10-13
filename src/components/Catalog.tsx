// packages
import React, { useCallback, useEffect, useState } from "react";

// redux
import { useDispatch } from "react-redux";

// store redux
import { addProductToCart } from "../store/modules/cart/actions";

// types
import { IProduct } from '../store/modules/cart/types';

// services
import api from "../services/api";

const Catalog: React.FC = () => {
    const dispatch = useDispatch();
    const [catalog, setCatalog] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get<IProduct[]>('products').then(response => {
            setCatalog(response.data);
        })
    }, []);

    const handleAddProductToCart = useCallback((product: IProduct) => {
        dispatch(addProductToCart(product));
    }, [dispatch]);

    return (
        <main>
            <h1>Catalog</h1>

            {catalog.map(product => (
                <article>
                    <strong>{product.title}</strong> {" - "}
                    <span>{product.price}</span> {" "}

                    <button 
                        type="button"
                        onClick={() => handleAddProductToCart(product)}
                    >
                        Comprar
                    </button>
                </article>
            ))}
        </main>
    );
}

export default Catalog;