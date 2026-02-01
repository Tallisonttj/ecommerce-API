import { Cart } from "@/types/cart";

type AddAction = {
  type: "Add";
  payload: {
    image: string;
    title: string;
    price: number;
    qtd: number;
    total: number;
  };
};

type ListActions = AddAction

export const cartReducers = (list:Cart[], action:ListActions) => {

    switch (action.type) {
        case 'Add':
         return [...list, {
            id:list.length,
            title: action.payload.title,
            image: action.payload.image,
            price: action.payload.price,
            qtd: action.payload.qtd,
            total: action.payload.total,
         }]   
        default:
           return list;
    }

}