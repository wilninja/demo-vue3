<template>
  <div class="edit-gallery-list-view">
    <TitleHeader title="Edit Gallery List" />
    <section class="form-section">
      <p class="section-title">Add Gallery</p>
      <form id="formGalleryList" @submit.prevent="onSubmit">
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
    </section>

    <section class="example-gallery">
      <p>Try these example:</p>
      <ul>
        <li>Path: <code>gamers</code> | Name: <code>Gamers</code></li>
        <li>Path: <code>restaurant</code> | Name: <code>Restaurants</code></li>
      </ul>
    </section>

    <hr />

    <section class="gallery-listing-section">
      <p class="section-title">Delete Gallery</p>
      <ul>
        <li v-for="gallery in galleryList" :key="gallery.id">
          <button
            class="btn-delete-gallery"
            @click="onDeleteGallery(gallery.id)"
          >
            X
          </button>
          <strong>{{ gallery.title }}:</strong>
          <code>{{ gallery.path }}</code>
        </li>
      </ul>
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
    alert("please fill in the fields");
    return;
  }

  const galleryID = generateNewID();
  const newGalleryItem = {
    id: galleryID,
    path: galleryPath.value.toLowerCase(),
    title: galleryName.value,
  };
  submitNewGallery(newGalleryItem);
};

const submitNewGallery = (value) => {
  const result = store.state.galleryList.filter(
    (gallery) => gallery.path === value.path || gallery.title === value.title
  );

  /**
   * This would work with Mutations via store.commit
   * This is a simple example of going with Actions via store.dispatch
   */
  if (result.length === 0 && store.dispatch("processAddGallery", value)) {
    galleryPath.value = "";
    galleryName.value = "";
  } else {
    alert("There was an error");
  }
};

function generateNewID() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const milliseconds = currentDate.getMilliseconds();

  return parseInt(
    `${year}${pad(month)}${pad(day)}${pad(hour)}${pad(minutes)}${pad(
      seconds
    )}${pad(milliseconds, 3)}`
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

.section-title {
  font-size: 18px;
  font-weight: bold;
}

.form-section {
  .btn-add-gallery {
    display: inline-block;
    margin: 0 7px 0 0;
    background-color: #dee2e6;
    border: 1px solid #202020;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #4f772d;
      color: #fff;
    }
  }
}

.gallery-listing-section {
  .btn-delete-gallery {
    display: inline-block;
    margin: 0 7px 0 0;
    background-color: #dee2e6;
    border: 1px solid #202020;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
      background-color: #d90429;
      color: #fff;
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
</style>
