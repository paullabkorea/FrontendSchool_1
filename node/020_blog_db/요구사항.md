# Data 구조(Data Schema, ERDCloud와 같은 툴로 시각화 합니다.)

## 게시물 Data schema
    * id(게시물 번호)
    * title
    * content
    * section
    * pubDate
    * modDate

## 로그인 Data schema
    * id
    * pw

# API 명세
## GET
    * / - 메인화면 최근 게시물 3개
    * /about - 내 소개
    * /blog - 블로그 글 리스트 전부
    * /write - 로그인시에만 활성화(생성, 수정) -> post값은 /blog로
    * /blog/:id - 블로그 상세 글
    * /blog/?section=:section - 해당 섹션만 모아 볼 수 있도록

## POST (생성)
    * /write - title, content, section (날짜는 서버에서 처리)

## PUT (수정)
    * /blog/:id - title, content, section (날짜는 서버에서 처리)

## DELETE (삭제)
    * /blog/:id - 삭제 완료 -> blog로 리다이렉트
