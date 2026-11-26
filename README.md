# 🌏 K-Royal Inbound Tour — 외국인 대상 국내 여행사 통합 플랫폼

> 인천(ICN)·김해(PUS) 멀티 공항 입·출국 동선, 한국 전통 창호문살 오프닝 인트로, 확장형 다국어 양방향 자동 번역, 지역별 맞춤 패키지 빌더(숙박·리무진·KTX·렌터카), 항공사 스타일 버스 좌석 평면도, PC 통합 관리자(`admin.html`) 및 현장 진행자 모바일 비용 등록(`m-expense.html`)을 모두 갖춘 인바운드 여행사 웹 플랫폼입니다.

---

## 📁 파일 구성
* `index.html`: 외국인 고객용 다국어 예약 사이트 (전통 창호문살 오프닝 인트로 & 7대 메뉴)
* `admin.html`: PC 통합 관리자 시스템 (9대 핵심 운영 메뉴)
* `m-expense.html`: 현장 행사 진행자(가이드/OP) 전용 모바일 비용·영수증 즉시 등록 앱
* `assets/data.js`: 다국어 사전(i18n), 양방향 번역 엔진, 리무진 10대·배차·숙박·패키지·알림·정산 통합 DB
* `server.ps1` / `start.bat`: 무설치 즉시 실행 로컬 웹서버 (포트 `5060`)
* `인바운드국내관광프롬프터.TXT`: 작업자 프롬프터 및 변경 이력 (UTF-8)

---

## 💻 실행 방법
1. `d:\92.SW\인바운드 국내관광사이트 구축\start.bat` 더블 클릭 (또는 `powershell -ExecutionPolicy Bypass -File server.ps1`)
2. 브라우저에서 접속:
   * 고객 사이트: `http://localhost:5060/index.html`
   * 통합 관리자: `http://localhost:5060/admin.html`
   * 모바일 비용등록: `http://localhost:5060/m-expense.html`
