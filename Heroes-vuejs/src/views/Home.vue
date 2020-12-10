<template>
  <div class="home">
       <div class="logon-container">
      <section class="form">
         <img src=./../assets/logo.svg alt="Be The Hero"/> 

        <form >
          <h1>Faça seu logon</h1>

          <input 
            placeholder="Sua ID"
          
          
          />
          <router-link class="button"  to="/perfile" type="submit" > Entrar</router-link>
          <router-link class="back-link" to="/registrer" style="color:font-size:16">Não tenho cadastro </router-link>
        </form>
         <router-view/>
      </section>

      <!-- <img @src={{heroesImg}} alt="Heroes"/> -->
      <img src="./../assets/heroes.png" >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{

    }
   
  }
}
</script>

<style >
.logon-container {
  width: 100%;
  height: 100vh;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logon-container section.form {
  width: 100%;
  max-width: 350px;
  margin: 30px;
}

.logon-container section.form form {
  margin-top: 100px;
}

.logon-container section.form form h1 {
  font-size: 32px;
  margin-bottom: 32px;
} 



</style>
