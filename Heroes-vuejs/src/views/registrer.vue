<template>
  <div id="app">
    <div class="register-container">
      <div class="content">
        <section>
          <img src="./../assets/logo.svg" alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os caso da sua ONG</p>

           <router-link class="back-link" style="font-size:16; color:#E02041" to="/"> Voltar para home </router-link>
          <!-- <Link className="" to="/">
            <FiArrowLeft size={16} color=""/>
            
          </Link> -->
        </section>

        <form >
          <input 
            placeholder="Nome da ONG"
            
           
          />

          <input 
            type="email" 
            placeholder="E-mail"
          />

          <input 
            placeholder="Whatsapp"
          
          />

          <div class="input-group">
            <input 
              placeholder="Cidade"
             
            />

            <input 
              placeholder="UF" 
              style="width:80"
             
              />
          </div>

          <button class="button" type="submit">Cadastrar</button>
        </form>
         <router-view/>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: "app",
  data(){
    return{
      
    }
  }
}
</script>

<style >
.register-container {
  width: 100%;
  height: 100vh;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.register-container .content {
  width: 100%;
  padding: 96px;
  background: #F0F0F5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.register-container .content section {
  width: 100%;
  max-width: 380px;
}

.register-container .content section h1 {
  margin: 64px 0 32px;
  font-size: 32px;
}

.register-container .content section p {
  font-size: 18px;
  color: #737380;
  line-height: 32px;
}

.register-container .content form {
  width: 100%;
  max-width: 450px;
}

.register-container .content form input {
  margin-top: 8px;
}

.register-container .content form .input-group {
  display: flex;
}

.register-container .content form .input-group input + input {
  margin-left: 8px;
}




</style>