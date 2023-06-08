
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
              <el-button @click="register">注册</el-button>
              {{message}}
          </el-form>
      </el-col>
    </el-row>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()
    const name = ref('tangyusen')
    const password = ref('202250915129')
    const message = ref('')

    onMounted(() => {
      if (localStorage.getItem('message') === 'ok') {
        router.push({ name: 'main' })
      }
    })

    const register = () => {
      message.value = ''
      store.dispatch('register', { name: name.value, password: password.value })
        .then(() => {
          localStorage.setItem('message', 'ok')
          alert('注册成功')
          router.push({ name: 'login' })
        })
        .catch(err => {
          message.value = err
        })
    }

    return {
      name,
      password,
      register,
      message
    }
  }
}
</script>

<style>

</style>