useState는 인자로 벨류값 변경시 재 랜더링할 수 있게 만들어주는 훅
근데 무거운작업 함수를 같이 쓰게 될 경우 매번 작업을 재 실행할 수 있음. 그래서 불 필요하게 여러번 호출 될 수 있음
콜백으로 하면 됨. 첫 초기화시 useState(() => {무거운작업()}) 이렇게 하면 첫 랜더링 시에만 호출됨.

useEeffect (() => {}) 콜백 기본
인자, 두번째 배열을 받는거(디펜던시 어레이)
첫번째는 랜더링 될때마다 매번 실행됨. 두번째 인자가 value 값이 바뀔 때만 실행됨, 빈 배열은 랜더링될때만 실행
CleanUp 작업 처리가 있어야됨. 이벤트리스너 제거, 타이머 제거 등.. retrun 으로 하면됨. return () => {} 언마운트 될떄 실행됨.

useRef는 커런트에 저장, 언제든지 변경될 수 있음. 컴포넌트가 계속되어 랜더링되어도 언마운트 될때까지 사용됨
스테이트와 비슷하게 저장공간으로 사용. 리 랜더링되면 내부 변수들 초기화가 되버림.
ref는 No 랜더링, 변수들의 값이 유지됨. Ref의 값은 유지됨.
Dom요소에 접근 가능. Document.querySelector와 같은 느낌
ref는 변화는 감지하지만, 변화가 랜더링을 감지하면 안될 떄 사용하면 됨.

useContext + Context API는 props 로 하위 컴포넌트에게 접근 가능하게 해주는 기능
Data를 state로 가지고 있을 때 전달해야할 때 prop 중간 거쳐서 줘야하는데 (Prop drilling) 
-> 모든 중간 컴포넌트를 거쳐야함..

```javascript

import {createContext } from 'react' 
export const ThemeContext = createContext(null); -> 초기값

import {ThemeContext } from './context/ThemeContext';
const [isDark, setIsDark] = useSate(false);

return (
<ThemeContext.Provider value={{isDark, setIsDark}}>
<Page/>	
<ThemeContext.Provider/>
)


const {isDark} = useContext(ThemeContext);


```

useMemo, useCallback은 컴포넌트 성능을 끌어올리는 방법

useMemo 는 memorization
자주 필요한 값을 캐싱 후 꺼내서 사용
함수형 컴포넌트는 랜더링이 된다는건 호출된다는 것 -> 모든 내부 변수 초기화

구조 두개의 인자, 콜백과 배열 
useMemo는 필요할때만 사용해라.
useEffect, Object 할당시, 주소값달라져서 업데이트됨.
useMemo 콜백안에 리턴 값으로 최적화 가능Q

useCallback
콜백함수 자체를 memorization 하는 것
두번째 인자로 유즈콜백 변경시에만 호출할 변수를 넣어주면 된다.
예시 useCallback( ()=>{console.log(`${size} 입니다`); },[size])
이렇게 쓰면 싸이즈 변경시에만 함수값 변경됨.

useReducer 스테이트를 생성하고 관리할 수 있는 툴이다. 복잡한 스테이트를 관리해야할 때
Reducer, Dispatch, Action을 알아야함.
Reducer 는 스테이트를 업데이트하는 역할.
Dispatch Reducer한테 요구하는거 Action은 그 행동 


cosnt [money, dispatch] = useReducer(reducer , 0)  첫번째 리듀서, 두번째 스테이트 초기값
const reducer = (현재스테이트, action) =>{}


 


