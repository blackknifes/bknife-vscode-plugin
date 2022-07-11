<template>
    <div class="editable" @dblclick.stop.prevent="onEdit()">
        <span class="label" :hidden="editting">{{ value }}</span>
        <input :type="type" ref="text" class="input" v-model="value" :hidden="!editting" @change="onChange()"
            @blur="onBlur()" @keydown.enter="onBlur()" />
    </div>
</template>
<script>
export default {
    props: {
        modelValue: {
            type: [String, Number],
            default: ""
        },
        type: {
            type: String,
            default: "text",
            validator(value) {
                return ["text", "number"].indexOf(value) !== -1;
            }
        }
    },
    emits: ["update:modelValue"],
    data() {
        return {
            editting: false,
            value: this.modelValue
        }
    },
    methods: {
        onChange() {
            this.$emit("update:modelValue", this.value);
        },
        onBlur() {
            this.editting = false;
        },
        onEdit() {
            this.editting = true;
            this.$nextTick(() => {
                this.$refs.text.focus();
            })
        }
    }
}
</script>
<style lang="less" scoped>
.editable {
    display: inline-block;
    width: 100%;
    min-height: 27px;
    cursor: text;
}

.label {
    color: var(--vscode-editor-foreground);
    font-family: var(--vscode-font-family);
    font-weight: var(--vscode-font-weight);
    font-size: 20px;
    text-align: center;
    width: 100%;
    padding: 0;
    margin: 0;
}

.input {
    padding: 0;
    margin: 0;
    color: var(--vscode-editor-foreground);
    font-family: var(--vscode-font-family);
    font-weight: var(--vscode-font-weight);
    font-size: 20px;
    text-align: center;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    text-decoration: underline;
}
</style>