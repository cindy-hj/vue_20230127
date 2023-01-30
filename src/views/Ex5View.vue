<template>

    <div>
        <h2>금지문자가 입력 되면 경고창 띄우기</h2>
        <!-- indexOf(text);
        => text 영역에 삽입된 텍스트가 몇번째 인지 인덱스값으로 알려줌
        => 중복되는 문자는 첫번째 문자의 위치값만 알려줌  -->

        <!-- substring(a,b),substr
       =>n과 m사이 문자열 반환-->
       <p>금지 문자는 {{ hiddenText }}</p>
       <textarea v-model="inputText"></textarea>
    </div>

</template>

<script>
export default{
    data() {
    return {
        hiddenText:'더워요',
        inputText:'오늘도 추워요'
    };
  },
  watch:{
    inputText(){
        let pos=this.inputText.indexOf(this.hiddenText)
        if(pos>=0){
            alert(this.hiddenText+"는 입력할 수 없습니다.");
            //hiddenText 삭제
            this.inputText=this.inputText.substring(0,pos)

        
        }
    }
  }
 
}
</script>

<style>
</style>