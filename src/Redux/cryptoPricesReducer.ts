export interface CryptoPricesState {
  bitcoinPrice: number;
  elrondPrice: number;
  ethereumPrice: number;
  bnbPrice: number;
  solanaPrice: number;
  xrpPrice: number;
  usdtPrice: number;
}

const initialState: CryptoPricesState = {
  bitcoinPrice: 0,
  elrondPrice: 0,
  ethereumPrice: 0,
  bnbPrice: 0,
  solanaPrice: 0,
  xrpPrice: 0,
  usdtPrice: 0,
};

const cryptoPricesReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "SET_CRYPTO_PRICES":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default cryptoPricesReducer;
