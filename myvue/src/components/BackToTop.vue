<template>
    <img class="backToTop" src="../assets/img/backtotop.png" alt="" @click="backToTop" v-show="isBack">
</template>

<script>
    export default {
        data(){
            return {
                isBack:false
            }
        },
        props:["srcollRef"],
        computed:{
            scrollObj(){
                const scrollRef = this.scrollRef

                return !scrollRef ? window : this.$parent.$refs[scrollRef]
            }
        },
        methods:{
            backToTop(){
                this.scrollObj.srcollTo(0,0)
            },
            onScroll(){
                const scrollObj=this.scrollObj
                const scrollTop = scrollObj == window ?(document.documentElement.scrollTop || document.body.scrollTop) : scrollObj.scrollTop

                this.isBack=scrollTop>300?true :false
            }
        },
        mounted(){
            this.scrollObj.onscroll=this.onScroll
        }
    }
</script>

<style lang="scss" scoped>
    .backToTop{
		width: 0.54rem;
		height: 0.54rem;
		position: fixed;
		right: 0.2rem;
		bottom: 1.7rem;
	} 
</style>