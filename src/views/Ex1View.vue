<template>
    <div>
        <h2>입력한 문장의 작성한 문자수를 표시하기</h2>
        <textarea v-model="myText"></textarea>
        <h1>작성한 문자의 수는 {{ myText.length }}</h1>
    </div>
</template>
<script>

export default{
   data(){
        return{
            myText:''
        }
   }
}
</script>
<style></style>