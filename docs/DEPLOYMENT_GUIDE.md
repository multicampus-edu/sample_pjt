
# 🛠 배포 가이드: Docker + AWS EC2

이 가이드는 이커머스 프로젝트를 AWS EC2에서 Docker로 배포하는 방법을 설명합니다.

---

## 1. EC2 인스턴스 생성

- Amazon Linux 또는 Ubuntu
- 보안그룹: 80, 8080, 3306 포트 오픈

## 2. 환경 설치
```bash
sudo apt update && sudo apt install docker docker-compose git -y
sudo systemctl start docker
```

## 3. 프로젝트 다운로드 및 실행
```bash
git clone https://github.com/your-id/ecommerce-fullstack-project.git
cd ecommerce-fullstack-project
docker-compose up --build
```

## 4. 접속 확인

- 백엔드 API: http://<EC2-IP>:8080/api/users/register
- Swagger 문서: http://<EC2-IP>:8080/swagger-ui/index.html
- Nginx 리버스 프록시: http://<EC2-IP>/

---

## 5. Docker 이미지 빌드 수동 명령
```bash
cd backend
./mvnw package
docker build -t ecommerce-backend .
```

## 6. GitHub Actions 연동 (선택)
- `.github/workflows/deploy.yml`에 EC2 SSH 접속 정보 설정하여 자동화 가능

---

문의: hong.dev@gmail.com
