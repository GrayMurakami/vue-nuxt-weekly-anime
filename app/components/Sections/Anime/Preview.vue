<script setup>
import { animeLinks, scrollToAnime } from '~/composables/useAnimeLinks';
import { handleAnchorClick } from '~/composables/useHeaderControl';

function handlePreviewClick(id) {
  handleAnchorClick();
  scrollToAnime(id);
}
</script>

<template>
  <div class="container-main">
    <div v-for="anime in animeLinks" :key="anime.id" @click="handlePreviewClick(anime.id)">
      <div class="content">
        <h2>{{ anime.name }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-main {
  width: 100%;
  margin-top: 150px;
  display: flex;
  justify-content: center;
  height: 500px;
  gap: 25px;

  & > div {
    flex: 0 0 120px;
    border-radius: 0.5rem;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    box-shadow: 1px 5px 15px #C5C6C7;
    position: relative;
    overflow: hidden;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;

    &:nth-of-type(1) {
      background-image: url("/picture/one_punch_man/one_punch_man.jpg");
    }
    &:nth-of-type(2) {
      background-image: url("/picture/kimetsu_no_yaiba/demon_slayer.webp");
    }
    &:nth-of-type(3) {
      background-image: url("/picture/jujutsu_kaisen/jujutsu_kaisen.avif");
    }
    &:nth-of-type(4) {
      background-image: url("/picture/chainsaw_man/chainsaw_man.jpg");
    }
    &:nth-of-type(5) {
      background-image: url("/picture/kaiju_no_8/kaiju_no_8.jpg");
    }
    &:nth-of-type(6) {
      background-image: url("/picture/dan_da_dan/dan_da_dan.png");
    }

    .content {
      font-size: 1.2rem;
      color: #fff;
      display: flex;
      align-items: center;
      padding: 15px;
      opacity: 0;
      flex-direction: column;
      height: 100%;
      justify-content: flex-end;
      background: linear-gradient(
        0deg,
        rgba(2, 2, 46, 0.68) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: translateY(100%);
      transition: all 0.5s ease-in-out;
      visibility: hidden;
    }

    &:hover {
      flex: 0 0 250px;
      box-shadow: 1px 3px 15px #780606;
      transform: translateY(-30px);
    }

    &:hover .content {
      opacity: 1;
      transform: translateY(0%);
      visibility: visible;
    }
  }
}

@media (max-width: 768px) { 
  .container-main {
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-left: auto;

    & > div {
      flex: none !important;
      width: 80%;
      height: 100vw;
      max-height: 400px;
      margin-bottom: 15px;
      transition: height 0.5s ease;

      &:hover {
        margin-top: 40px;
      }
    }
  }
}
</style>