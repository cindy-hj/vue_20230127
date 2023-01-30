<template>
    <div>
        <h2>적색, 녹색, 청색 의 슬라이더를 움직이면 완성된 색을 표시하기</h2>
  <p id="colorBar" :style="{backgroundColor:mixColor}">{{mixColor}}</p>
   <input type="range" v-model="R" min="0" max="255"/> 
   <input type="range" v-model="G" min="0" max="255"/>
   <input type="range" v-model="B" min="0" max="255"/>
    </div>
</template>
<script>

export default{
    data(){
        return{
            R:10,
            G:255,
            B:50
        }
    },
    computed:{
        mixColor(){
            let ans="RGB("+this.R+","+this.G+","+this.B+")"
            return ans
        }
    }




}
</script>
<style>
/* p{
    background: rgb(30,40,50);
} */
#colorBar{
    width: 400px;
    height: 200px;
    margin: 0 auto;
    border: 10px solid black;
}
</style>