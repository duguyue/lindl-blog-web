<template>
  <el-row class="tac">
    <el-col :span="4" class="sidebar">
      <el-menu default-active="2" theme="dark">
        <el-submenu index="1">
          <template slot="title">导航一</template>
          <el-menu-item index="/info">选项1</el-menu-item>
          <el-menu-item index="/index">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">导航二</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
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
</template>
<script>


</script>
