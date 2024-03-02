export const calculateDiscount = (price: number, discount: number) =>
  (price - (discount / 100) * price).toFixed();
