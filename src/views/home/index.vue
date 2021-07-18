<template>
    <div class="my-bg">
      <synop-sis></synop-sis>
      <direc-tion></direc-tion>
      <de-tails></de-tails>
      <join-us></join-us>
    </div>
</template>
<style scoped>
.my-bg{
  background-image: url('../../static/images/computer2.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed !important;
  background-size: 100% !important;
  background-position: center top;
}

</style>
<script>
import synopSis from "./components/synopsis";
import direcTion from "./components/direction";
import deTails from "./components/details";
import joinUs from "./components/joinUs";
export default {
  components: {
    synopSis: synopSis,
    direcTion: direcTion,
    deTails: deTails,
    joinUs: joinUs,
  },
};
</script>