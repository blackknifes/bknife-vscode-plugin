<template>
    <table class="table-border">
        <tbody>
            <tr class="class-tr">
                <th width="50px"></th>
                <th width="15%">类路径</th>
                <th colspan="13">类注释</th>
            </tr>
            <template v-for="tableClass in tableData" :key="tableClass.name">
                <tr class="class-tr" @dblclick="toggleClass(tableClass)">
                    <td></td>
                    <td>
                        <Editable v-model="tableClass.name" />
                    </td>
                    <td colspan="13">
                        <Editable v-model="tableClass.comment" />
                    </td>
                </tr>

                <tr class="class-tr" :hidden="tableClass.collapse">
                    <th></th>
                    <th>表名</th>
                    <th colspan="13">表注释</th>
                </tr>
                <template v-for="table in tableClass.tables" :key="table.name">
                    <tr class="table-tr" @dblclick="toggleTable(table)" :hidden="tableClass.collapse">
                        <td></td>
                        <td>
                            <Editable v-model="table.name" />
                        </td>
                        <td colspan="13">
                            <Editable v-model="table.comment" />
                        </td>
                    </tr>
                    <tr :hidden="table.collapse || tableClass.collapse">
                        <td></td>
                        <td width="15%">列名</td>
                        <td width="7%">类型</td>
                        <td width="5%">长度</td>
                        <td width="5%">小数点</td>
                        <td width="*">属性</td>
                        <td width="10%">所属表</td>
                        <td width="15%">注释</td>
                    </tr>
                    <tr v-for="column in table.columns" :key="column.name"
                        :hidden="table.collapse || tableClass.collapse">
                        <td></td>
                        <td>
                            <Editable v-model="column.name" />
                        </td>
                        <td>
                            <TypeSelect v-model="column.type" />
                        </td>
                        <td>
                            <Editable v-model="column.length" />
                        </td>
                        <td>
                            <Editable v-model="column.dot" />
                        </td>
                        <td class="attribute-td">
                            <Checkbox label="nullable" v-model="column.nullable" />
                            <Checkbox label="unsigned" v-model="column.unsigned" />
                            <Checkbox label="unique" v-model="column.unique" />
                            <Checkbox label="primary key" v-model="column.primaryKey" />
                            <Checkbox label="auto increment" v-model="column.autoIncrement" />
                        </td>
                        <td>
                            <Editable v-model="column.table" />
                        </td>
                        <td>
                            <Editable v-model="column.comment" />
                        </td>
                    </tr>
                </template>
            </template>
        </tbody>
    </table>
</template>
<script>

import Checkbox from "./Checkbox.vue";
import Editable from "./Editable.vue";
import TypeSelect from "./TypeSelect.vue";

const data = [{
    name: "com.bknife.dbo",
    comment: "测试类",
    collapse: false,
    tables: [{
        name: "test",
        comment: "测试表",
        collapse: true,
        columns: [
            { name: "name1", type: "string", length: 12, dot: 12, nullable: false, unsigned: true, unique: false, primaryKey: false, autoIncrement: false, table: "", comment: "测试列" },
            { name: "name2", type: "string", length: 12, dot: 12, nullable: false, unsigned: true, unique: false, primaryKey: false, autoIncrement: false, table: "", comment: "测试列" },
            { name: "name3", type: "string", length: 12, dot: 12, nullable: false, unsigned: true, unique: false, primaryKey: false, autoIncrement: false, table: "", comment: "测试列" },
            { name: "name4", type: "string", length: 12, dot: 12, nullable: false, unsigned: true, unique: false, primaryKey: false, autoIncrement: false, table: "", comment: "测试列" },
            { name: "name5", type: "string", length: 12, dot: 12, nullable: false, unsigned: true, unique: false, primaryKey: false, autoIncrement: false, table: "", comment: "测试列" },
        ]
    }]
},
{
    name: "com.bknife.dbo",
    comment: "测试类",
    collapse: false,
    tables: [{
        name: "test",
        comment: "测试表",
        collapse: true,
        columns: [
            { name: "name1", type: "string", length: 12, dot: 12, nullable: false, unsigned: true, unique: false, primaryKey: false, autoIncrement: false, table: "", comment: "测试列" },
            { name: "name2", type: "string", length: 12, dot: 12, nullable: false, unsigned: true, unique: false, primaryKey: false, autoIncrement: false, table: "", comment: "测试列" },
            { name: "name3", type: "string", length: 12, dot: 12, nullable: false, unsigned: true, unique: false, primaryKey: false, autoIncrement: false, table: "", comment: "测试列" },
            { name: "name4", type: "string", length: 12, dot: 12, nullable: false, unsigned: true, unique: false, primaryKey: false, autoIncrement: false, table: "", comment: "测试列" },
            { name: "name5", type: "string", length: 12, dot: 12, nullable: false, unsigned: true, unique: false, primaryKey: false, autoIncrement: false, table: "", comment: "测试列" },
        ]
    }]
}];

export default {
    components: { Checkbox, Editable, TypeSelect },
    data() {
        return {
            tableData: data
        }
    },
    methods:
    {
        toggleTable(table) {
            table.collapse = !table.collapse;
        },
        toggleClass(tableClass) {
            tableClass.collapse = !tableClass.collapse;
        }
    }
}
</script>
<style lang="less" scoped>
.table-border {
    cursor: pointer;
    border: 1px solid #CCC;
    border-collapse: collapse;
    text-align: center;
    font-size: 20px;
    width: 100%;

    & th,
    td {
        border: 1px solid #CCC;
        border-collapse: collapse;
        padding: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    & tr {
        background-color: var(--vscode-tab-inactiveBackground);
    }

    & tr:hover {
        background-color: var(--vscode-tab-activeBackground);
    }


    & tr.class-tr {
        background-color: #535353;

        &:hover {
            background-color: var(--vscode-tab-activeBackground);
        }
    }

    & tr.table-tr {
        background-color: #535353;

        &:hover {
            background-color: var(--vscode-tab-activeBackground);
        }
    }
}

.attribute-td {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    >* {
        margin-right: 10px;
    }
}
</style>