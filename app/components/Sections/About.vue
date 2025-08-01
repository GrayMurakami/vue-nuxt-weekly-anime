<script setup>
  const container = document.querySelector('.photo-move');
  const img = container.querySelector('img');

  container.addEventListener('mousemove', (event) => {
    const rect = container.getBoundingClientRect();

    // Координаты мыши относительно контейнера
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Центр контейнера
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Вычисление углов (чем дальше от центра, тем больше угол)
    const mouseX = ((x - centerX) / centerX) * 10; // Угол наклона по X (от -10 до 10 градусов)
    const mouseY = ((centerY - y) / centerY) * 10; // Угол наклона по Y (от -10 до 10 градусов)

    // Применяем углы через CSS-переменные
    img.style.setProperty('--mouseX', `${mouseX}deg`);
    img.style.setProperty('--mouseY', `${mouseY}deg`);
  });

  container.addEventListener('mouseleave', () => {
    img.style.setProperty('--mouseX', '0deg');
    img.style.setProperty('--mouseY', '0deg');
  });
</script>

<template>
  <div class="about-me">
    <section id="about">
    <h1 class="section-text">About</h1>
    <div class="about-center">
        <div class="col-md-10">
        <div class="about-center">

            <div class="about-row col-md-1">
            <div class="photo-move">
                <img src="/image/biography.jpg" class="about-photo" alt="Photo">
            </div>
            </div>

            <div class="about-row col-md-2">
            <div class="about-text">
                Programmer, designer, sportsman and just a positive person, who get a lot of experience in his life! This is one of the examples of my designer work. I am constantly developing and learning something new, just in one year I found a job in IT from scratch and gained many qualifications in both frontend and backend sphere. Creating sites is very interesting and entertaining for me. Maybe I am not a master in this business, but someday it will definitely become. My strong point is willpower, which helps me to achieve everything I want.!
                <div class="about-text-do">Let's Do It!</div>
            </div>
            </div>
        
        </div>
        </div>
    </div>

    </section>
  </div>
</template>

<style scoped>
  /* About */

.about-center {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}

.about-row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.col-md-1 {
  flex: 0 0 45%;
}

.col-md-2 {
  flex: 0 0 40%;
}

.about-text {
  line-height: 1.4;
  font-size: 16px;
  letter-spacing: 0.1em;
  color: #fff;
}

.about-text-do {
  margin-top: 40px;
  text-align: end;
  font-size: 17px;
  font-weight: bold !important;
}

.about-photo {
  height: auto;
  width: 350px;
  padding: 2px;
  border: 1px solid #66FCF1;
}

.photo-move {
  perspective: 1000px;
  display: inline-block; 
    & > img  {
    height: auto;
    transform: rotateX(var(--mouseY)) rotateY(var(--mouseX)); /* Используем CSS-переменные */
    transition: transform 0.1s ease-out; /* Плавный переход */
  }
}
</style>
