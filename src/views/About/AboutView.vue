<template>
  <div class="about-view">
    <TitleHeader title="About Lorem Ipsum" />
    <section class="description-container">
      <div class="description">
        <p>
          Nam non felis vel lectus mollis pretium. Etiam at elit fermentum,
          mattis felis vel, finibus lacus. Duis sed lacus quis ipsum consequat
          tincidunt. Morbi feugiat ante lectus, ac rhoncus metus semper quis.
          Proin non accumsan enim. Nullam molestie posuere dapibus. In viverra
          vitae ex eu feugiat. Vivamus libero est, malesuada at orci faucibus,
          fringilla feugiat neque. Vivamus pretium elementum ipsum ut sodales.
          Fusce gravida felis id varius imperdiet.
        </p>

        <p>
          Quisque ut risus sed nunc convallis posuere. Vestibulum laoreet
          malesuada varius. Vestibulum luctus purus nec risus lobortis, eu
          elementum lectus consequat. Suspendisse massa ipsum, dictum sit amet
          magna accumsan, congue dignissim lacus. Nulla ut elit in nunc accumsan
          lacinia in et nulla. Nulla porta egestas aliquam. Fusce a ipsum
          venenatis, dictum eros eget, ullamcorper erat. Quisque placerat velit
          eu sem porttitor, a sollicitudin dolor scelerisque. Donec posuere eget
          arcu id lobortis. Mauris in congue lacus, nec viverra odio. Proin
          dolor ipsum, fermentum a viverra ut, tincidunt vitae justo. Nullam
          tempus ante a ultrices hendrerit. Maecenas at sem sodales, tempor
          lectus a, porta mi.
        </p>

        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Pellentesque lacus massa, condimentum in
          facilisis in, suscipit ut arcu. Vestibulum ac efficitur nisi, quis
          tincidunt purus. Duis sit amet auctor leo, eget vestibulum felis. Ut
          imperdiet sapien eu feugiat porta. Vivamus eu lacinia justo, vel
          volutpat turpis. Proin tellus sem, malesuada at leo in, imperdiet
          varius risus. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Integer leo nisl, rutrum vel
          convallis eget, consequat vel nibh. Ut sodales, massa in laoreet
          dictum, risus justo molestie urna, blandit pulvinar turpis lectus sed
          sapien. Mauris libero lacus, lobortis non iaculis a, ultrices vitae
          nibh.
        </p>
      </div>
      <div class="avatar">
        <img src="/img/about.jpg" class="thumbnail" />
      </div>
    </section>
  </div>
</template>

<script setup>
import TitleHeader from "@/components/TitleHeader/TitleHeader.vue";
</script>

<style lang="scss" scoped>
@import "../../assets/scss/helpers.scss";

.description-container {
  display: grid;
  width: 100%;
  grid-template-areas:
    "avatar"
    "description";
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  @include media-breakpoint-up(md) {
    grid-template-areas: "description avatar";
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
  }

  @include media-breakpoint-up(lg) {
    grid-template-areas: "description avatar";
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
  }

  .avatar {
    grid-area: avatar;
    text-align: center;

    @include media-breakpoint-up(md) {
      padding: 0 7px;
    }

    .thumbnail {
      display: inline-block;
      width: 50%;

      @include media-breakpoint-up(md) {
        width: 100%;
      }
    }
  }

  .description {
    grid-area: description;
    padding: 0 7px;

    p:first-child {
      @include media-breakpoint-up(md) {
        margin-top: 0;
      }
    }
  }
}
</style>
