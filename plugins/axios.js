import https from "https";

export default function({ $axios, req, app }) {
  $axios.onRequest(config => {
    const token = app.$cookies.get("token.local");
    if (process.server) {
      config.baseURL = "http://django:8000";
      config.headers.common["X-Forwarded-For"] =
        req.headers["x-forwarded-for"] ||
        req.connection.remoteAddress === "127.0.0.1"
          ? "localhost"
          : req.connection.remoteAddress;
      config.headers.common["X-Real-IP"] =
        req.headers["x-real-ip"] || req.connection.remoteAddress === "127.0.0.1"
          ? "localhost"
          : req.connection.remoteAddress;
    } else {
      config.baseURL = process.env.API;
    }
    config.httpsAgent = new https.Agent({
      rejectUnauthorized: false
    });
    config.withCredentials = false;
    config.headers.common.Authorization = token ? `JWT ${token}` : "";
  });
  $axios.onError(error => {
    if (error.response.status === 401) {
      app.$auth.logout();
      return error;
    }
  });
}
