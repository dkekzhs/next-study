### 2강 내용 정리 (리액트 상기)


#### css 파일별로 적용하려면 어떻게 해야할까
1. css 만들 때 ClassName.module.css 만들고 임포트 하면 된다.
2. 이유는 vite가 자동으로 인식해주고 인식된 건 유니크한 파일로 인식되게 해준다. -> 글로벌 클래스 css랑 충돌 방지 쌉 가능

정확한 이유
webpack 5 + css-loader 때문에 된다. css loader 옵션을 true 로 변경되어있다면 앞서 말한대로 인식하고 해줌.

#### 리액트는 하나의 컴포넌트만 리턴해야하는데 어캐할까
1. <div></div> 태그 감싸서 리턴 해도 되는데 넘 지저분해짐 -> 이건 실제로 랜더링 되버림
2. 그래서 <></> 가짜 감싸기 생김. -> 가상 태그 실제 랜더링 될떄 추가 안됨


#### 이벤트 처리 방법
1. 리액트 onChange = { functionName } 으로 쓴다.
2. 선언한 함수는 event 파라미터를 통해 쓴다.

#### 리액트에서 jsx 파일은 자동으로 랜더링해주지 않는다.
1. 리액트에서 onChange로 설정 후 아래 처럼 하며 안됨.
```javasrcipt
let test =""
function onChangeData(event){
    test = evenet.target.value

}
function Temp(){
    return(
        <input onChange={onChangeData}/>
        <p>{test}</p>
    )
}
```
2. 안되는 이유는 일반 변수이기 떄문에 상태가 바뀌어도 재랜더링 안해줌
3. 그래서 useState 쓴다.

#### 리액트 유즈이펙트 쓰는 이유
1. useState로 패치 데이터 재 랜더링 하면 무한루프 발생. ㅇㅈ
2. 그래서 useEffect 씀.

----

걍 공부하면서 생긴 궁금증들
1. 리액트 쓰면 리덕스로 상태관리하는데, 이때 그럼 넥스트로 구현한 화면페이지인 경우는?
