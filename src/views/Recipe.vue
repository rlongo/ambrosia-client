<template>
  <div class="recipe">
    <h1>Recipe</h1>
    <Stage v-for="stage in stages" v-bind:key="stage.name" v-bind:stage="stage"></Stage>
  </div>
</template>


<script>
import Stage from '../components/Stage';

export default {
  name: "Recipe",
  components: {Stage},
  data: function() {
    return {
      stages: [
        {
          name: "Stage1",
          notes: "Jelly liquorice croissant cheesecake liquorice cotton candy carrot cake I love donut. Dessert ice cream pudding bonbon I love chocolate bar wafer cupcake. Cake tootsie roll pudding jujubes.",
          ingredients: [
            {name: "sugar", unit: "g", quantity: 30 },
            {name: "eggs", unit: "", quantity: 3 },
            {name: "butter", unit: "g", quantity: 180 },
            {name: "flour", unit: "g", quantity: 270 },
            {name: "nutmeg", unit: "pinch" }
          ],
          steps: [
            "Bonbon toffee muffin liquorice tootsie roll marzipan. Chocolate cake sesame snaps oat cake bear claw I love. Lemon drops lollipop tootsie roll sweet roll. Tootsie roll soufflé jujubes toffee ice cream.",
            "Ice cream chocolate cake apple pie cheesecake jelly-o candy pie. Gingerbread marzipan pie. Brownie I love sweet roll sugar plum cotton candy sweet roll marshmallow I love. Brownie lollipop gummies liquorice dragée cheesecake halvah I love.",
            "Marzipan liquorice sweet apple pie I love. Pudding jujubes tart soufflé jujubes. I love I love topping I love jelly beans dragée tiramisu lollipop. Ice cream powder cake biscuit brownie.",
            "Pastry I love sweet roll cookie fruitcake fruitcake. Lollipop topping fruitcake I love liquorice sugar plum ice cream. Marshmallow dessert tootsie roll jujubes pie fruitcake. Chocolate cake toffee lollipop I love cupcake donut muffin apple pie.",
            "I love toffee jelly-o chupa chups bonbon. Bonbon I love cake pudding sesame snaps sweet roll ice cream I love. Carrot cake muffin muffin macaroon.",
            "Biscuit icing I love chocolate sesame snaps. Sweet I love halvah biscuit apple pie sweet roll lollipop marshmallow icing. Macaroon pudding gingerbread. Carrot cake cupcake liquorice I love jelly-o.",
            "Chocolate bar candy I love. Sugar plum apple pie sugar plum pudding bonbon topping donut. Cupcake I love oat cake toffee biscuit chocolate bar I love. Icing dessert bear claw tart liquorice marzipan lemon drops.",
            "Chocolate bar lollipop brownie jelly beans pastry lemon drops marshmallow. Dragée brownie I love tiramisu oat cake halvah marshmallow tootsie roll. Macaroon sweet chocolate cake apple pie.",
            "I love cupcake tiramisu. Wafer jelly-o sugar plum I love pastry sweet. Gingerbread sugar plum chocolate.",
            "I love lemon drops pie cupcake I love. Cheesecake pudding chocolate bar jelly sugar plum I love lemon drops cake. I love sweet roll cake tiramisu biscuit cookie cheesecake pie chocolate cake. Pastry cookie chupa chups jelly beans."
          ]
        },
        {
          name: "Stage2",
          ingredients: [
            {name: "sugar", unit: "g", quantity: 30 },
            {name: "nutmeg", unit: "pinch" }
          ],
          steps: [
            "Bonbon toffee muffin liquorice tootsie roll marzipan. Chocolate cake sesame snaps oat cake bear claw I love. Lemon drops lollipop tootsie roll sweet roll. Tootsie roll soufflé jujubes toffee ice cream.",
            "I love lemon drops pie cupcake I love. Cheesecake pudding chocolate bar jelly sugar plum I love lemon drops cake. I love sweet roll cake tiramisu biscuit cookie cheesecake pie chocolate cake. Pastry cookie chupa chups jelly beans."
          ]
        },
        {
          name: "Stage3",
          notes: "Jelly liquorice croissant cheesecake liquorice cotton candy carrot cake I love donut. Dessert ice cream pudding bonbon I love chocolate bar wafer cupcake. Cake tootsie roll pudding jujubes.",
          ingredients: [
            {name: "sugar", unit: "g", quantity: 30 },
            {name: "eggs", unit: "", quantity: 3 },
            {name: "nutmeg", unit: "pinch" }
          ],
          steps: [
            "Bonbon toffee muffin liquorice tootsie roll marzipan. Chocolate cake sesame snaps oat cake bear claw I love. Lemon drops lollipop tootsie roll sweet roll. Tootsie roll soufflé jujubes toffee ice cream.",
            "Ice cream chocolate cake apple pie cheesecake jelly-o candy pie. Gingerbread marzipan pie. Brownie I love sweet roll sugar plum cotton candy sweet roll marshmallow I love. Brownie lollipop gummies liquorice dragée cheesecake halvah I love.",
            "Marzipan liquorice sweet apple pie I love. Pudding jujubes tart soufflé jujubes. I love I love topping I love jelly beans dragée tiramisu lollipop. Ice cream powder cake biscuit brownie.",
            "Pastry I love sweet roll cookie fruitcake fruitcake. Lollipop topping fruitcake I love liquorice sugar plum ice cream. Marshmallow dessert tootsie roll jujubes pie fruitcake. Chocolate cake toffee lollipop I love cupcake donut muffin apple pie.",
            "I love toffee jelly-o chupa chups bonbon. Bonbon I love cake pudding sesame snaps sweet roll ice cream I love. Carrot cake muffin muffin macaroon.",
            "I love cupcake tiramisu. Wafer jelly-o sugar plum I love pastry sweet. Gingerbread sugar plum chocolate.",
            "I love lemon drops pie cupcake I love. Cheesecake pudding chocolate bar jelly sugar plum I love lemon drops cake. I love sweet roll cake tiramisu biscuit cookie cheesecake pie chocolate cake. Pastry cookie chupa chups jelly beans."
          ]
        },
        {
          name: "Stage4",
          steps: [
            "Bonbon toffee muffin liquorice tootsie roll marzipan. Chocolate cake sesame snaps oat cake bear claw I love. Lemon drops lollipop tootsie roll sweet roll. Tootsie roll soufflé jujubes toffee ice cream.",
            "I love lemon drops pie cupcake I love. Cheesecake pudding chocolate bar jelly sugar plum I love lemon drops cake. I love sweet roll cake tiramisu biscuit cookie cheesecake pie chocolate cake. Pastry cookie chupa chups jelly beans."
          ]
        },
        {
          name: "Stage5",
          ingredients: [
            {name: "sugar", unit: "g", quantity: 30 },
            {name: "nutmeg", unit: "pinch" }
          ],
        },
      ]
    };
  }
}
</script>

<style lang="scss" scoped></style>
