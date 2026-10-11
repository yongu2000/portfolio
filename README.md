# 조용우 포트폴리오

원본 PDF 10페이지를 글꼴 외곽선과 이미지를 포함한 SVG로 옮긴 정적 웹사이트입니다. 디자인을 보존하고 모든 확대 비율에서 벡터 글자와 도표를 선명하게 표시합니다. 원본 한글 문자 매핑이 깨져 있어 본문의 텍스트 선택·검색은 제공하지 않습니다. 페이지 제목과 도구에는 접근성 레이블을 제공합니다.

## 로컬 실행

이 폴더에서 `python -m http.server 8080` 실행 후 http://localhost:8080 으로 접속합니다. 빌드와 패키지 설치가 필요하지 않습니다.

## GitHub Pages 배포

1. GitHub에 공개 저장소를 생성합니다.
2. 이 폴더의 **내용 전체**를 저장소 루트에 업로드합니다. `assets`와 `portfolio.pdf`도 포함합니다.
3. Settings → Pages → Build and deployment에서 Source를 Deploy from a branch로 설정합니다.
4. 업로드한 브랜치(일반적으로 main), /(root)를 선택하고 Save를 누릅니다.
5. Pages 화면에 표시되는 배포 URL로 접속합니다.

GitHub Free는 공개 저장소에서 Pages를 제공합니다.
공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 구성

- index.html: 포트폴리오와 페이지 이동 메뉴
- style.css: 반응형 화면과 인쇄 스타일
- app.js: 페이지 이동 및 확대 보기
- assets/page-01.svg ~ page-10.svg: 원본 페이지
- portfolio.pdf: 변경하지 않은 원본

외부 CDN이나 서버 API를 사용하지 않으며 프로젝트 저장소 하위 URL에서도 동작하도록 상대 경로를 사용합니다.
