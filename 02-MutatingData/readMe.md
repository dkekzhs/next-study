### Mutating Data Deep dive

#### useFormStatus useFormState
1. useFormState -> state, formAction (서버 액션의 반환값을 추적해서 상태를 업데이트)
2. useFormStatus -> pending, data, methed, action (Form 제출의 진행상태와 추가 정보 표시) 
3. useFormStatus 쓸 때 form 밖에 있으면 pending false니깐 생각잘하자.
4. useFormState는 action연결해야한다.

#### action bind ? 
1. 새로운 콜백 함수를 만들어서 인자 고정해서 리턴한다.
2. 첫번쨰 null인 이유는 this 함수인데 생성자 없으니 null

#### useOptimistic 
