### Caching Type 

#### 데이터 캐싱
1. Request Memoization
- 동일한 url 요청 시, 이미 한 번 요청한 결과를 캐시에 저장하고, 같은 요청이 다시 들어올 때 캐시된 결과를 재사용하여 불필요한 네트워크요청을 방지한다.
2. Data Cache
- 요청된 데이터를 계속해서 사용하는것을 말한다. 언제 그럼 이 캐시를 그만두고 새로 갱신할 수 있게 하냐? revaildatePath를 쓰면 된다.
- fetch 설정으로 cache, next 설정으로 관리할 수 있다.

```javascript
const revalidate = 5; # 자동으로 패치 시 5초 캐시 사용
const dynamic = 'auto, force-dynamic' #no store = force-dynamic = unstable_noStore() 

한 파일에 변수로 설정하면 자동으로 fetch시 파라미터로 설정된다.
```
3. Full Route Cache
4. Router  Cache

#### revalidateTag 
1. fetch("~", {next : {tags : ['msg']}}) tags 설정후 revalidateTag 사용하면  그 부분만 리벨리데이트된다.

#### react cache
1. 리액트 캐시 지원하는데 이걸 언제쓸까 중복적인 API 호출 요청을 막아주는 거다.
2. 예를 들어서 학생정보를 불러와서 다른 화면에도 전부 뿌려주려는걸 구현중일 때, 패칭을 여러번 보내는것보다 리액트 캐시를 쓰면 요청 더 안보내고 화면 구성을 할 수 있다.