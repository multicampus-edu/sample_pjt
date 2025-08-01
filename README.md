# 🛒 Fullstack E-commerce Platform (React + Spring Boot + AWS)

이 프로젝트는 **미취업 개발자들이 실무 전체 흐름을 경험**할 수 있도록 설계된 교육/포트폴리오용 이커머스 시스템입니다.

---
## 👥 팀원 소개 및 역할

| 이름     | 역할                        | 담당 영역                        |
|----------|-----------------------------|----------------------------------|
| 김개발   | 팀장 / 백엔드 개발 리드     | Spring Boot, JPA, RDS           |
| 박코딩   | 프론트엔드 개발             | React, TypeScript, UI/UX        |
| 이Dev    | DevOps 및 배포 인프라 총괄  | Docker, AWS, GitHub Actions     |
| 최테스터 | QA 및 테스트 자동화 지원    | E2E 테스트, 오류 리포트, 개선 제안 |

---

## 🔍 프로젝트 개요

- **목표**: 프론트부터 백엔드, 배포까지 아우르는 실전 개발 능력 확보
- **대상**: 백엔드 & DevOps 직무 취업 준비자
- **핵심 키워드**: REST API, CI/CD, Docker, AWS EC2, S3, MySQL, React

---

## 🧱 기술 스택

| 영역     | 기술                                      |
|----------|-------------------------------------------|
| Frontend | React, TypeScript, Axios, React Router    |
| Backend  | Spring Boot, Spring Security, JPA, JWT    |
| DevOps   | Docker, GitHub Actions, Nginx             |
| Infra    | AWS EC2, S3, RDS (MySQL)                  |

---

## 🖼 시스템 아키텍처

<img width="661" height="352" alt="image" src="https://github.com/user-attachments/assets/ad5ba67f-894a-4607-8469-bb0c779335fa" />


---

## ☁ AWS 인프라 구성

<img width="982" height="747" alt="image" src="https://github.com/user-attachments/assets/b609e167-3166-4f11-beea-1b7887ad10eb" />


- EC2: 백엔드 + 프론트 + nginx 컨테이너 호스팅
- RDS: MySQL 데이터베이스
- S3: 상품 이미지 저장
- GitHub Actions → Docker 이미지 빌드 후 EC2 배포

---

## 🛠 주요 기능

### 👤 회원
- 회원가입 / 로그인 (JWT 기반)
- 사용자 정보 조회 / 수정

### 🛒 상품
- 상품 등록 / 수정 / 삭제 (관리자)
- 상품 목록 / 상세 조회

### 🧺 장바구니
- 상품 담기 / 수량 변경 / 삭제

### 📦 주문
- 주문 생성, 주문 내역 조회
- 주문 상태 변경 (관리자)

---

## 🚀 CI/CD 및 배포

- GitHub Actions → Docker 이미지 빌드 & 푸시
- EC2 인스턴스에서 docker-compose로 서비스 실행
- Nginx 리버스 프록시로 포트 정리

---

## 🔧 로컬 실행 방법

```bash
# 1. 프로젝트 클론
git clone https://github.com/your-id/ecommerce-fullstack-project.git
cd ecommerce-fullstack-project

# 2. 백엔드/프론트 빌드 및 도커 실행
docker-compose up --build
```

------|-------------------------------|-----------|
| 김개발 | 팀장 / 백엔드 개발 리드       | Spring Boot, JPA, RDS |
| 박코딩 | 프론트엔드 개발               | React, TypeScript, UI/UX |
| 이Dev   | DevOps 및 배포 인프라 총괄    | Docker, AWS, GitHub Actions |
| 최테스터 | QA 및 테스트 자동화 지원     | E2E 테스트, 오류 리포트, 개선 제안 |


---

## 🤝 협업 도구 및 사용한 툴

| 목적          | 도구                     |
|---------------|--------------------------|
| 코드 협업     | GitHub, GitHub Projects  |
| 문서 작성     | Notion                   |
| 커뮤니케이션 | Discord, Google Meet     |
| 이슈 관리     | GitHub Issues             |
| 디자인 공유   | Figma                    |

---

## 🧠 회고 및 성장 포인트

- 전체 시스템을 직접 구성하며 백엔드, DevOps, 클라우드 실력을 통합적으로 강화
- Docker와 AWS 배포, CI/CD 파이프라인을 실제로 다뤄보며 취업 역량 극대화

---

## 📎 포트폴리오 추천 활용

- GitHub: 소스코드 및 커밋 이력
- Notion: 아키텍처 설명, 기술 선택 이유, 회고
- 블로그: 트러블슈팅, 설정 방법 공유

---

## 👀 시연

- 화면
<img width="523" height="524" alt="image" src="https://github.com/user-attachments/assets/db7d59a6-1da4-4a34-80cc-8ec9a63cad5e" />

- 동영상
