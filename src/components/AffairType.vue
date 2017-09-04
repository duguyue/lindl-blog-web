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
        prop="affair_type"
        label="事务类别">
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="curPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalNum">
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
        this.pageSize=val;

        this.reloadDataOfTable(1,this.pageSize);
      },
      handleCurrentChange(val) {
        this.curPage=val;

        this.reloadDataOfTable(this.curPage,this.pageSize);
      },
      reloadDataOfTable(pageNum,pageSize) {
        axios({
          method: 'get',
          url: this.global.serverPath+'/affair_type/queryAffairTypes',
          dataType: 'jsonp',
          params:{
            pageNum:pageNum,
            pageSize:pageSize
          }
        })
          .then(function (response) {
            if(response.data.status==0){
              var arr=response.data.data.list;
              var total=response.data.data.total;

              this.tableData=arr;

              this.totalNum=total;
            }
          }.bind(this));
      }
    },
    data() {
      return {
        tableData: [],
        curPage: 1,
        pageSize:10,
        totalNum:0
      }
    },
    created(){
      this.reloadDataOfTable(this.curPage,this.pageSize);
    }
  };
</script>
