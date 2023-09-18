# 공공데이터포탈을 이용한 OPEN API 사용방법 연습

이 프로젝트는 [실종검색 OPEN API](https://www.safe182.go.kr/home/api/guide5.do)를 이용해 인증키 발급 및 API 호출 과정을 연습해본 레포지토리입니다.

![list](https://github.com/devseop/exr-open-api/assets/102455161/a84f2ecb-afa6-4f40-9fa9-b9bbcf8a4a49)

## 🧑🏻‍💻 프로젝트 정보

### 실행 방법

- 본 프로젝트는 배포를 하지 않았습니다.
- 로컬 환경에서의 CORS 에러 해결이 힘든 점이 있어 해당 에러를 무시하는 방향으로 진행했습니다. 

```markdown
// 원하는 위치에 아래와 같은 빈 디렉토리를 생성
mkdir chrome-no-cors

// 아래의 명령어를 실행
open -na 'Google Chrome' --args --user-data-dir=${path} --disable-web-security

git clone https://github.com/devseop/exr-open-api
npm install && npm run dev
```

### 프로젝트 구조

```markdown
📦 src
 ┣ 📂 api
 ┃ ┗ api.ts
 ┣ 📂 const
 ┃ ┗ consts.ts
 ┣ 📂 type
 ┃ ┗ types.ts
 ┣ App.css
 ┣ App.tsx
 ┣ index.css
 ┣ main.tsx
 ┗ vite-env.d.ts
```

### 사용 라이브러리

```javascript
"dependencies": {
   "@emotion/react": "^11.11.1",
   "@emotion/styled": "^11.11.0",
   "react": "^18.2.0",
   "react-dom": "^18.2.0"
},

"devDependencies": {
   "@types/node": "^20.6.2",
   "@types/react": "^18.2.15",
   "@types/react-dom": "^18.2.7",
   "@typescript-eslint/eslint-plugin": "^6.0.0",
   "@typescript-eslint/parser": "^6.0.0",
   "@vitejs/plugin-react": "^4.0.3",
   "eslint": "^8.45.0",
   "eslint-plugin-react-hooks": "^4.6.0",
   "eslint-plugin-react-refresh": "^0.4.3",
   "typescript": "^5.0.2",
   "vite": "^4.4.5"
},

```
