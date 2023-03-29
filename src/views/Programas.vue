<template>
<v-container>
    <v-layout>
        <v-flex>
  <v-card
    :loading="loading"
    class="mx-10 my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://como-funciona.com/wp-content/uploads/2020/09/mujer-banner-800x400.png"
    ></v-img>

    <v-card-title>Roxana Díaz</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>

      <div class="my-4 text-subtitle-1">
        Frontend • Developer
      </div>

      <div>Dedicada al 100% al mundo del frontend, 5 años de experiancia en el área</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Trabajos realizados</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>Desarrolladora de Blockchain ETH</v-chip>

        <v-chip>Desarrolladora de Facebook Page</v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</v-flex>

<v-flex>
  <v-card
    :loading="loading"
    class="mx-10 my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://notimundo.com.ec/wp-content/www/uploads/2020/06/George-Clooney.jpg"
    ></v-img>

    <v-card-title>George Clooney</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>

      <div class="my-4 text-subtitle-1">
        Desktop • Developer
      </div>

      <div>Programador experto en el mundo de las aplicaciones de escritorio, 7 años de experiencia</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Trabajos realizados</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>Desarrollador/Contribuidor de Discord para PC</v-chip>

        <v-chip>Desarrollador del App Spotify para PC</v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</v-flex>

</v-layout>
</v-container>

</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>