import Vue from "vue";
// import lodash from 'lodash'
import cloneDeep from "lodash/cloneDeep";
import set from "lodash/set";
import reduce from "lodash/reduce";
import invert from "lodash/invert";
import chunk from "lodash/chunk";
import VueLodash from "vue-lodash";

Vue.use(VueLodash, { lodash: { cloneDeep, set, reduce, invert, chunk } });
