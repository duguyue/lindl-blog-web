<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <div class="header">
          mmmmmmmmmmmmmmm
        </div>
      </el-col>
    </el-row>

    <el-row class="tac">
      <el-col :span="4" class="sidebar">
        <el-menu default-active="2" theme="dark">
          <el-submenu index="1">
            <template slot="title">导航一</template>
            <el-menu-item-group title="分组一">
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">导航二</el-menu-item>
          <el-menu-item index="3">导航三</el-menu-item>
        </el-menu>
      </el-col>
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

      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="footer">
          ppppppppppppp
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style>
  .el-table{

    width: 80%;
    margin: 3rem;
  }
  .sidebar{
    background-color: #324057;
    min-height: 35rem;
  }
  .header{
    height: 8rem;
    background-color: #324057;
  }
  .footer{
    height: 8rem;
    background-color: #324057;
  }
  .tac{
    min-height: 8rem;
  }
</style>
