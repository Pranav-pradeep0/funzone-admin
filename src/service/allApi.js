import { commonRequest } from "./commonRequest";

// Login

export const login = (body) => {
  return commonRequest("POST", "api/users/loginAdmin", body);
};

// User

export const getAllUsers = async () => {
  return commonRequest("GET", "api/users/getUsers");
};

// Language

export const createNewLanguage = async (body) => {
  return commonRequest("POST", "api/users/createlanguage", body);
};

export const getAllLanguages = async () => {
  return commonRequest("GET", "api/users/getAllLanguages");
};

export const deleteSingleLaguage = async (id) => {
  return commonRequest("DELETE", `api/users/deleteLanguageById/${id}`);
};

// Coin

export const getCoinList = async () => {
  return commonRequest("GET", "api/users/getAllCoinPackages");
};

export const getFreeCoinDetails = async () => {
  return commonRequest("GET", "api/users/getFreeCoin");
};

export const updateFreeCoinDetails = async (id, body) => {
  return commonRequest("PUT", `api/users/updateFreeCoin/${id}`, body);
};

// Conversions

export const getConversionFactors = async () => {
  return commonRequest("GET", "api/users/getCoinConversion");
};

export const conversionsEdit = async (body) => {
  return commonRequest("PUT", "api/users/updateCoinConversion", body);
};