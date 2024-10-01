import { Flex, Text } from "@chakra-ui/react";
import { BsMinecart } from "react-icons/bs";
import {useContext} from "react";
import {CartContext} from "../../context";
import {Link} from "react-router-dom";



export const CartWidget = () => {
    const { cartState } = useContext(CartContext);
    const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);
    
    return (
        <Flex alignItems={"center"} 
        height={"100%"} 
        justifyContent={"space-between"} 
        width={"3.75rem"}
        > 
            <BsMinecart size={"1.875rem"}/>
          <Link to="/checkout"><Text fontSize = {"1.5 rem"}>{qtyTotalItems}</Text></Link>
        </Flex>
    );
};

