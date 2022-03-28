<template>
  <div class="home">
    <el-container>
      <el-aside>
        <el-menu>
          <!-- 菜单组件 -->
          <el-submenu>
            <!-- 二级菜单 -->
            <template slot="title">导航一</template> 
            <el-menu-item-group>
              <template slot="title">分组1</template>
              <el-menu-item>
                选项一
              </el-menu-item>
              <el-menu-item>
                选项二
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item>选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header></el-header>
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MyButton from "../components/MyButton.vue";
export default {
  name: "MyHome",
  components: { MyButton },
  mounted() {
  },
};
</script>
