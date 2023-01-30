<template>
    <div>
        <!-- ToDo 리스트 기능
        1. 체크박스 + 할일 나열 표시하는 기능
        2. 체크박스 취소선을 긋는 기능
        3. 할일을 추가하는 기능
        4. 취소선이 그어진 항목을 삭제하는 기능
        5. 총 건수나 완료건수를 표시하는 기능 -->

        <!-- 1. todos 데이터를 활용해서 반복 삽입하기 
        2. 완료된 항목이 체크가 되면 완료표시로 텍스트 취소선, 텍스트 색상 변경이 되도록 하기 
        3. 완료 갯수 / 전체 건수 표시
        4. 완료 목록 삭제 버튼
        5. 엔터를 치면 할일 목록에 내용 추가 되게 만들기
        6. 리스트에 완료일 추가
        7. 할일 입력시 완료일 추가 삽입
            - 완료일이 추가가 안되면 자동 오늘 날짜 + 1일이 되어 삽입되도록
        8. 현재일 기준 미완료된 할 일은 연장 버튼을 삽입하여 1일 단위로 완료일 연장하기
        9. 할일 순서로 오름차순 정렬 -->
        <div v-for="(tmp, index) in todos" :key="tmp">
            <label>
                <input type="checkbox" v-model="tmp.done" />
                <span :class="{done: tmp.done}">{{ tmp.text }}</span>
                <span :class="{done: tmp.done}">({{ tmp.DoDate }})</span>
                <button type="button" @click="extendDate(index)">연장</button>
            </label>
        </div>

        <input type="text" v-model.trim="addtext" @keyup.enter="handleAdd" placeholder="할 일 추가" />
        <input type="text" v-model.trim="doDate" @keyup.enter="handleAdd" placeholder="yyyymmdd" />

        <p>완료 건수 / 전체 건수</p>
        {{ remaining }} / {{ todos.length }}
        <p><button @click="handleDone">완료 목록 삭제</button></p>
        <p><button @click="handleSort('todo')">할 일 재정렬</button></p>
    </div>
</template>

<script>
export default {
    data () {
        
        return {
            todos:[{
                done: false,
                text: "오전 7시 기상", 
                DoDate: "20230130"
            },{
                done: false,
                text: "커피 사러가기",
                DoDate: "20230129"
            },{
                done: false,
                text: "빵 사러가기",
                DoDate: "20230128"
            }],
            addtext: '',
            doDate: ''
        }
    },
    computed: {
        remaining () {
            return this.todos.filter((val) => {
                return val.done
            }).length
        }
    },
    methods: {
        handleDone () {
            this.todos = this.todos.filter((val) => {
                return val.done === false
            })
        },
        handleAdd () {
            let doDate = this.doDate;
            if (!doDate) {
                // 전체 시간 가지고 오기
                let date = new Date();
                // Date.parse() 문자형을 숫자형으로 가지고 옴
                // 하루를 밀리세컨드로 표현 1*1000*60*60*24
                date = new Date(Date.parse(date)+1*1000*60*60*24);
                
                // 년도 가지고 오기
                let year = date.getFullYear();
                // 월 가지고 오기, 0~11월 까지 표시 +1, 월을 01,02,03 형으로 변경하기 위해 숫자를 문자로
                let month = new String(date.getMonth()+1);
                // 일 가지고 오기
                let day = new String(date.getDate());
                console.log(date);

                // 한자리 수로 되어 있을때 0을 붙여서 두자리 표현 만들기
                if(month.length === 1) {
                    month = '0'+ month
                }
                if(day.length === 1) {
                    day = '0' + day
                }
                doDate = year+month+day;
            }

            if(this.addtext) {
                this.todos.push({
                    done: false, 
                    text: this.addtext,
                    DoDate: doDate
                })
            }
            this.addtext = '';
            this.doDate = '';
        },
        extendDate(index) {
            // yyyymmdd
            let strDate = this.todos[index].DoDate;
            let y = strDate.substr(0,4);
            let m = strDate.substr(4,2);
            let d = strDate.substr(6,2);

            // m-1을 안하면 버튼 클릭할때 마다 m 값도 1 씩 증가... 왜지?
            let exDate = new Date(Date.parse(new Date(y,m-1,d))+1*1000*60*60*24);
            
            let year = exDate.getFullYear();
            let month = new String(exDate.getMonth()+1);
            let day = new String(exDate.getDate());
            
            if(month.length === 1) {
                month = '0'+ month
            }
            if(day.length === 1) {
                day = '0' + day
            }
            
            exDate = year+month+day;
            this.todos[index].DoDate = exDate;
        },
        handleSort(type) {
            if(type === 'todo') {
                this.todos.sort((a,b)=> {
                    console.log(a.text);
                    console.log(b.text);
                    console.log(a.text<b.text?-1:1);
                    return a.text<b.text?-1:1;
                })
            } 
            // else {
            //     this.todos.sort((a,b)=>{

            //     })
            // }
            // for(let i = 0; i++; i <this.todos.length){
            //     this.todos[i].DoDate.sort((a,b)=>{
            //         return a-b;
            //     });
            // }
        }
    }
}
</script>

<style lang="css" scoped>
.done{
    color: green;
    /* 취소선 */
    text-decoration: line-through;
}
</style>