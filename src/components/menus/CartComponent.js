import React from 'react';
import useCustomLogin from "../../hooks/useCustomLogin";
import useCustomCart from "../../hooks/useCustomCart";
import CartItemComponent from "../cart/CartItemComponent";
import {useRecoilState} from "recoil";
import {cartTotalState} from "../../atoms/cartState";

function CartComponent(props) {

    const {isLogin, loginState} = useCustomLogin();

    const { cartItems, changeCart} = useCustomCart();

    const totalValue = useRecoilState(cartTotalState);


    return (
      <div className={"w-full"}>

          {isLogin ?
            <div className={"flex flex-col"}>

                <div className={"w-full flex"}>
                    <div className={"font-extrabold text-2xl w-4/5"}>
                        {loginState.nickname}'s cart
                    </div>
                    <div className={"bg-orange-400 text-center text-white font-bold w-1/5 rounded-full m-1"}>
                        {cartItems.length}
                    </div>
                </div>

                <div>
                    <ul>
                        {cartItems.map(item => <CartItemComponent {...item}
                                                                  key={item.cino}
                                                                  changeCart={changeCart}
                                                                  email={loginState.email}
                        />)}
                    </ul>
                </div>

                <div>
                    <div className={"text-2xl text-right font-extrabold"}>
                        TOTAL: {totalValue}
                    </div>
                </div>

            </div>
            :
            <div></div>
          }

      </div>
    );
}

export default CartComponent;