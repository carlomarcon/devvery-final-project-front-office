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

<template>
    <footer class="py-5">

        <div class="p-3">
            <div class="row row-cols-2 row-cols-md-4 g-5 footer-links text-start">
                <div class="col" v-for="(item, index) in footerItems" :key="index">
                    <h2>{{ item.title }}</h2>
                    <div class="mb-2" v-for="(link, linkIndex) in item.links" :key="linkIndex">
                        <span v-if="link.icon" class="text-white"><i class="fs-5 me-2"
                                :class="'fab fa-' + link.icon"></i></span>
                        <a class="text-white text-decoration-none" :href="link.url">{{ link.label }}</a>
                    </div>
                </div>
            </div>

            <div class="footer-links container flex-column flex-md-row">
                <a class="text-white" href="">Termini e condizioni</a><br>
                <router-link class="text-white" to="/privacy">Politica sulla Privacy</router-link>
            </div>
        </div>

        <div class="stars"></div>
        <div class="twinkling"></div>
    </footer>
</template>

<style scoped lang="scss">

footer::before {
    width: 100%;
    background-image: url(../assets/images/main/onda.png);
    content: '';
    height: 4rem;
    position: absolute;
    display: block;
    z-index: 9;
    top: -1px;
    left: 0;
    background-size:cover;
    transform: rotate(180deg);
    background-repeat: no-repeat;
}


@keyframes move-twink {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -10000px 0;
    }
}

.footer-links {
    display: flex;
    color: white;
    align-items: center;
    list-style-type: none;
    justify-content: space-between;
    position: relative;
    z-index: 3;
    min-width: 100%;
    padding: 1rem;
    

    @media screen and (min-width: 500px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
}

footer {
    position: relative;
    padding: 2rem;
    background-image: url("../assets/images/footer/BG-Gradient.png");
    background-color: black;
    background-size: contain;
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
</style>