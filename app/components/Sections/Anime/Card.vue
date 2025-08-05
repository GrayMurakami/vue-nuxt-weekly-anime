<script setup>
import { animeCards } from '~/composables/useAnimeCards';
</script>

<template>
  <div class="container">
    <hr />
    <div class="anime-picture">
      <section id="anime">
        <h1 class="section-text">Top</h1>

        <div v-for="(anime, index) in animeCards" :key="anime.id" :id="anime.id" class="manga">
          <div class="anime-paragraph">
            <img :src="anime.icon" alt="Icon" />{{ anime.title }}
          </div>

          <div class="anime-text">{{ anime.description }}</div>

          <div class="row">
            <div v-for="(card, index) in anime.cards" :key="index" class="column">
              <div class="wrapper">
                <div class="portfolio-item">
                  <img :src="card" :alt="anime.title" />
                </div>
              </div>
            </div>
          </div>

          <hr v-if="index < animeCards.length - 1" class="between-manga" />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.anime-paragraph {
  display: flex;    
  align-items: center;
  gap: 15px;
}

.anime-text {
  line-height: 1.8;
  font-size: 16px;
  letter-spacing: 0.1em;
  margin: 30px 80px 0 100px;
  text-align:end;
}

.between-manga {
  background-color: #C5C6C7;
  border: 0;
  height: 1px;
  margin-bottom: 2em;
}

.anime-picture {
  margin-top: 100px;
  margin-bottom: 100px;
}

.column {
  width: 30%;
  /* margin-bottom: 20px; */
}

.wrapper {
  display: block;
  overflow: hidden;
}

.portfolio-item {
  position: relative; 
  height: 400px;
  border: 2px solid #0B0C10;
  transition: transform 0.6s ease;
  transform-origin: center center;

  &:hover {
    transform: scale(1.2);
  }

  & > img {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}


@media (max-width: 768px) {
  .anime-text {
    font-size: 14px;
    margin: 20px;
  }

  .row {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px 10px;
  }

  .column {
    /* display: flex; */
    width: 48%;
    margin: 1%;
  }

  .portfolio-item {
    height: 200px;
  }
}
</style>