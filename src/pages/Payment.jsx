import React, {useState, useContext} from 'react';
import {Flex, Button, Box} from "@chakra-ui/react";
import { CartContext } from '../context';
import {db} from "../firebase";
import {collection, addDoc} from "firebase/firestore";

export const Payment = () => {

    const [name,setName] = useState ("");
    const [lastname,setLastName] = useState ("");
    const [email,setEmail] = useState ("");

    const {cartState} = useContext(CartContext);
    const total = cartState.reduce(
        (acc, item) => acc + item.price * item.qtyItem,0
    );

    const handleCreateOrder = () => {
        const orderObject = {
            buyer: {
                name:name,
                lastname:lastname,
                enail:email,
            },
            items: cartState.map ((item) => { 
                return{
                id:item.id,
                title: item.title,
                price: item.price,
                quantity: item.qtyItem
                };
            }),
            total: total
        };
        const ordersCollection = collection (db,"orders");
        addDoc(ordersCollection, orderObject).then (({id}) => {alert("Se creó la orden: " + id);
        });
    };

return (
    <Flex  >

        <Box> 
        <input type="text"  placeholder="Nombre" onChange = {(e)=> setName (e.target.value)}/>
        <input type="text" placeholder="Apellido" onChange = {(e)=> setLastName (e.target.value)} />
        <input type="email" placeholder="Email" onChange = {(e)=> setEmail (e.target.value)}/>
        </Box>

    <Button colorScheme ="pink" size="sm" onClick = {handleCreateOrder}>
        Comprar artículos
    </Button>
    </Flex>
    );
};


