import { Cart } from "@/types/cart";
import { Produto } from "@/types/product";

type AddAction = {
  type: "Add";
  payload: {
    i: Produto;
    qtd: number;
  };
};
type RemoveAction = {
  type: "remove";
  payload: {
    id:number
  };
};

export type CartActions = AddAction | RemoveAction;

export const cartReducers = (list: Cart[], action: CartActions) => {
  switch (action.type) {
    case "Add":
      return list.find((i) => i.id === action.payload.i.id)
        ? list.map((c) => {
           let novaQtd = c.qtd + c.qtd;
            let novoTotal = c.total + c.total;
            if (c.id === action.payload.i.id) {
             
              return { ...c, qtd: novaQtd, total:novoTotal

              };
            } else {
              return c;
            }
          })
        : [
            ...list,
            {
              id: action.payload.i.id,
              title: action.payload.i.title,
              image: action.payload.i.images[0],
              price: action.payload.i.price,
              qtd: action.payload.qtd,
              total: action.payload.qtd * action.payload.i.price,
            },
          ];
    case "remove": return list.filter(p => p.id !== action.payload.id)
    default:
      return list;
  }
};
