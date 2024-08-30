"use client"

import { ICartContextType, IProduct } from "@/interfaces/Interfaces";
import { postOrders } from "@/lib/server/fetchOrders";
import { fetchProductById } from "@/lib/server/fetchProducts";
import { createContext, useEffect, useState } from "react"


const addItem = async (
    cartItems: IProduct[],
    product: number
): Promise<IProduct[]> => {
    const existingProduct = cartItems.find((item) => item.id === product);

    if (existingProduct) {
        return cartItems.map((item) =>
            item.id === product ? { ...item, quantity: item.quantity + 1 } : item
        );
    }

    const data = await fetchProductById(product.toString());
    return [...cartItems, { ...data, quantity: 1 }];
};

const removeItem = (
    cartItems: IProduct[],
    product: number
): IProduct[] => {
    const existingProduct = cartItems.find((item) => item.id === product);

    if (existingProduct && existingProduct.quantity > 1) {
        return cartItems.map((item) =>
            item.id === product ? { ...item, quantity: item.quantity - 1 } : item
        );
    }

    return cartItems.filter((item) => item.id !== product);
};

export const CartContext = createContext<ICartContextType>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    total: 0,
    proceedToCheckout: () => {},
    orderTotals: [],
});

const checkout = async (cartItems: IProduct[], setOrderTotals: React.Dispatch<React.SetStateAction<number[]>>) => {
    try {
        const data = await postOrders(cartItems);
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setOrderTotals((prevTotals) => {
            const newTotals = [...prevTotals, total];
            if (typeof window !== 'undefined') {
                localStorage.setItem('orderTotals', JSON.stringify(newTotals));
            }
            return newTotals;
        });
        if (data.ok) {
            console.log("success");
        } else {
            console.log("error");
        }
    } catch (error) {
        console.log(error);
    }
};


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    const [total, setTotal] = useState(0);
    const [orderTotals, setOrderTotals] = useState<number[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTotals = localStorage.getItem('orderTotals');
            setOrderTotals(savedTotals ? JSON.parse(savedTotals) : []);
        }
    }, []);

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(total);
    }, [cartItems]);

    const addToCart = async (product: number) => {
        const updatedCart = await addItem(cartItems, product);
        setCartItems(updatedCart);
    };

    const removeFromCart = (product: number) => {
        setCartItems(removeItem(cartItems, product));
    };

    const proceedToCheckout = () => {
        checkout(cartItems, setOrderTotals);
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, total, addToCart, removeFromCart, proceedToCheckout, orderTotals }}>
            {children}
        </CartContext.Provider>
    );
};