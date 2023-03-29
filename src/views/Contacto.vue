<template>
  <v-item-group class="my-10">
    <a href="#principio" id="botonArriba">
      <v-btn
            color="primary"
            fab
            medium
            dark
          >
          <v-icon>mdi-chevron-up-circle-outline</v-icon>
          </v-btn>
    </a>

    <v-container>
      <v-row>
        <v-card
          class="mx-auto"
          max-width="344"
          id="principio"
        >
          <v-img
            src="https://www.gruponw.com/nwlib6/includes/phpthumb/phpThumb.php?src=/imagenes/OGZQDP0.png&w=700&f=png"
            height="200px"
          ></v-img>

          <v-card-title class="justify-center">
            Plan Sencillo
          </v-card-title>

          <v-card-subtitle>
              <v-container>
              <h1>
                3.29$
              </h1>
              </v-container>
          </v-card-subtitle>
          
          <v-btn
            class="ml-3 mb-3"
            color="primary"
            href="https://api.whatsapp.com/send?phone=584124050388&text=Buenas,%20quisiera%20tener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20plan%20sencillo,%20gracias."
            target="_blank"
          >
            Contratar plan sencillo
          </v-btn>

        </v-card>

        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img
            src="https://www.neolo.com/blog/wp-content/uploads/2016/11/servicio-de-atenci%C3%B3n-al-cliente.jpg"
            height="200px"
          ></v-img>

          <v-card-title class="justify-center">
            Plan Junior
          </v-card-title>

          <v-card-subtitle>
              <v-container>
              <h1>
                4.92$
              </h1>
              </v-container>
          </v-card-subtitle>

          <v-btn
            class="ml-3 mb-3"
            color="primary"
            href="https://api.whatsapp.com/send?phone=584124050388&text=Buenas,%20quisiera%20tener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20plan%20junior,%20por%20favor."
            target="_blank"
          >
          Contratar plan junior
          </v-btn>
        </v-card>


        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img
            src="https://www.neolo.com/blog/wp-content/uploads/2016/11/servicio-de-atenci%C3%B3n-al-cliente.jpg"
            height="200px"
          ></v-img>

          <v-card-title class="justify-center">
            Plan Premium
          </v-card-title>

          <v-card-subtitle>
              <v-container>
            <h1>
                11.95$
            </h1>
              </v-container>
          </v-card-subtitle>

          <v-btn
            class="ml-3 mb-3"
            color="primary"
            href="https://api.whatsapp.com/send?phone=584124050388&text=Buenas,%20quisiera%20tener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20plan%20premium,%20much%C3%ADsimas%20gracias."
            target="_blank"
          >
            Contratar plan premium
          </v-btn>

        </v-card>

      </v-row>

    </v-container>

  </v-item-group>


</template>

<script>
  
  export default {

    name: 'Servicios',

methods:{

    },
  }
  
</script>

<style scope>
  .alinearjustificado {
    text-align: justify;
  }
#botonArriba {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  }
</style>
