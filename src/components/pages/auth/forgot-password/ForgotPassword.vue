<template>
  <div class="login">
    <b-card class="outer">
      <b-card class="inner">
        <div class="text-center py-4">
          <img src="/images/toplogo.png" alt="DentalHuset" />
        </div>

        <div class="text-center mb-4">
          <h4>Forgot your password?</h4>

          <p class="card-text">
            Clinic2lab will send the password reset
            instructions to the email address
            associated with the email account
            or username that you insert underneath
          </p>
        </div>

        <div class="row">
          <div class="col-8 offset-2 text-center">
            <b-form @submit="onSubmit">
              <b-form-group>
                <b-form-input type="text" v-model="form.username" required placeholder="Username">
                </b-form-input>
              </b-form-group>

              <div class="clearfix">
                <div class="float-left">
                  <b-button type="submit" variant="primary" disabled>
                    <i class="far fa-paper-plane"></i>
                    Send
                  </b-button>
                </div>

                <div class="float-right">
                  <router-link to="/auth/login">
                    <i class="fas fa-sign-in-alt"></i>
                    Log in
                  </router-link>
                </div>
              </div>
            </b-form>
          </div>
        </div>
      </b-card>

      <div class="text-center mt-4">
        <p class="text-black-50">Powered by Clinic2lab.com</p>
        <img src="/images/clinic2lab.png" alt="Clinic2Lab" />
      </div>
    </b-card>
  </div>
</template>

<script>
  import { config } from '@/config';

  export default {
    name: "login",
    data() {
      return {
        form: {
          username: '',
        }
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        document.body.className = 'full-background';
        document.title = config.name + ' : Recovery';
      },
      onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      }
    }
  }
</script>
