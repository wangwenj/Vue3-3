
<template>
    <el-row  justify="space-evenly">
        <el-col :span="12" :offset="6">
            <el-form
                label-position="left"
                label-width="100px"
                style="max-width: 460px"
                @keydown.enter="login"
            >
                <el-form-item label="Name">
                <el-input  v-model="name"/>
                </el-form-item>
                <el-form-item label="Password">
                <el-input type="password" show-password  v-model="password"/>
                </el-form-item>
                <el-button @click="login">登录</el-button>
              <el-link :underline="false" @click="register" style="margin-left: 5px;">注册</el-link>
                {{message}}
            </el-form>
        </el-col>
      </el-row>
</template>

<script>
import { onMounted, ref } from 'vue'
// 引入axios
// import axios from 'axios'
// 引入路由
import router from '../router/index'
export default {
    setup(){
        const name = ref('tangyusen')
        const password = ref('202250915129')
        const message = ref('')
        // 登录后就不让进入login界面 挂载生命周期
        onMounted(()=>{
            if(localStorage.getItem("message")==="ok"){
                router.push({name:'main'})
            }
        })
        const login = ()=>{
            message.value = ""
            if('tangyusen'===name.value&&'202250915129'===password.value){
                localStorage.setItem("message","ok")
                router.push({name:'main'})
            }else{
                message.value = "账号或密码错误"
            }
            
        }
        const register = ()=>{
            router.push('/register')
        }
        return{
            name,password,login,
            message,register
        }
    }
}
</script>

<style>

</style>