<template>
    <div class="my-layout">
        <nav-bar :class="navBar?'my-nav-bar  my-nav-bg':'my-nav-bar'"></nav-bar>
        <back-drop :style="{backgroundImage:`url(${background})`}" :message="message"></back-drop>
        <app-main ></app-main>
        <my-footer></my-footer>
    </div>
</template>
<style scoped>
.my-layout{
    position: relative;
    height: 100vh;
}
.my-nav-bar{
    position: absolute;
    width: 100%;
    top: 0px;
    z-index: 999;
}
.my-nav-bg{
    background-image: url('../static/images/nav-bg.png');
}
</style>
<script>
import navBar from './components/NavBar'
import AppMain from './components/AppMain'
import BackDrop from './components/Backdrop'
import myFooter from './components/Footer'
export default {
    components:{
        navBar,
        AppMain,
        BackDrop,
        myFooter
    },
    computed:{
        background(){
            let path = this.$route.path
            if(path === '/home'){
                return require('@images/home-bg.jpg')
            }
            if(path === '/recruit'){
                return require('@images/recruit-bg.jpg')
            }
            if(path === '/info'){
                return require('@images/info-bg.jpg')
            }
            if(path === '/resource'){
                return require('@images/resource-bg.jpg')
            }
            if(path === '/blog' || path.substring(1,5) === 'blog'){
                return require('@images/blog-bg.jpg')
            }
            if(path === '/blog'){
                return require('@images/blog-bg.jpg')
            }
            if(path === '/message'){
                return require('@images/message-bg.jpg')
            }
            if(path === '/about'){
                return require('@images/about-bg.jpg')
            }
            return require('@images/home-bg.jpg')
        },
        navBar(){

            let name = this.$route.name
            if(name === 'article'){
                return true
            }
            if(name === 'detail'){
                return true
            }

            return false
        },
        message(){
            let path = this.$route.path
            if(path === '/home'){
                return '以梦为码,编织年华'
            }
            if(path === '/recruit'){
                return '总有远方可以奔赴'
            }
            if(path === '/info'){
                return '别错过夕阳和日落'
            }
            if(path === '/resource'){
                return '志当存高远'
            }
            if(path === '/blog'){
                return '不将就,不妥协,不停留'
            }
            if(path === '/message'){
                return '凡是过往,皆为序章'
            }
            if(path === '/about'){
                return '我们的南工社团'
            }
            return '以梦为码,编织年华'
        }
    },
}
</script>