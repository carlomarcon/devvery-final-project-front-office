<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {

        };
    },
};
</script>

 
<template>
    <div class="wrapper ms_bg-yellow">
        <AppHeader />
        <div class="container">
            <div class="fs-2">
                <h2 class="text-center fw-bolder mb-4"><span class="ms_brand">De<span class="text-white"><i class="fa-solid fa-v"></i><i class="fa-solid fa-v"></i></span>ery</span>: Rivoluzioniamo il Gusto, Consegna dopo Consegna</h2>
                
                <p>Benvenuti in Devvery, dove l'innovazione incontra la passione per il cibo.
                    Siamo più di una semplice azienda
                    di delivery; siamo un movimento dedicato a portare la bontà culinaria direttamente alla tua
                    porta.
                    Fondati sulla convinzione che il cibo di qualità debba essere accessibile a tutti, ci impegniamo a
                    rendere
                    la tua esperienza gastronomica più conveniente, veloce e deliziosa che mai.</p>
                <p>Il nostro approccio alla consegna di cibo è stato progettato per soddisfare le esigenze moderne, unendo
                    tecnologia all'avanguardia e un tocco umano. Con la nostra app intuitiva, puoi sfogliare un'ampia
                    varietà di
                    ristoranti locali, selezionare i tuoi piatti preferiti e ricevere il tutto con pochi click.</p>

                <p>Ma non ci fermiamo qui. In Devvery, crediamo nell'importanza di sostenere la comunità locale e ridurre
                    l'impatto ambientale. Collaboriamo strettamente con i ristoratori della tua zona, garantendo che ogni
                    ordine
                    vada a sostenere le piccole imprese e a promuovere l'ecosistema culinario locale. Inoltre, adottiamo
                    pratiche sostenibili nella nostra logistica di consegna per ridurre al minimo l'impatto ambientale delle
                    nostre operazioni.</p>

                <p>Ci impegniamo costantemente a superare le aspettative dei nostri clienti, offrendo un servizio
                    impeccabile e una varietà ineguagliabile di opzioni culinarie. Che tu stia cercando una pizza fragrante,
                    un sushi fresco o un comfort food a tarda notte, puoi contare su Devvery per consegnare il piacere del cibo
                    direttamente alla tua porta, quando ne hai più bisogno.</p>

                <strong>Unisciti a noi in questa avventura culinaria. Con <span class="ms_brand">De<span class="text-white"><i class="fa-solid fa-v"></i><i class="fa-solid fa-v"></i></span>ery</span> , ogni pasto è un'esperienza da
                    gustare.</strong>
            </div>
        </div>

        <AppFooter />
    </div>
</template>


<style lang="scss" scoped>

.ms_brand {
    white-space: nowrap;
    position: relative;

    .text-white {
        &::after {
        content: '';
        width: 5%;
        rotate: -20deg;
        height: 30%;
       
        background-color: #f9b91f;
        top: 16%;
        left: 29%;
        position: absolute;
    }
        &::before {
        content: '';
        width: 5%;
        rotate: -20deg;
        height: 30%;
       
        background-color: #fdb633;
        top: 16%;
        left: 47%;
        position: absolute;
    }
}
   
   
}
.container {
    padding-top: 6rem;
    padding-bottom: 6rem;
    min-height: calc(100vh - 430px);
}
</style>

