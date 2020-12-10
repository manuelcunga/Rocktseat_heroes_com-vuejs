<template>
  <div id="app">
       <div class="new-incident-container">
      <div class="content">
        <section>
          <img src="./../assets/logo.svg" alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

            <router-link class="back-link" style="font-size:16; color: #E02041"  to="/perfile"> Voltar para perfil </router-link>
        
        </section>

        <form >
          <input 
            placeholder="Título do caso"
            value="title"
          
          />
          <textarea 
            placeholder="Descrição"
            value="description"
            
          />
          <input 
            placeholder="Valor em kwanza"
            value="valores"
          
          />
          <button class="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
        title: "Cadastramento de acidentes",
        description: "Cadastra aqui",
        valores: 923.000
    };
  },
};
</script>

<style scoped>
.new-incident-container {
  width: 100%;
  height: 100vh;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.new-incident-container .content {
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.new-incident-container .content section {
  width: 100%;
  max-width: 380px;
}

.new-incident-container .content section h1 {
  margin: 64px 0 32px;
  font-size: 32px;
}

.new-incident-container .content section p {
  font-size: 18px;
  color: #737380;
  line-height: 32px;
}

.new-incident-container .content form {
  width: 100%;
  max-width: 450px;
}

.new-incident-container .content form input,
.new-incident-container .content form textarea {
  margin-top: 8px;
}
</style>
