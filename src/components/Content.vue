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
      :current-page="currentPage4"
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

//  var t1=[{
//  date: '2016-05-02',
//    name: '王小虎',
//    address: '上海市普陀区金沙江路 1518 弄'
//  }, {
//    date: '2016-05-04',
//      name: '王小虎',
//      address: '上海市普陀区金沙江路 1517 弄'
//  }, {
//    date: '2016-05-01',
//      name: '王小虎',
//      address: '上海市普陀区金沙江路 1519 弄'
//  }, {
//    date: '2016-05-03',
//      name: '王小虎',
//      address: '上海市普陀区金沙江路 1516 弄'
//  }];


//  let vm = this;
//  vm.loading = true;

  /*

*/
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
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    created(){
      axios({
        method: 'get',
        url: 'static/api/t1.json',
//        responseType: 'json'
      })
        .then(function (response) {
            console.log(response);
//      vm.loading = false;
          // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
          var str=response.data;
          var arr=eval(str);
          this.tableData=arr;

          console.log('----返回数据-----');
          console.log(arr);
          ////在这里需要bind(this)，才能访问到Vue实例中的data
        }.bind(this));
    }
  };
</script>
