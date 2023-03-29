<template>
<v-container>
  <v-carousel class="my-8">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

    <v-btn @click="llamarPrograma()"
      class="mx-2"
      dark
      color="purple"
    >
      Ver trabajos realizados
    </v-btn>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://como-funciona.com/wp-content/uploads/2020/09/mujer-banner-800x400.png',
          },
          {
            src: 'https://www.aladinia.com/blog/wp-content/uploads/2019/11/hombre-60-anos.jpg',
          },
          {
            src: 'https://notimundo.com.ec/wp-content/www/uploads/2020/06/George-Clooney.jpg',
          },
          {
            src: 'https://bienestar.global/wp-content/uploads/2021/06/Es-efectiva-la-vacuna-en-personas-con-trasplantes-de-organos.png',
          },
          {
            src: 'https://www.mundoempresarial.pe/images/economia/mujer-profesional.jpg',
          },
          {
            src: 'https://img.nuevamujer.com/sites/10/2020/12/14/0-0/mujer1-0fe289ae11bb2903f2cf371a1afe4caa-800x400.jpg',
          }
        ],
      }
    },
    methods: {
      llamarPrograma(){
            this.$router.push('/programas')
        }
    }
    
  }
</script>