import express from "express";
const app = express();
const port = 3000;

// 운세 데이터
const fortunes = [
  "오늘은 매우 길한 날입니다.",
  "주의: 오늘은 조심해야 할 것이 있을 거에요.",
  "기회가 올 것입니다, 준비하세요.",
  "사랑이 꽃피는 날이에요. 가까운 사람을 챙겨보세요.",
  "건강에 유의하세요. 쉼이 필요한 하루입니다.",
];

// 랜덤 운세를 반환하는 라우트
app.get("/fortune", (req, res) => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  res.send({ fortune: fortunes[randomIndex] });
});

app.listen(port, () => {
  console.log(
    `Fortune API 서버가 http://localhost:${port} 에서 실행 중입니다.`
  );
});
