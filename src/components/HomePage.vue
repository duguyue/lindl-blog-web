<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="header">
          LinDL's 后台管理系统
        </div>
      </el-col>
    </el-row>

    <el-row class="tac">
      <el-col :span="4" class="sidebar">
        <el-menu default-active="2" theme="" v-bind:router="true">
          <el-menu-item index="/user">用户管理</el-menu-item>
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
            <el-menu-item index="/income">用户收入</el-menu-item>
            <el-menu-item index="/expense">用户支出</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">插件应用</template>
            <el-menu-item index="/mavon_editor">Mavon Markdown编辑器</el-menu-item>
            <el-menu-item index="/bar_chart">柱形图</el-menu-item>
          </el-submenu>
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
    width: 90%;
    margin: 3rem;
  }

  .sidebar{
    background-color: #F9FAFC;
    min-height: 65rem;
    height: auto;
  }
  .header{
    height: 4rem;
    background-color: #1D8CE0;
    color:floralwhite;
    text-align: center;
    font-size: xx-large;
    font-family:KaiTi;
    padding-top: 2rem;
  }
  .footer{
    height: 6rem;
    background-color: #324057;
    color: floralwhite;
    text-align: center;
    padding-top: 2rem;
  }
  .tac{
    min-height: 65rem;
    height: inherit;
  }
</style>
