<script setup>
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

function handleSubmit() {
  const { name, email, subject, message } = form;

  if (!name || !email || !subject || !message) {
    alert('Please fill out all fields.');
    return;
  }

  console.log('Sending message:', form);

  setTimeout(() => {
    alert('Your message has been sent successfully!');
    
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
  }, 1000);
}
</script>

<template>
  <div class="container">
  <hr />
    <div class="contact-us">
      <section id="faqs">
        <h1 class="section-text">Contact Us</h1>

        <div class="container-contact-us">
          <div class="content-center">
            <div class="col-md-10">
              <div class="content-center">

                <div class="col-md-6">
                  <h3 class="manga">Let's talk about everything!</h3>
                  <div class="contact-text">
                    Feel free to contact us to provide some feedback on our templates, give us suggestions for new templates and themes, or to just say hello!
                    <div class="remark">
                      ※ unfortunately this system for message not work yet, just for example.
                    </div>
                  </div>
                  <img src="/icon/contact-us.png" class="contact-mail" alt="Icon" />
                </div>

                <div class="col-md-6">
                  <form @submit.prevent="handleSubmit">
                    <div class="contact-row">
                      <div class="col-md-12 form-group">
                        <input v-model="form.name" type="text" class="form-control" placeholder="Your name" />
                      </div>
                    </div>

                    <div class="contact-row">
                      <div class="col-md-12 form-group">
                        <input v-model="form.email" type="email" class="form-control" placeholder="Email" />
                      </div>
                    </div>

                    <div class="contact-row">
                      <div class="col-md-12 form-group">
                        <input v-model="form.subject" type="text" class="form-control" placeholder="Subject" />
                      </div>
                    </div>

                    <div class="contact-row">
                      <div class="col-md-12 form-group">
                        <textarea v-model="form.message" class="form-control" rows="7" placeholder="Write your message"></textarea>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12">
                        <button class="button-53" type="submit">SEND MESSAGE</button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  <hr />
  </div>
</template>

<style scoped>
.contact-us {
  margin-top: 100px;
  margin-bottom: 50px;
}

.container-contact-us {
  width: 90%;
}

.content-center {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}

img {
  &.contact-mail {
    display: flex;
    margin: 20px auto;
  }
}

.col-md-12 {
  flex: 0 0 100%;
}

.col-md-10 {
  flex: 0 0 auto;
  width: 100%;
}

.col-md-6 {
  flex: 0 0 50%;
}

.contact-text {
  line-height: 1.4;
  font-size: 16px;
  letter-spacing: 0.1em;
  margin: 50px 80px auto auto;
  color: #fff;
}

.remark {
  margin-top: 10px;
  font-size: 14px;
  color: #C5C6C7 !important;
}

.contact-row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-control {
  border: none;
  background: #C5C6C7;
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  border-radius: 0.25rem;
}

textarea {
  &.form-control {
    height: auto;
  }
}

.button-53 {
  background-color: #45A29e;
  border: 2px solid #66FCF1;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: .75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 100%;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:focus {
    outline: 0;
  }

  &:after {
    content: '';
    position: absolute;
    border: 2px solid #FFFFFF;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  &:hover:after {
    bottom: 2px;
    left: 2px;
  }
}

@media (min-width: 768px) {
  .button-53 {
    padding: .75rem 3rem;
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .col-md-10 {
    flex: 0 0 auto;
    width: 110%;
  }

  .content-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
    margin-top: 30px;
  }

  .contact-text {
    font-size: 14px;
    margin: 20px 20px auto auto;
  }

  .button-53 {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
}
</style>