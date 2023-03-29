<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto my-15"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="15/9"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
            style="height: 100%;"
          >
            ¡COMPRA YA!
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight dark--text text-h6 mb-2">
          Para la comida perfecta
        </div>
        <h3 class="text-h4 font-weight-light orange--text mb-2">
          Utensilios de cocina QW
        </h3>
        <div class="font-weight-light text-h6 mb-2">
          Nuestros utensilios de cocina Vintage hacen las delicias de cualquier chef<br>
          Hecho de bambú a mano
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
