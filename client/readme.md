## Reactjs Compile

npm package.json 설정

```npm start``` 명령은 webpack 을 사용하여 현재 진행중인 frontend 개발 상황을 실시간으로 디버깅해준다. hot-reloading 을 사용해서 저장할 때마다 웹의 가상환경에 반영되어 나타난다.

```npm run build``` 명령은 production 모드로, 서버에서 사용할 output file 들을 던져준다. js 스크립트는 compact 하게 나타난다.

```npm run remove``` production 이 실패하고 남은 bundle 파일들을 제거한다.
