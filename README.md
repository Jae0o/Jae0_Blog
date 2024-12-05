# 나만의 블로그 만들기 ! 🔨

<p align="center">
  <br>
  <img src="https://res.cloudinary.com/dya70nmfp/image/upload/v1720707563/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.13.25_lc13ib.png">
  <br>
</p>

<br>

## 기술 스택

|                                                                       React                                                                        |                                                                      TypeScript                                                                      |                                                                  Firebase                                                                   |                                                                   Tanstack Query                                                                    |
| :------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://res.cloudinary.com/dalxgxu2o/image/upload/v1705464866/Stack%20Logo/Small%20Logo/React_logo_tvijvb.png" width=400px alt="React"/> | <img src="https://res.cloudinary.com/dalxgxu2o/image/upload/v1705465338/Stack%20Logo/Small%20Logo/Typescript_logo_h0m2mf.png" width=400px alt="TS"/> | <img src="https://res.cloudinary.com/dalxgxu2o/image/upload/v1707144258/Stack%20Logo/Firebase_Logo_zpmmre.png" width=400px alt="firebase"/> | <img src="https://res.cloudinary.com/dalxgxu2o/image/upload/v1705463855/Stack%20Logo/React-Query-Logo_kbrt98.png" width=400px alt="tanstack query"> |
|                                                                                                                                                    |

|                                                                 Vite                                                                  |                                                                       Styled Components                                                                       |                                                                    Framer Motion                                                                    |                                                                   Zustand                                                                    |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://res.cloudinary.com/dalxgxu2o/image/upload/v1705463857/Stack%20Logo/Vitejs-Logo_sf6fos.svg" width=400px alt="Vite"/> | <img src="https://res.cloudinary.com/dalxgxu2o/image/upload/v1705463857/Stack%20Logo/styled-components-Logo_jubqox.svg" width=400px alt="Styled Components"/> | <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1634080848/noticon/kcpekdqmworot1csvv7k.png" width=400px alt="framer motion"/> | <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1675253316/noticon/gg2mfsvpu2aje4f8rpuc.png" width=400px alt="zustand"> |
|                                                                                                                                       |

<br>

## 프로젝트 소개

<p align="center">

> **나만의 개발 욕구를 해소할 수 있는 개인 개발 도화지를 만들자!**
>
> 평소 개인 회고와 기술과 관련된 내용을 포스팅할 수 있는 나만의 블로그를 직접 만들고 싶었습니다.
>
> 평소 구현하고 싶었던 기능을 마음껏 자유롭게 구현할 수 있는 나만의 도화지 같은 공간을 만들고 싶었습니다.
>
> 또한 직접 개발한 블로그를 이용하며 지속해서 개선해 나갈 프로젝트입니다!

</p>

<br>

<br>

## 업데이트 & 개선 사항

**1.0.1**<br>

- Code Splitting을 위한 `lazy import` & `suspense` 적용
- library import에 `lazy import` 적용을 통한 초기 렌더링 개선

|                     | 미적용   | React.lazy | + Library 스플리팅 | + Suspense |
| ------------------- | -------- | ---------- | ------------------ | ---------- |
| index 파일 크기     | 961.34KB | 581.90KB   | 12.00KB            | 12.65KB    |
| FCP ( 초기 렌더링 ) | 2.4s     | 1.7s       | 2.3s               | 0.8s       |
| LCP                 | 2.4s     | 1.7s       | 2.4s               | 1.0s       |
| Lighthouse 성능     | 66점     | 72점       | 62점               | 83점       |

<br>

**1.0.2**<br>

- 폴더 구조 변경 ( index.ts 적용, 규칙적인 폴더 네이밍 )
- type 파일 정리 및 불필요한 type정의 제거

<br>

**1.0.3**<br>

- Variable Font, Subset Font 적용

