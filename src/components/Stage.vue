 <template>
    <section class="stage">
        <h2 class="name">{{stage.name}}</h2>
        <p class="notes" v-if="stage.notes">{{stage.notes}}</p>

        <div class="stage pure-g">
            <div class="pure-u-1  pure-u-md-1-4">
                <h3>Ingredients</h3>
                <Ingredients v-bind:ingredients="stage.ingredients"></Ingredients>
            </div>
            <div class="pure-u-1  pure-u-md-3-4">
                <Steps v-bind:steps="stage.steps"></Steps>
            </div>
        </div>
    </section>
 </template>
 
 <script>
import Ingredients from "../components/Ingredients";
import Steps from "../components/Procedure";

 export default {
  name: "Stage",
  components: {Ingredients, Steps},
  props: ["stage"]

 }
 </script>
 
 <style lang="scss" scoped>
 .stage {
     margin: 2%;

    .name {
        text-align: left;
    }

    .notes {
        text-align: left;
        font-size: 0.9rem;
    }

 }
 </style>
 