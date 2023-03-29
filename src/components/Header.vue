<template>
 <v-card class="overflow-hidden">
    <v-app-bar
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      app hide-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

     <v-app-bar-title mt-4> 
      <v-img
        src="https://brujas.nyc/assets/images/logo-pink.svg"
        height="170"
        width="170"
        contain
      ></v-img>
     </v-app-bar-title>


      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab @click="llamarInicio()">Home</v-tab>
          <v-tab @click="llamarClientes()">Clientes</v-tab>
          <v-tab @click="llamarTabla()">Tabla</v-tab>
          <v-tab @click="llamarGaleria()">Galería</v-tab>
          <v-tab @click="llamarContacto()">Contacto</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary dark height="380px" width="80px">
      <v-layout mt-2 column align-center>
          <v-list-item>
            <v-btn
              class="ma-2"
              outlined
              medium
              fab
              color="indigo"
            >
              <v-icon>mdi-home</v-icon>
            </v-btn>
            </v-list-item>

            <v-list-item>
            <v-btn
              class="ma-2"
              outlined
              medium
              fab
              color="indigo"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            </v-list-item>

            <v-list-item>
              <v-btn
              class="ma-2"
              outlined
              medium
              fab
              color="indigo"
            >
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
            </v-list-item>

            <v-list-item>
            <v-btn
              class="ma-2"
              outlined
              medium
              fab
              color="indigo"
            >
              <v-icon>mdi-folder</v-icon>
            </v-btn>
            </v-list-item>

            <v-list-item>
              <v-btn
              class="ma-2"
              outlined
              medium
              fab
              color="indigo"
            >
              <v-icon>mdi-cog-outline</v-icon>
            </v-btn>
            </v-list-item>
      </v-layout>
    </v-navigation-drawer>
    
    </v-card>

</template>

<script>
export default {
    data: () => ({
      drawer : false
    }),
  
    methods:{

        llamarClientes(){
            this.$router.push('/clientes')

        },

        llamarGaleria(){
            this.$router.push('/galeria')
        },

        llamarTabla(){
            this.$router.push('/tabla')
        },

        llamarInicio(){
            this.$router.push('/home')
        },

        llamarContacto(){
            this.$router.push('/contacto')
        }

    },

}
</script>
