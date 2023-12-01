import { CryptoPricesState } from "./cryptoPricesReducer";

interface SetCryptoPricesAction {
  type: "SET_CRYPTO_PRICES";
  payload: CryptoPricesState;
}

export const setCryptoPrices = (
  cryptoPrices: CryptoPricesState
): SetCryptoPricesAction => ({
  type: "SET_CRYPTO_PRICES",
  payload: cryptoPrices,
});

export const setBitcoinPrice = (price: number) => ({
  type: "SET_BITCOIN_PRICE" as const,
  payload: price,
});

export const setElrondPrice = (price: number) => ({
  type: "SET_ELROND_PRICE" as const,
  payload: price,
});

export const setEthereumPrice = (price: number) => ({
  type: "SET_ETHEREUM_PRICE" as const,
  payload: price,
});

export const setBnbPrice = (price: number) => ({
  type: "SET_BNB_PRICE" as const,
  payload: price,
});

export const setSolanaPrice = (price: number) => ({
  type: "SET_SOLANA_PRICE" as const,
  payload: price,
});

export const setXrpPrice = (price: number) => ({
  type: "SET_XRP_PRICE" as const,
  payload: price,
});

export const setUsdtPrice = (price: number) => ({
  type: "SET_USDT_PRICE" as const,
  payload: price,
});