|                     | 개선 전 ( 코드 스플리팅 ) | 가변 폰트 적용 후 | 서브셋 적용 후 |
| ------------------- | ------------------------- | ----------------- | -------------- |
| Font 파일 크기      | 대략 2405KB               | 2057.69KB         | 218.68KB       |
| FCP ( 초기 렌더링 ) | 0.8s                      | 2.9s              | 0.6s           |
| LCP                 | 1.0s                      | 2.9s              | 0.7s           |
| Speed Index         | 1.7s                      | 2.9s              | 0.8s           |
| Lighthouse 성능     | 83점                      | 56점              | 87점           |

<br>

**1.0.4**<br>

- Icon 개선 및 메인 페이지 스타일 개선

|                      | 개선 전 | 아이콘 개선 후 |
| -------------------- | ------- | -------------- |
| Aside Component 번들 | 2.33KB  | 12.52KB        |
| FCP ( 초기 렌더링 )  | 0.6s    | 0.5s           |
| LCP                  | 0.8s    | 0.7s           |
| Speed Index          | 1.1s    | 0.9s           |
| Lighthouse 성능      | 87점    | 89점           |

<br>

**1.0.5**<br>

- Infinity Scroll 메인 페이지 적용, 캐싱을 통한 데이터 패칭 개선

|                     | 개선 전 | 아이콘 개선 후 |
| ------------------- | ------- | -------------- |
| FCP ( 초기 렌더링 ) | 0.5s    | 0.5s           |
| LCP                 | 0.7s    | 1.3s           |
| Speed Index         | 0.9s    | 1.3s           |
| Lighthouse 성능     | 89점    | 83점           |

<br>

**1.0.6**<br>

- Styled component 적용 및 애니메이션 성능 개선

|                     | 개선 전 | 개선 후     |
| ------------------- | ------- | ----------- |
| FCP ( 초기 렌더링 ) | 0.5s    | 0.5s        |
| LCP                 | 1.3s    | 1.2s        |
| Speed Index         | 1.3s    | 1.1s        |
| Lighthouse 성능     | 83점    | 96점 ~ 97점 |

<br>

**1.1.0**<br>

- Lazy Loading & 이미지 최적화
- 1차 성능 개선 최종

|                      | 1차 개선 시작전 | 최종 개선 후 |
| -------------------- | --------------- | ------------ |
| index 번들 파일 크기 | 961.34 KB       | 12.48 kB     |
| FCP ( 초기 렌더링 )  | 2.4s            | 0.6s         |
| LCP                  | 2.4s            | 0.9s         |
| Speed Index          | 2.7s            | 1.1s         |
| Lighthouse 성능      | 66점            | 99점         |

**1.1.1**<br>

- Page Progress Bar 추가

**1.1.2**<br>

- 블로그 방문자 수 체크 기능 추가

**1.1.3**<br>

- Redux , Redux-saga 적용

**1.1.4**<br>

- Redux , Redux-saga 제거
  - 현재 Project에서는 Redux를 적용하기에 부담스럽고, 무의미 하다고 판단하여 좀 더 가벼운 Zustand로 롤백

**1.1.5**<br>

- React-Helmet-Async , 각종 Meta 적용
- SEO 개선 진행

|                 | 개선 전 | 개선 후 |
| --------------- | ------- | ------- |
| LightHouse 점수 | 82점    | 99점    |

<br>

<br>

<br>

<br>

## 구현 기능

<br>

### 홈 페이지

<img src="https://res.cloudinary.com/dya70nmfp/image/upload/v1720707563/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.13.25_lc13ib.png">

<br>

### 카테고리 페이지

<img src="https://res.cloudinary.com/dya70nmfp/image/upload/v1720707739/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.21.47_qzozpb.png">

<br>

### 포스트 페이지

<img src="https://res.cloudinary.com/dya70nmfp/image/upload/v1720707792/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.23.01_jsmzxq.png">

<br>

### 게시물 작성 페이지

<img src="https://res.cloudinary.com/dya70nmfp/image/upload/v1720707907/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.25.01_nmnuf7.png">

<br>

<br>

<br>
