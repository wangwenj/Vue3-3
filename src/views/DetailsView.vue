
<template>
    <el-row class="row-bg" justify="space-evenly">
        <el-col :span="12">
            <div aria-label="A complete example of page header">
                <el-page-header @back="onBack">
                <template #content>
                    <div class="flex items-center">
                    <el-avatar
                        class="mr-3"
                        :size="25"
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    />
                    <el-divider direction="vertical" /> 
                    <span class="text-large font-600 mr-3"> {{table.name}} </span>
                    </div>
                </template>
                <template #extra>
                    <div class="flex items-center">
                        🕯️🕯️🕯️
                    </div>
                  </template>
                <el-descriptions :column="2" size="small" class="mt-4">
                    <el-descriptions-item label="Name"
                    >{{table.name}}</el-descriptions-item
                    >
                    <el-descriptions-item label="Telephone"
                    >{{table.Telephone}}</el-descriptions-item
                    >
                    <el-descriptions-item label="凋零地址">{{table.address}}</el-descriptions-item>
                    <el-descriptions-item label="凋零日期">
                    <el-tag type="danger" size="small">{{table.date}}</el-tag>
                    </el-descriptions-item>
                </el-descriptions>
                <el-divider border-style="dashed" />
                <p class="mt-4 text-sm">
                    墓志铭 <el-divider direction="vertical" /> 
                {{table.motto}}
                </p>
                <el-divider/>
                <h1>Friends</h1>
                <el-table :data="table.friends" border style="width: 100%">
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                    <el-table-column prop="Telephone" label="Telephone" />
                  </el-table>
                </el-page-header>
            </div>
    </el-col>
</el-row>
</template>

<script>
import router from '../router'
import { useRoute } from 'vue-router';
import { onMounted , ref} from 'vue'
// import axios from 'axios'
export default {
    setup(){
        const route = new useRoute()
        const table = ref([])
        const allData = localStorage.getItem('allData')

        onMounted(()=>{
            const test = JSON.parse(allData).find(item=>item.id==route.params.id)
            console.log(test)
            table.value  = test
        })
        const onBack = function(){
            router.push('/')
        }
        return{
            table,onBack
        }
    }
}
</script>

<style>

</style>