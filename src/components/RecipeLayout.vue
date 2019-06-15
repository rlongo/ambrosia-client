<template>
<div class="recipe-layout">
    <div class="header">
        <slot name="header"></slot>
    </div>

    <div class="stages">
        <div class="stage"
            v-for="i in numFields"
            v-bind:key="i">
            <slot v-bind:idStage="i - 1" name="ingredients"></slot>
            <slot v-bind:idStage="i - 1" name="steps"></slot>
        </div>
    </div>

    <div class="footer">
        <slot name="footer"></slot>
    </div>
</div>
</template>

<script>
export default {
    name: "recipe-layout",
    props: ["numStages"]
};
</script>

<style scoped>

</style>
