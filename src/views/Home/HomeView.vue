<template>
  <div class="home-view">
    <div class="logo-container"><LogoIcon class="logo-homepage" /></div>
    <section class="welcome-message">
      <TitleHeader title="Demo Gallery Page" />
      <div class="description-container">
        <div class="description">
          <p>
            Duis varius ac massa in suscipit. Aenean malesuada fermentum mollis.
            Vestibulum vehicula tellus ut quam fringilla, eu scelerisque urna
            malesuada. Nulla facilisi. Donec arcu eros, auctor quis laoreet in,
            laoreet eu est. Duis interdum magna quam, in ullamcorper tortor
            cursus eget. Duis sit amet ex in tellus auctor imperdiet et non
            erat.
          </p>
          <p>
            Nullam laoreet enim ut neque ultricies, ut egestas nulla cursus.
            Pellentesque non porta enim, eu porta tortor. Nunc dictum convallis
            massa, at imperdiet mi. Morbi non nunc semper, vestibulum lectus in,
            ullamcorper est. Donec sit amet turpis accumsan, feugiat leo in,
            finibus sapien.
          </p>
        </div>
        <div class="splash">
          <img src="/img/homepage.jpg" class="home-img" />
        </div>
      </div>
      <hr />
      <p class="github-resource">
        You can find the source code here
        <a href="https://github.com/wilninja/demo-vue3" target="_blank"
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
@import "../../assets/scss/helpers.scss";

.logo-container {
  text-align: center;

  .logo-homepage {
    width: 80%;
    max-width: 400px;
  }
}

.description-container {
  display: grid;
  width: 100%;
  grid-template-areas:
    "description"
    "splash";
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  .description {
    grid-area: description;

    p:first-child {
      margin-top: 0;
    }
  }
  .splash {
    grid-area: splash;

    .home-img {
      display: block;
      width: 100%;
    }
  }
}

.github-resource {
  text-align: center;
}
</style>
