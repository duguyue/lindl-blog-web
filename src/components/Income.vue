<template>
  <el-col :span="24">

    <el-table
      :data="tableData"
      border>
      <el-table-column
        prop="id"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="user_id"
        label="用户ID">
      </el-table-column>
      <el-table-column
        prop="income_type_id"
        label="收入类别ID">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="金额">
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
        url: this.global.serverPath+'/income/queryIncome',
        dataType: 'jsonp',
        params:{
          pageNum:1,
          pageSize:10
        }
      })
        .then(function (response) {
          console.log(response);
          var arr=response.data.data.list;
          console.log(arr);
          this.tableData=arr;

        }.bind(this));
    }
  };
</script>
