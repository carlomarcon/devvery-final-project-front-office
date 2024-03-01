<script>
export default {
    data() {
        return {
            footerItems: [
                {
                    title: "Uniamo le forze",
                    links: [
                        { label: "Lavora con noi", url: "https://boolean.careers" },
                        { label: "Registrati", url: "http://127.0.0.1:8000/register" },
                        { label: "Login", url: "http://127.0.0.1:8000" }
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

<template>
    <footer class="position-relative p-5 pb-3 bg-dark ">
        <div class="p-3 my-5 container">
            <div
                class="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-white position-relative z_index justify-content-between">
                <div class="col mb-4" v-for="(item, index) in footerItems" :key="index">
                    <h2>{{ item.title }}</h2>
                    <div class="mb-2" v-for="(link, linkIndex) in item.links" :key="linkIndex">
                        <span v-if="link.icon" class="text-white"><i class=" fs-5 me-2"
                                :class="'fab fa-' + link.icon"></i></span>
                        <a class="text-white text-decoration-none" :href="link.url">{{ link.label }}</a>
                    </div>
                </div>

                <div>
                    <router-link class="text-white" to="/term">Termini e Condizioni</router-link><br>
                    <router-link class="text-white" to="/privacy">Politica sulla Privacy</router-link>
                </div>
            </div>
        </div>

        <div class="stars"></div>
        <div class="twinkling"></div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    background-image: url("../assets/images/footer/BG-Gradient.png");
    background-size: contain;
    z-index: 4;

    .z_index {
        z-index: 3;
    }

    i {
        width: 1.5rem;
    }

    .stars {
        background: transparent url("../assets/images/footer/stars_bg.png") repeat top center;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 0;
    }

    .twinkling {
        background: transparent url("../assets/images/footer/bg-twinkle.png") top center;
        background-size: contain;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        animation: move-twink 900s linear infinite;
    }

    @keyframes move-twink {
        0% {
            background-position: 0 0;
        }

        100% {
            background-position: -10000px 0;
        }
    }
}
</style>