<template>
    <div id="app">
           <div class="profile-container">
      <header>
        <img src="./../assets/logo.svg" alt="Be The Hero"/>
        <span>Bem vinda, {{Username}} </span>
        <router-link type="submit" class="button"   to="/acidente"> Cadastrar novo caso </router-link>
    
      </header>
    
      <h1>Casos Cadastrados</h1>

      <ul>
      
          <li v-for="acidents in acident" :key="acidents.id">
            <strong>CASO:{{acidents.id}} </strong>
            <p>{{acidents.acidentTile}}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{{acidents.acidentDescription}}</p>

            <strong>VALOR:</strong>
            <p>{{acidents.preco}} </p>

           
          </li>
      </ul>
        <router-link class="back-link" style="font-size:16; color:#E02041" to="/"> Voltar para login</router-link>
    </div>
    </div>
</template>

<script>
export default {
    name: "app",
    components:{

    },
    data(){
        return{
             Username: "Lázaro Inácio Manuel",
           acident:[{
            id: 1,
            acidentTile: "Morreu muita gente neste acidente",
            acidentDescription: "As estradas em Angola não estão em condições, e tem causado muitos acidentes",
            preco: 200.110,
           },
           {
               id: 2,
               acidentTile: "Qual será a causa destes acientes?",
               acidentDescription: "As estradas, carros em mal estado, pessoas embreagadas",
               preco: 220.110,
           },
           {
               id:3,
                acidentTile: "Por quê, a estradas continuam assim?",
                acidentDescription: "Não sei vocês mais está história tem um culpado",
                preco: 233.12,
           },
           {
               id:4,
               acidentTile: "Governo deve ver a situação das estradas",
               acidentDescription: "Muitas mortes oucorridas nas estradas é por falta de condições mesmo na estradas...",
               preco: 146.192
           }
           ]
        }
    } ,
    methods:{
        HaveNoBackEnd(){
            alert("Desculpe, não tem o back end ainda, só mesmo o front, enjoy")
        }
    }
}
</script>

<style scoped>

.profile-container {
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
}

.profile-container header {
  display: flex;
  align-items: center;
}

.profile-container header span {
  font-size: 20px;
  margin-left: 24px;
}

.profile-container header img {
  height: 64px;
}

.profile-container header a {
  width:  260px;
  margin-left: auto;
  margin-top: 0;
}

.profile-container header button {
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;

  transition: border-color 0.2s;
}

.profile-container header button:hover {
  border-color: #999;
}

.profile-container h1 {
  margin-top: 80px;
  margin-bottom: 24px;
}

.profile-container ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;
}

.profile-container ul li {
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
}

.profile-container ul li button {
  background: transparent;
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
}

.profile-container ul li button:hover {
  opacity: 0.8;
}

.profile-container ul li strong {
  display: block;
  margin-bottom: 16px;
  color: #41414d;
}

.profile-container ul li p + strong {
  margin-top: 32px;
}

.profile-container ul li p  {
  color: #737380;
  line-height: 21px;
  font-size: 16px;
}
</style>