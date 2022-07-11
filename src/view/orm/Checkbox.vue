<template>
    <div class="check" @click.stop.prevent="onClick">
        <span>{{ label }}</span>
        <input ref="input" type="checkbox" v-model="checked" @click.stop @change="onChange" />
    </div>
</template>
<script>
export default {
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        label: String,
        defaultChecked: Boolean
    },
    data() {
        return { checked: this.modelValue }
    },
    emits: ["update:modelValue"],
    methods: {
        onChange() {
            this.$emit("update:modelValue", this.checked);
        },
        onClick() {
            this.checked = !this.checked;
            this.$emit("update:modelValue", this.checked);
        }
    }

}
</script>
<style lang="less" scoped>
.check {
    user-select: none;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;

    & * {
        cursor: pointer;
    }
}
</style>