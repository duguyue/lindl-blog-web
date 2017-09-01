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
        <el-menu default-active="2" theme="dark" v-bind:router="true">
          <el-submenu index="1">
            <template slot="title">事务管理</template>
            <el-menu-item index="/affair_type">事务类别</el-menu-item>
            <el-menu-item index="/affair">事务</el-menu-item>
            <el-menu-item index="/note_book">笔记</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">收支管理</template>
            <el-menu-item index="/income_type">用户收入类别</el-menu-item>
            <el-menu-item index="/expense_type">用户支出类别</el-menu-item>
            <el-menu-item index="/content">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="/element">导航三</el-menu-item>
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
