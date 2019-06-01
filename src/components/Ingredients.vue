<template>
    <div class="ingredient-list">
        <div class="ingredient pure-g" v-for="ingredient in ingredients" v-bind:key="ingredient.name">
            <span class="name pure-u-2-3">{{ingredient.name}}</span>
            <span class="pure-u-1-3">
                <span class="qty " v-if="ingredient.quantity">{{ingredient.quantity}}</span>
                <span class="unit" v-if="ingredient.unit">{{ingredient.unit}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
  name: "Ingredients",
  components: {},
  props: ["ingredients"]
};
</script>

<style lang="scss" scoped>

.ingredient-list {
    text-align: left;
}

.ingredient {
    border-bottom: 1px solid $theme-font;

    .name {
        font-size: 1.2rem;
        text-transform: capitalize;
    }

    &:last-of-type {
        border-bottom: none;
        text-transform: lowercase;
    }
}
</style>
