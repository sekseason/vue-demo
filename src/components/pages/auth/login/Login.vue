<template>
  <div class="login">
    <b-card class="outer">
      <b-card class="inner">
        <div class="text-center py-4">
          <img src="/images/toplogo.png" alt="DentalHuset" />
        </div>

        <div class="text-center p-4">
          <b>Demo account:</b><br />
          username: admin<br />
          password: password
        </div>

        <div class="row">
          <div class="col-8 offset-2">
            <b-form @submit="onSubmit">
              <b-form-group class="has-feedback">
                <b-form-input type="text" v-model.trim="$v.form.username.$model" :class="{ 'is-invalid': $v.form.username.$error }"
                  required placeholder="Username" />
                <b-form-invalid-feedback :force-show="$v.form.username.$error">
                  Min. 4 characters.
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group class="has-feedback">
                <b-form-input type="password" v-model.trim="$v.form.password.$model" :class="{ 'is-invalid': $v.form.password.$error }"
                  required placeholder="Password" />
                <b-form-invalid-feedback :force-show="$v.form.password.$error">
                  Min. 6 characters.
                </b-form-invalid-feedback>
              </b-form-group>

              <div class="clearfix mt-2">
                <div class="float-left">
                  <b-button type="submit" variant="primary" :disabled="loading || $v.$invalid">
                    <i v-if="!loading" class="fas fa-sign-in-alt"></i>
                    <i v-else class="fas fa-cog fa-spin"></i>
                    Log in
                  </b-button>
                </div>

                <div class="float-right">
                  <router-link to="/auth/recovery">forgot password?</router-link>
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
  import store from '@/store';
  import { required, minLength } from 'vuelidate/lib/validators';

  export default {
    name: "login",
    data() {
      return {
        loading: false,
        form: {
          username: '',
          password: '',
        }
      }
    },
    validations: {
      form: {
        username: {
          required,
          minLength: minLength(4)
        },
        password: {
          required,
          minLength: minLength(6)
        }
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        document.body.className = 'full-background';
        document.title = config.name + ' : Log in';
      },
      onSubmit(evt) {
        evt.preventDefault();
        this.loading = true;
        store.dispatch('authLogin', this.form)
          .then(success => {
            if (success) {
              this.$router.push(this.$route.query.redirect ? this.$route.query.redirect : '/');
            }

            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
          });
      }
    }
  }
</script>
