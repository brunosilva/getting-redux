// packages
import React, { useEffect, useState } from "react";

// redux
import { IProduct } from '../store/modules/cart/types';

// services
import api from "../services/api";

const Catalog: React.FC = () => {
    const [catalog, setCatalog] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get<IProduct[]>('products').then(response => {
            setCatalog(response.data);
        })
    }, []);

    return (
        <main>
            <h1>Catalog</h1>

            {catalog.map(product => (
                <article>
                    <strong>{product.title}</strong> {" - "}
                    <span>{product.price}</span>
                </article>
            ))}
        </main>
    );
}

export default Catalog;