<template>
  <div class="home-view">
    <div class="logo-container"><LogoIcon class="logo-homepage" /></div>
    <section class="welcome-message">
      <TitleHeader title="Demo Gallery page" />
      <p>
        Duis varius ac massa in suscipit. Aenean malesuada fermentum mollis.
        Vestibulum vehicula tellus ut quam fringilla, eu scelerisque urna
        malesuada. Nulla facilisi. Donec arcu eros, auctor quis laoreet in,
        laoreet eu est. Duis interdum magna quam, in ullamcorper tortor cursus
        eget. Duis sit amet ex in tellus auctor imperdiet et non erat.
      </p>
      <p>
        Nullam laoreet enim ut neque ultricies, ut egestas nulla cursus.
        Pellentesque non porta enim, eu porta tortor. Nunc dictum convallis
        massa, at imperdiet mi. Morbi non nunc semper, vestibulum lectus in,
        ullamcorper est. Donec sit amet turpis accumsan, feugiat leo in, finibus
        sapien.
      </p>
      <hr />
      <p class="github-resource">
        You can find the source code here
        <a href="https://github.com/wilninja/wilninja" target="_blank"
          >GitHub WilNinja</a
        >
      </p>
    </section>
  </div>
</template>

<script setup>
import LogoIcon from "@/components/LogoIcon/LogoIcon.vue";
import TitleHeader from "@/components/TitleHeader/TitleHeader.vue";
</script>

<style lang="scss" scoped>
.logo-container {
  text-align: center;

  .logo-homepage {
    width: 400px;
  }
}

.github-resource {
  text-align: center;
}
</style>
