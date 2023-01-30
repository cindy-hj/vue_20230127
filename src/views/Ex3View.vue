<template>
    <div>
        <h2>단가와 개수를 입력하면 세금 1.08 포함 금액을 계산하기</h2>
        <input type="text" v-model="price"/>
        <span>원</span>
        <input type="text" v-model="count"/>
        <span>개</span>
        <h1>가격{{ sum }}</h1>
        <h1>세금포함{{ tax }}</h1>
    </div>
</template>
<script>

export default{
   data(){
        return{
            price:1000,
            count:1
        }
   },
    computed:{
        sum(){
            return parseFloat(this.price)*parseFloat(this.count)
        },
        tax(){
            return parseFloat(this.sum)*1.08
        }
   }
}
</script>
<style></style>