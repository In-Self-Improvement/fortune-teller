import express from "express";
import {
  getAllFortunes,
  getAverageFortunes,
  getBadFortunes,
  getExcellentFortunes,
  getGoodFortunes,
  getTerribleFortunes,
} from "./firebase.js";

const app = express();
const port = 3000;

// 운세 데이터
const allFortune = await getAllFortunes();
const excellentFortune = await getExcellentFortunes();
const goodFortune = await getGoodFortunes();
const averageFortune = await getAverageFortunes();
const badFortune = await getBadFortunes();
const terribleFortune = await getTerribleFortunes();

// 랜덤 운세를 반환하는 라우트
app.get("/fortune/all", (req, res) => {
  const randomIndex = Math.floor(Math.random() * allFortune.length);
  res.send({ fortune: allFortune[randomIndex] });
});

app.get("/fortune/excellent", (req, res) => {
  const randomIndex = Math.floor(Math.random() * excellentFortune.length);
  res.send({ fortune: excellentFortune[randomIndex] });
});

app.get("/fortune/good", (req, res) => {
  const randomIndex = Math.floor(Math.random() * goodFortune.length);
  res.send({ fortune: goodFortune[randomIndex] });
});

app.get("/fortune/average", (req, res) => {
  const randomIndex = Math.floor(Math.random() * averageFortune.length);
  res.send({ fortune: averageFortune[randomIndex] });
});

app.get("/fortune/bad", (req, res) => {
  const randomIndex = Math.floor(Math.random() * badFortune.length);
  res.send({ fortune: badFortune[randomIndex] });
});

app.get("/fortune/terrible", (req, res) => {
  const randomIndex = Math.floor(Math.random() * terribleFortune.length);
  res.send({ fortune: terribleFortune[randomIndex] });
});

app.listen(port, () => {
  console.log(
    `Fortune API 서버가 http://localhost:${port} 에서 실행 중입니다.`
  );
});
