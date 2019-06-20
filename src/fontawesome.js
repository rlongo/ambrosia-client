import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faCartPlus,
  faEdit,
  faFile
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHeart);
library.add(faCartPlus);
library.add(faEdit);
library.add(faFile);

Vue.component("font-awesome-icon", FontAwesomeIcon);
