#### 1. Layer 구성 원칙 정리
- app: 글로벌 셋업 (Provider, Layout, 전역 스타일)

- pages: 실제 라우팅 대상이 되는 페이지

- widgets: 페이지를 구성하는 독립적인 UI 조합

- features: 특정 유저 행동/비즈니스 기능 (예: 북마크, 저장 등)

- entities: 데이터 모델 + 도메인 상태

- shared: 전역 공용 코드 (UI, lib, utils, constants, api 등)

2. Slice → Segment 구조화
각 Slice는 ui, model, constants, api, hooks, lib 등으로 나눔

FSD랑 같이 구조를 정의한 경우 프로젝트 폴더 구조는?
```
src/
├── app/                 
│   ├── layout.tsx
│   ├── page.tsx
│   ├── login/
│   │   ├── page.tsx
│   └── dashboard/
│       └── page.tsx
│
├── entities/            # 핵심 데이터 정의 및 비즈니스 로직
│   └── user/
│       ├── model/       # Zustand 상태 정의
│       ├── api/         # 서버 API 호출 모음
│       ├── lib/         # 유틸 함수
│       └── types.ts     # 타입 정의
│
├── features/            # 기능 중심 레이어
│   └── login/           # 로그인 기능
│       ├── model/       # 상태 관리
│       ├── lib/         # 기능 유틸
│       ├── types/       # 기능 관련 타입
│       └── ui/          # UI 계층 (Atomic Design 적용)
│           ├── atoms/           # Input, Label, Button 등
│           ├── molecules/       # 로그인 Form 등
│           └── organisms/       # 전체 로그인 Section 등
│
├── widgets/             # 페이지를 구성하는 독립된 UI 블록
│   ├── header/
│   ├── footer/
│   └── sidebar/
│
├── shared/              # 전역 재사용 리소스
│   ├── ui/              # 공통 UI 컴포넌트
│   │   ├── button/
│   │   │   ├── atoms/
│   │   │   └── molecules/
│   │   └── modal/
│   │       ├── atoms/
│   │       └── molecules/
│   ├── lib/
│   ├── config/
│   ├── hooks/
│   └── styles/
```