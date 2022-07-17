<template>
    <div class="editable">
        <span class="label" :hidden="editting" @dblclick.stop="onEdit" >{{ value }}</span>
        <span class="hidden-trigger" :hidden="editting || value.length != 0" @dblclick.stop="onEdit">输入内容</span>
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
}

.label {
    text-align: center;
    width: 100%;
    padding: 0;
    margin: 0;
    cursor: text;
}

.input {
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    text-decoration: underline;
}

.hidden-trigger
{
    cursor: text;
}
</style>