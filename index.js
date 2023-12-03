import express from "express";
import { getGoodFortunes } from "./firebase.js";

const app = express();
const port = 3000;

// 운세 데이터
const goodFortune = await getGoodFortunes();

// 랜덤 운세를 반환하는 라우트
app.get("/fortune", (req, res) => {
  const randomIndex = Math.floor(Math.random() * goodFortune.length);
  res.send({ fortune: goodFortune[randomIndex] });
});

app.listen(port, () => {
  console.log(
    `Fortune API 서버가 http://localhost:${port} 에서 실행 중입니다.`
  );
});
