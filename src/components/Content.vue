<template>
  <el-col :span="20">

    <el-table
      :data="tableData"
      border>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>

  </el-col>
</template>
<script>
  import Vue from 'Vue'
  import axios from 'axios';
  Vue.prototype.$ajax = axios

  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        tableData: [],
        currentPage1: 5,
      }
    },
    created(){
      axios({
        method: 'get',
        url: 'static/api/t1.json',
      })
        .then(function (response) {
          var str=response.data;
          var arr=eval(str);
          this.tableData=arr;

          //在这里需要bind(this)，才能访问到Vue实例中的data
        }.bind(this));
    }
  };
</script>
