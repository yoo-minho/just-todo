1. .editorconfig는 간단하게 Ctrl + Alt + L 을 먹는 것 같다.
2. prop 과 inject/provide의 차이는 prop는 눈에 보이게 바로 부모 자식간에 데이터 전달의 느낌이나 (약간 파이프)
inject/provide는 부모 자식간의 관계에 있는 경우 그 흐름 상 데이터를 띄워놓고 필요하면 끌어다 쓰는 느낌으로 보인다. (약간 강물)
   그래서 i/p는 흐름이 명확하지 않아 특수한 경우 외에 권장하지 않는다고 공식문서에서도 설명한다.
3. 타입스크립트 개까다롭다. event.target.checked 하려거든 
```typescript
change (event: Event): boolean {
 const target = event.target as HTMLInputElement
 return target.checked
}
```
이렇게 해야하네!
4. VUEX 데코레이터 버전   
- VUE2 + VUEX3 => npm i -s vuex-module-decorators@1
- VUE3 + VUEX4 => npm i -s vuex-module-decorators or vuex-module-decorators@2

5. action dispatch 안되는 현상 => 포기? ㅋㅋ
- https://avengersrhydon1121.tistory.com/273
- https://github.com/championswimmer/vuex-module-decorators/issues/200

6. mapGetters Property does not exist on type 이슈
- 찾을수가 없음
```typescript
@Component({
  components: {
    item
  },
  computed: {
    ...mapGetters([
      'allTodoList',
      'activeTodoList',
      'clearTodoList'
    ])
  }
})
export default class ItemList extends Vue {
  renderList: Item[] = [];
  allTodoList!: Item[]; //이렇게
  activeTodoList!: Item[]; //이렇게
  clearTodoList!: Item[]; //이렇게

  created (): void {
    this.renderList = this.allTodoList
  }

  @Watch('$route.params.status')
  routeUpdate (newValue: string): void {
    console.log('newValue', newValue)
    if (!newValue) {
      this.renderList = this.allTodoList
    } else if (newValue === 'active') {
      this.renderList = this.activeTodoList
    } else if (newValue === 'clear') {
      this.renderList = this.clearTodoList
    }
  }
}
```