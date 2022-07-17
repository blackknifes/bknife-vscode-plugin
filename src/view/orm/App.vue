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
<style lang="less">

* { 
    color: var(--vscode-foreground);
    font-family: var(--vscode-font-family);
    font-weight: var(--vscode-font-weight);
    font-size: var(--vscode-font-size);
}

*:disabled
{
    color: var(--vscode-disabledForeground);
}

table>body
{
    color: var(--vscode-charts-foreground);
}

button
{
    color: var(--vscode-button-foreground);
    background-color: var(--vscode-button-background);
    border: none;
    outline: none;
    cursor: pointer;
    padding: 5px 10px;
    user-select: none;
}

button:hover
{
    background-color: var(--vscode-button-hoverBackground);
}

button:active
{
    background-color: var(--vscode-button-background);
}

input
{
    color: var(--vscode-input-foreground);
    background-color: var(--vscode-input-background);
    font-family: var(--vscode-font-family);
    font-weight: var(--vscode-font-weight);
    font-size: var(--vscode-font-size);
}
</style>