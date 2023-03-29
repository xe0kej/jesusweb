<template>
<v-container>
  <h1
  >
    Registro de Clientes</h1>
  <v-form
    class="my-10"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
            v-model="message"
            :prepend-icon="icon"
            clear-icon="mdi-close-circle"
            clearable
            label="Mensaje"
            type="text"
          ></v-text-field>    

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'Debe estar de acuerdo para continuar']"
      label="¿Estás de acuerdo?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reiniciar Formulario
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reiniciar Validación
    </v-btn>
  </v-form>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'El nombre es requerido',
        v => (v && v.length <= 10) || 'El nombre debe ser de al menos 8 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'Ingrese un e-mail válido',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>