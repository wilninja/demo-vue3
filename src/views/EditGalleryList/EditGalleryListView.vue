<template>
  <div class="edit-gallery-list-view">
    <TitleHeader title="Edit Gallery List" class="title-section" />
    <section class="add-section">
      <div class="form-section">
        <p class="section-title">Add Gallery</p>
        <form
          id="formGalleryList"
          autocomplete="off"
          @submit.prevent="onSubmit"
        >
          <p>
            <label for="galleryPath">Path:</label>
            <input
              type="text"
              name="galleryPath"
              id="galleryPath"
              v-model="galleryPath"
              placeholder="Gallery Path"
            />
          </p>
          <p>
            <label for="galleryTitle">Title:</label>
            <input
              type="text"
              name="galleryTitle"
              id="galleryTitle"
              v-model="galleryName"
              placeholder="Gallery Title"
            />
          </p>
          <p>
            <input type="submit" value="Add" class="btn-add-gallery" />
          </p>
        </form>
      </div>

      <div class="example-gallery">
        <p>Try these example:</p>
        <ul>
          <li>Path: <code>gamers</code> | Name: <code>Gamers</code></li>
          <li>
            Path: <code>restaurants</code> | Name: <code>Restaurants</code>
          </li>
        </ul>
      </div>

      <hr />
    </section>

    <section class="delete-section">
      <p class="section-title">Delete Gallery</p>
      <p v-for="gallery in galleryList" :key="gallery.id">
        <button class="btn-delete-gallery" @click="onDeleteGallery(gallery.id)">
          X
        </button>
        <strong>{{ gallery.title }}:</strong>
        <code>{{ gallery.path }}</code>
      </p>
    </section>
  </div>
</template>

<script setup>
import TitleHeader from "@/components/TitleHeader/TitleHeader.vue";

import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const galleryPath = ref("");
const galleryName = ref("");

const galleryList = computed(() => store.state.galleryList);

const onDeleteGallery = (galleryID) => {
  store.commit("deleteGallery", galleryID);
};

const onSubmit = () => {
  if (!galleryPath.value || !galleryName.value) {
    alert("Please fill in the fields");
    return;
  }

  const galleryID = generateNewID();
  const newGalleryItem = {
    id: galleryID,
    path: galleryPath.value.toLowerCase().trim(),
    title: galleryName.value.trim(),
  };
  submitNewGallery(newGalleryItem);
};

const submitNewGallery = (value) => {
  const result = store.state.galleryList.filter(
    (gallery) => gallery.path === value.path || gallery.title === value.title
  );

  /**
   * This would work with Mutations via store.commit
   * This is an example of going with Actions via store.dispatch
   */
  if (result.length === 0 && store.dispatch("processAddGallery", value)) {
    galleryPath.value = "";
    galleryName.value = "";
  } else {
    alert("Error: Could not add gallery");
  }
};

function generateNewID() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = pad(currentDate.getMonth() + 1);
  const day = pad(currentDate.getDate());
  const hour = pad(currentDate.getHours());
  const minutes = pad(currentDate.getMinutes());
  const seconds = pad(currentDate.getSeconds());
  const milliseconds = pad(currentDate.getMilliseconds(), 3);

  return parseInt(
    `${year}${month}${day}${hour}${minutes}${seconds}${milliseconds}`
  );
}

function pad(number, width = 2) {
  const numString = number.toString();
  return numString.length >= width
    ? numString
    : new Array(width - numString.length + 1).join("0") + numString;
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/helpers.scss";

.edit-gallery-list-view {
  display: grid;
  width: 100%;
  grid-template-areas:
    "title-section"
    "add-section"
    "delete-section";
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;

  @include media-breakpoint-up(md) {
    grid-template-areas:
      "title-section title-section"
      "add-section delete-section";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }

  .title-section {
    grid-area: title-section;
  }
  .add-section {
    grid-area: add-section;
  }
  .delete-section {
    grid-area: delete-section;
  }
}

.add-section {
  hr {
    display: block;

    @include media-breakpoint-up(md) {
      display: none;
    }
  }
}

.delete-section {
  .btn-delete-gallery {
    display: inline-block;
    position: relative;
    margin: 0 7px 0 0;
    padding: 7px 14px;
    border: 0px solid $c-mine-shaft;
    border-width: 0px 0px 3px 0px;
    background: #d90429;
    background: linear-gradient(180deg, #d90429 0%, #8d031b 100%);
    font-size: 14px;
    font-weight: 900;
    line-height: 14px;
    color: $c-mine-shaft;
    text-transform: uppercase;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      background: #8d031b;
      background: linear-gradient(180deg, #8d031b 0%, #530210 100%);
      color: $c-seashell;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    > li {
      margin: 14px 0 0;

      &:first-child {
        margin: 0;
      }
    }
  }
}

.example-gallery {
  font-size: 12px;

  p {
    margin: 0;
    font-weight: bold;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

.form-section {
  .btn-add-gallery {
    display: inline-block;
    position: relative;
    padding: 7px 14px;
    border: 0px solid $c-mine-shaft;
    border-width: 0px 0px 3px 0px;
    background: $c-seashell;
    background: linear-gradient(180deg, $c-seashell 0%, #d4d4d4 100%);
    font-size: 14px;
    font-weight: 900;
    line-height: 14px;
    color: $c-mine-shaft;
    text-transform: uppercase;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      background: #4f772d;
      background: linear-gradient(180deg, #76b243 0%, #4f772d 100%);
      color: $c-seashell;
    }
  }

  label {
    display: inline-block;
    width: 50px;
  }

  input {
    &:focus {
      outline: none;
    }

    &::placeholder {
      font-size: 10px;
      font-style: italic;
    }
  }
}

.section-title {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}
</style>
