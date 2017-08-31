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
        prop="userId"
        label="用户ID">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="planStartTime"
        label="计划开始时间">
      </el-table-column>
      <el-table-column
        prop="planEndTime"
        label="计划截止时间">
      </el-table-column>
      <el-table-column
        prop="rank"
        label="重要等级">
      </el-table-column>
      <el-table-column
        prop="addContent"
        label="备注">
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
        //url: 'static/api/t1.json',
        url: this.global.serverPath+'/affair/queryAffairs',
        dataType: 'jsonp',
        params:{
          pageNum:1,
          pageSize:10
        }
      })
        .then(function (response) {
            console.log(response);
//          var str=response.data;
//          var arr=eval(str);
          var arr=response.data.data.list;
          console.log(arr);
          this.tableData=arr;

          //在这里需要bind(this)，才能访问到Vue实例中的data
        }.bind(this));
    }
  };
</script>
