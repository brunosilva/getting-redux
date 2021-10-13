// packages
import React from "react";

// redux
import { Provider } from 'react-redux'

// store redux
import store from './store';

// components
import Catalog from './components/Catalog';
import Cart from "./components/Cart";

function App() {
    return (
        <Provider store={store}>
            <Catalog />
            <Cart />
        </Provider>
    );
}

export default App;
