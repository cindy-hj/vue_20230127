<template>
    <div>
        <h2>배열 데이터를 테이블로 표시하기</h2>
        <table>
            <thead>
                <th v-for="list in header" :key="list">
                {{ list }}</th>
            </thead>
            <tbody>
                <!-- tr 행(가로줄) -->
                <tr v-for="line in ranking" :key="line">
                    <!-- td는 tr 안에 포함되는 칸(렬) -->
                    <td v-for="item in line" :key="item">
                        {{ item }}
                    </td>
                </tr>
            </tbody>
       </table>
    </div>
</template>
<script>
export default{
    data() {
        return {
            header:['프로그램언어',2023,2022,2021,2020,2019],
            ranking:[
                ['자바',3,4,5,6,7],
                ['C',4,5,6,7,8],
                ['C++',5,6,7,8,9],
                ['파이썬',5,6,7,8,9],
                ['자바스크립트',6,7,8,9,1]
            ]
        };
  },
}
</script>
<style>
 
</style>