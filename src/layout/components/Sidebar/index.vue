<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
        mode="vertical"
        :show-timeout="200"
        :default-active="$route.path"
        :collapse="isCollapse"
    >
      <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>

  </el-scrollbar>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SidebarItem from './SidebarItem'

  export default {
    components: { SidebarItem },
    computed: {
      ...mapGetters([
        'sidebar',
        'permission_routes'
      ]),
      isCollapse() {
        return !this.sidebar.opened
      }
    }
  }
</script>
<style lang="scss">

</style>
