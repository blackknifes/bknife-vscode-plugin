<template>
    <div>
        <Editor />
    </div>
</template>
<script>
import Editor from "./Editor.vue"
export default {
    components: { Editor }
}
</script>
<style lang="less" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
</style>