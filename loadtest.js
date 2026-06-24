import http from "k6/http";

export const options = {
  vus: 5,
  duration: "30s",
  thresholds: {
    http_req_failed: ["rate<0.1"],
  },
};

export default function () {
  let res = http.get("https://tg-1-mocha.vercel.app");

  console.log(res.status);
}
