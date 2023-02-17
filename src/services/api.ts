import axios from "axios";
import {
  getUserLocalStorage,
  setUserLocalStorage
} from "../context/AuthProvider/util";

/* This is creating a new instance of axios with the baseURL and headers. */
const api2 = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

/* This is adding the access token to the header of the request. */
api2.interceptors.request.use(
  (config: any) => {
    const user = getUserLocalStorage();
    if (user !== null) {
      config.headers["Authorization"] = "Bearer " + user?.accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* Intercepting the response and checking if the response is 401 (unauthorized) and if it is, it will
try to refresh the token. */
api2.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const user = getUserLocalStorage();
    const originalConfig = err.config;

    if (
      originalConfig.url !== "/auth/signin" &&
      err.response &&
      originalConfig.url !== "/auth/refreshtoken"
    ) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await api2.post("/auth/refreshtoken", {
            refreshToken: user?.refreshToken,
          });
          setUserLocalStorage(rs.data);

          return api2(originalConfig);
        } catch (_error) {
          throw new Error("Failed to refresh token");
        }
      }
    }

    return Promise.reject(err);
  }
);

export default api2; 