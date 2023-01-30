<template>
    <div>
        <h2>짝수만 표시</h2>
        <ul>
            <li v-for="item in myNumber" :key="item">{{ item }}</li>
        </ul>
        <button @click="addEvent">클릭</button>
    </div>
</template>
<script>

export default{
   data(){
    return{
        myNumber:[1,2,3,4,5,6]
    }
   },
   methods:{
    addEvent(){
        this.myNumber=this.myNumber.filter(
            (value)=>{return value%2==0}
            );
    }
   }
}
</script>
<style></style>