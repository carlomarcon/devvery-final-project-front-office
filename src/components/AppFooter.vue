<template>    
    <footer>
        <div class="container d-md-flex justify-content-between p-3">
            <div v-for="(item, index) in footerItems" :key="index">
                <h2 class="mt-4 mb-3 text-white">{{ item.title }}</h2>

                <div class="lh-lg" v-for="(link, linkIndex) in item.links" :key="linkIndex">
                    <span v-if="link.icon" class="text-white"><i class="me-2 fs-5" :class="'fab fa-' + link.icon"></i></span>
                    <a class="text-white text-decoration-none" :href="link.url">{{ link.label }}</a>
                    <br>
                </div>

            </div>
        </div>
        <div class="container pt-3 pb-3">
            <a class="text-white" href="">Termini e condizioni</a><br>
            <router-link class="text-white" to="/privacy">Politica sulla Privacy</router-link>            
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            footerItems: [
                {
                    title: "Uniamo le forze",
                    links: [
                        { label: "Lavora con noi", url: "INSERIRE URL" },
                        { label: "Registrati", url: "INSERIRE URL" },
                        { label: "Login", url: "INSERIRE URL" }
                    ]
                },
                {
                    title: "Link di interesse",
                    links: [
                        { label: "Chi siamo", url: "INSERIRE URL" },
                        { label: "FAQ", url: "INSERIRE URL" },
                        { label: "Sicurezza", url: "INSERIRE URL" }
                    ]
                },
                {
                    title: "Contattaci",
                    links: [
                        { label: "Instagram", url: "https://www.instagram.com/", icon: "instagram" },
                        { label: "Facebook", url: "https://www.facebook.com/", icon: "facebook" },
                        { label: "Telegram", url: "https://web.telegram.org/a/", icon: "telegram" },
                        { label: "Whatsapp", url: "https://www.whatsapp.com/", icon: "whatsapp" }
                    ]
                }
            ]
        };
    }
};
</script>

<style scoped lang="scss">
footer {
    background-color: #01222b;
}

footer a:hover {
  text-decoration: underline !important; 
}


</style>