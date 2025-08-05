<script setup>
import { headerRef, anchorClicked, handleAnchorClick } from '~/composables/useHeaderControl';

const header = headerRef;
const lastScrollY = ref(0);

function handleLogoClick() {
  if (window.scrollY === 0) {
    location.reload();
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

onMounted(() => {
  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;

    if (!anchorClicked.value) {
      if (currentY > lastScrollY.value) {
        header.value?.classList.add("hidden");
      } else {
        header.value?.classList.remove("hidden");
      }
    }

    lastScrollY.value = currentY;
  });
});
</script>

<template>
  <header ref="header">
    <div class="logo contact-row-name">
      <img src="/icon/logo_face.png" alt="Logo-Face" @click="handleLogoClick" />
      <div class="site-name">WEEKLY ANIME</div>
    </div>
    <nav>
      <div class="nav-pointer nav-mobile">
        <a href="#anime" @click="handleAnchorClick">Top-SIX</a>
      </div>
      <div class="nav-pointer">
        <a href="#faqs" @click="handleAnchorClick">FAQs</a>
      </div>
      <div class="nav-pointer">
        <a href="#about" @click="handleAnchorClick">About</a>
      </div> 
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(31, 40, 51, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: top 0.3s ease;

  &.hidden {
    top: -60px;
  }
}

nav {
  display: flex;
  gap: 25px;

  a {
    text-decoration: none;
    color: #66FCF1;
    font-size: 22px;
    font-weight: bold;
    margin: 0 25px;
    cursor: pointer;

    &:hover {
    transition: color 0.8s ease;
    color:#45A29e;
    }
  }
}

.nav-pointer:hover {
  transition: transform 0.8s ease;
  transform: scale(1.3);
  }

.logo{
  & > img{
    height: 50px;
    width: auto;
    border-radius: 50%;
    cursor: pointer;

    &:hover{
      box-shadow: 0 0 20px 10px rgba(69, 162, 158, 0.5);
      transition: transform 0.7s ease;
      transform: scale(1.1) rotate(-15deg);
    }
  }
}

.contact-row-name {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-left: -15px;
  margin-right: -15px;
}

.site-name {
  display: flex;
  justify-content: center;
  align-items: center;
  color:#fff;
  font-size: 30px;
  font-weight: bolder;
}

@media (max-width: 768px) {
  header {
    padding: 0 0 0 20px;
    height: 70px;
  }

  nav {
    gap: 5px;

    a {
      font-size: 17px;
      margin: 0 10px;
    }
  }

  .logo {
    & > img {
      height: 40px;
    }
  }

  .contact-row-name{
    gap:7px;
  }

  .site-name {
    font-size: 18px;
  }
}
</style>