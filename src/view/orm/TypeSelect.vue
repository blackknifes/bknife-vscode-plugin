<template lang="">
    <select class="select" v-model="value" @change="onChange">
        <option v-for="option in options" :key="option" :value="option">{{option}}</option>
    </select>
</template>
<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: "string"
        }
    },
    emits: ["update:modelValue"],
    data() {
        return {
            value: this.modelValue,
            options: ["byte", "int", "long", "double", "string", "chars", "decimal", "date", "time", "timestamp", "binary"]
        }
    },
    methods: {
        onChange() {
            this.$emit("update:modelValue", this.value);
        }
    }
}
</script>
<style lang="less" scoped>
.select {
    cursor: pointer;
    background: transparent;

    & * {
        cursor: pointer;
    }

    & option {
        color: var(--vscode-editor-foreground);
        background-color: var(--vscode-tab-inactiveBackground);
        appearance: none;
    }
}
</style>