import jwtDecode from "jwt-decode";
import http from "./httpService";
import * as CryptoJS from "crypto-js";

const tokenKey = "token";

http.setJwt(getJwt());

export async function login(endpoint, formData, usernameProp, passwordProp) {
  const response = await http.post(endpoint, formData);

  // Step 1: Encode the payload as Base64
  const encodedPayload = btoa(JSON.stringify(response.data));

  // Step 2: Create the signature (e.g., using a secret key)
  const name = response.data[usernameProp];
  const pwd = response.data[passwordProp];
  const secretInput = name + pwd;
  const secretKey = CryptoJS.SHA256(secretInput).toString();
  const encodedSignature = btoa(secretKey);

  // Step 3: Combine the encoded payload and signature with a dot separator
  const token = `${encodedPayload}.${encodedSignature}`;

  // Step 4: Set the token
  localStorage.setItem(tokenKey, token);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    if (jwt === null) {
      return null;
    }
    return jwtDecode(jwt, { header: true });
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
