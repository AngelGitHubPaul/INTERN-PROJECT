<template>
    <section class="flex flex-col items-center w-screen h-screen md:flex-row">
      <div class="flex flex-col items-center justify-center px-5 basis-1/2 first-letter:">
        <div
          class="border-2 border-teal-400 rounded-md shadow-lg outline-black hover:shadow-2xl shadow-teal-950 bg-teal-400/50">
          <img src="../../assets/Fruitie/4.png" />
        </div>
        <div class="py-5 text-3xl">Fruity NFT Claim</div>
        <div>
          <button class="button" @click="open = true">
            <span class="button_lg">
              <span class="button_sl"></span>
              <span class="button_text">Mint Now!</span>
            </span>
          </button>
        </div>
      </div>
      <div class="md:pr-16 basis-2/3">
        <p class="text-md md:text-2xl font-bold text-center text-white w-[100vw] md:w-full ">
          Thank you for visiting Fruity NFT! To access the minting page, please provide us with your email address. Once
          you've submitted your email, we'll send you a link to the page. Please remember that only one email can be used
          per mint. Kindly check your inbox after submitting your email. Happy Minting!.
        </p>
      </div>
    </section>
  <Teleport to="section">
    <div v-if="openLoadingModal" class="fixed top-0 left-0 w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-black/60 z-10">
      <font-awesome-icon icon="fa-solid fa-apple-whole" class="w-16 h-16" bounce style="color: #fff;" />
      <p class="text-white">{{ this.loadingModalMessage }}</p>
    </div>
    <div v-if="open" class="modal">
      <div>
        <form class="flex flex-col items-center justify-center w-full h-full" @submit.prevent="handleSubmit">
          <input v-if="!isSubmitted" type="email" class="w-3/4 h-12 p-2 text-center bg-gray-600 focus:outline-gray-400 input-field"
            placeholder="Enter Email" required v-model="email">
          <div v-if="!!invalidMessage" class="text-red-500">{{ this.invalidMessage }}.</div>
          <button type="submit" class="submit_btn" :disabled="isLoading || isSubmitted || email === ''">
            <span v-if="isLoading">
              <i class="loading-icon"></i>
            </span>
            <span v-else-if="isSubmitted">
              Submitted ✔
            </span>
            <span v-else>
              Submit
            </span>
          </button>
          <div v-if="showModal" class="modal-confirm">
            <h2>{{ modalTitle }}</h2>
            <p>{{ modalMessage }}</p>
            <div class="option-btn">
              <button @click="closeModal" class="ok">OK</button>
              <button @click="handleCancel" class="cancel">Cancel</button>
            </div>
          </div>
          <!-- Display a message if email validation fails -->
        </form>
        <div class="close-btn" id="close_button">
          <div id="translate"></div>
          <span @click="open = false" class="close_btn">Close</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { validateEmail } from '../../api/email-validator/emailValidation';

export default {
  data() {
    return {
      open: false,
      isLoading: false,
      isSubmitted: false,
      email: '',
      showModal: false,
      modalTitle: '',
      modalMessage: '',
      emailInvalid: false,
      invalidMessage: '',
      openLoadingModal: false,
      loadingModalMessage: 'Loading',
    };
  },
  methods: {
    async handleSubmit() {
      this.openLoadingModal = true
      this.loadingModalMessage = "Validating email address..."
      if (this.email === '') {
        this.emailInvalid = true;
        this.invalidMessage = "Email cannot be empty"
        setTimeout(()=>{
          this.invalidMessage = "";
        }, 3000)
        this.openLoadingModal = false;
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.emailInvalid = true;
        this.invalidMessage = "Invalid Email"
        setTimeout(()=>{
          this.invalidMessage = "";
        }, 3000)
        this.openLoadingModal = false;
        return;
      }
      this.emailInvalid = false;
      try {
        const isValidEmail = await validateEmail(this.email);
        console.log(isValidEmail);
        if (isValidEmail) {
          this.isLoading = true;
          this.isSubmitted = false;
          setTimeout(() => {
            this.isLoading = false;
            this.isSubmitted = true;
          }, 2000);
          // console.log('TRue');
        } else {
          this.invalidMessage = "This email has already been used"
          setTimeout(()=>{
            this.invalidMessage = "";
          }, 3000)
          this.isSubmitted = false;
          // console.log('false');
        }

      } catch (error) {
        console.log(error);
      }
      this.openLoadingModal = false;
    }
  }
};

