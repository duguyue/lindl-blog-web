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
  import axios from 'axios';

  var t1=new Array();

  let vm = this;
  vm.loading = true;

  axios({
    method: 'get',
    url: 'static/api/t1.json',
    responseType: 'json'
  })
    .then(function (response) {
      vm.loading = false;
     // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
      t1=response.data;

      console.log('----返回数据-----');
      console.log(t1);
    });

  export default {
    data() {
      return {
        tableData: t1,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    }
  };
</script>
