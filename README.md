# Fortune Teller API

## Overview

Fortune Teller API는 사용자에게 재미있는 운세 메시지를 제공하는 간단한 API입니다. 이 API는 `/fortune` 엔드포인트를 통해 접근할 수 있습니다.

## How to Use

## How to Use

`/fortune`을 호출하는 방법은 6가지가 있습니다.

🚨 추후에 도메인 주소로 변경 예정 🚨

HTTP GET 요청을 `3.37.227.153:3000/fortune/[원하는 타입]` 엔드포인트로 보내면 됩니다.

타입은 다음과 같습니다

- `/fortune/all`: 모든 운세를 반환합니다.
- `/fortune/excellent`: 최고의 운세를 반환합니다.
- `/fortune/good`: 좋은 운세를 반환합니다.
- `/fortune/average`: 평균적인 운세를 반환합니다.
- `/fortune/bad`: 나쁜 운세를 반환합니다.
- `/fortune/terrible`: 최악의 운세를 반환합니다.

### fortune

이 요청을 보내면, API는 JSON 형식의 응답을 반환합니다. 응답은 다음과 같은 형식입니다:

```json
{
  "fortune": "여기에 API가 선택한 운세 메시지가 포함됩니다."
}
```

`fortune` 필드는 API가 선택한 운세 메시지를 포함하고 있습니다.

## Error Handling

API 요청이 실패하면, API는 오류 메시지와 함께 HTTP 상태 코드를 반환합니다. 이 경우, 응답 본문을 확인하여 오류의 원인을 파악할 수 있습니다.

## Conclusion

Fortune Teller API는 간단하면서도 재미있는 운세 메시지를 제공합니다. 이 API를 사용하여 사용자에게 매일 새로운 운세를 제공해보세요.
