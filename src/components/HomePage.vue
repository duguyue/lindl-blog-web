<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="header">
          mmmmmmmmmmmmmmm
        </div>
      </el-col>
    </el-row>

    <el-row class="tac">
      <el-col :span="4" class="sidebar">
        <el-menu default-active="2" theme="dark" router="true">
          <el-submenu index="1">
            <template slot="title">导航一</template>
            <el-menu-item index="/info">选项1</el-menu-item>
            <el-menu-item index="/index">选项2</el-menu-item>
            <el-menu-item index="/element">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">导航二</template>
            <el-menu-item index="/content">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">导航三</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">

        <router-view></router-view>

      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="footer">
          author:LinDL
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
        tableData: t1,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    }
  }
</script>

<style>
  .el-pagination{
    text-align: center;
  }
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
    background-color: #475669;
    color: darkgray;
  }
  .footer{
    height: 3rem;
    background-color: #1F2D3D;
    color: darkgray;
    text-align: center;
  }
  .tac{
    min-height: 8rem;
  }
</style>