</script>

<style scoped>
img {
  width: 300px;
  height: auto;
  padding: 5px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-confirm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  position: absolute;
  background-color: #0f1923;
  width: 30rem;
  height: 15rem;
  color: white;
}

.modal-confirm .option-btn {
  display: flex;
  margin-top: 100px;
  gap: 200px;

}

.modal-confirm .option-btn .ok {
  background-color: #2D3142;
  width: 5rem;
  padding: 5px;
  padding-top: 1px;
  border: solid 1px;
}

.modal-confirm .option-btn .cancel {
  background-color: #ff4655;
  width: 5rem;
  padding: 5px;
  padding-top: 1px;
  border: solid 1px;
}

.modal>div {
  position: relative;
  padding: 20px;
  background-color: rgb(24, 34, 43);
  width: 45rem;
  height: 25rem;
  border: solid 1px;
  border-right: none;
  border-left: none;
}



@media (max-width: 768px) {
  .modal>div{
    width: 90vw;
  }
}

.close_btn {
  position: absolute;
  cursor: pointer;
  padding: 10px 35px;
}


/* Minting button css */

.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #0f1923;
  cursor: pointer;
  position: relative;
  padding: 8px;
  width: 12rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all .15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button::before,
.button::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  height: calc(50% - 5px);
  border: 1px solid #7D8082;
  transition: all .15s ease;
}

.button::before {
  top: 0;
  border-bottom-width: 0;
}

.button::after {
  bottom: 0;
  border-top-width: 0;
}

.button:active,
.button:focus {
  outline: none;
}

.button:active::before,
.button:active::after {
  right: 3px;
  left: 3px;
}

.button:active::before {
  top: 3px;
}

.button:active::after {
  bottom: 3px;
}

.button_lg {
  position: relative;
  display: block;
  width: 12rem;
  padding: 10px 20px;
  color: #fff;
  background-color: #0f2031;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px transparent;
}

.button_lg::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background-color: #0f1923;
}

.button_lg::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 4px;
  height: 4px;
  background-color: #0f1923;
  transition: all .2s ease;
}

.button_sl {
  display: block;
  position: absolute;
  top: 0;
  bottom: -1px;
  left: -8px;
  width: 0;
  background-color: #ff4655;
  transform: skew(-15deg);
  transition: all .2s ease;
}

.button_text {
  position: relative;
}

.button:hover {
  color: #0f1923;
}

.button:hover .button_sl {
  width: calc(100% + 15px);
}

.button:hover .button_lg::after {
  background-color: #fff;
}

/* Submit button */

.submit_btn {
  margin-top: 10px;
  background-color: #ff4655;
  padding: 5px;
  width: 10rem;
  border-radius: 2px;
  font-weight: 500;
  border: none;
  color: #ffffff;
}

.submit_btn:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  direction: rtl;
  z-index: -1;
  box-shadow:
    -7px -7px 20px 0px #fff9,
    4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}

.submit_btn:hover {
  color: #000;
}

.submit_btn:hover:after {
  left: auto;
  right: 0;
  width: 100%;
}

.submit_btn:active {
  top: 2px;
}

.input-field {
  display: inline-block;
  vertical-align: middle;
}

/* loading Animation */

.loading-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  padding-bottom: none;
  margin-bottom: none;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* close button */

.close-btn {
  display: inline-flex;
  height: 40px;
  width: 100px;
  border: 2px solid #BFC0C0;
  margin: 20px 20px 20px 20px;
  color: #BFC0C0;
  text-transform: uppercase;
  text-decoration: none;
  font-size: .8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #ff4655;
}

#close_button {
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  margin: 1rem;
  padding: 10px 35px;
  color: white;
  overflow: hidden;
}

#close_button span {
  position: relative;
}

.pressed {
  transform: matrix(0.95, 0, 0, 0.95, 0, 0);
}


#translate {
  transform: rotate(45deg);
  width: 105%;
  height: 225%;
  left: -200px;
  top: -20px;
  background: rgb(24, 34, 43);
  position: absolute;
  transition: all .3s ease-Out;
}

#close_button:hover #translate {
  left: 0;
}

#close_button:hover span {
  color: #2D3142;
}

/* Bg css */

section {
  position: relative;
  background: linear-gradient(-45deg, #ff4848, #00000077, #04081f, #111d33);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
  width: 100vw;
  margin-top: -8px;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
