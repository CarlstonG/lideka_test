<template>
    <div class="max-w-7xl mx-auto py-20">
        <div class="_living-room px-8 py-20 mb-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <h1 class="text-white text-4xl font-bold text-center">Vul je gegevens in, en ontvang 2 jaar garantie op jouw artikel van Lideka®</h1>
                <form class="space-y-4" @submit.prevent="submit">
                    <FormField
                        class="flex-1"
                        :hide-label="true"
                        name="Voer je e-mailadres in"
                        input-type="email"
                        :errors="$v.fields.email"
                        :model-value.sync="fields.email"
                    />
                    <FormField
                        class="flex-1"
                        :hide-label="true"
                        name="Voer je naam in"
                        :errors="$v.fields.name"
                        :model-value.sync="fields.name"
                    />
                    <FormField
                        class="flex-1"
                        :hide-label="true"
                        name="Voer je bestelnummer in"
                        :errors="$v.fields.order"
                        :model-value.sync="fields.order"
                    />

                    <button
                        type="submit"
                        class="block claim-btn w-full uppercase tracking-wide shadow-md py-1 px-6 border border-transparent rounded text-md text-white hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Claim je garantie
                    </button>

                    <p class="text-white text-sm">
                        Door je aan te melden, ga je akkoord met het
                        <a href="https://klantenservice.lidekahome.nl/nl-NL/privacy-statement-22829" target="_blank" rel="noopener" class="underline">privacybeleid</a>
                        en de
                        <a href="https://klantenservice.lidekahome.nl/nl-NL/articles/algemene-voorwaarden-5283" target="_blank" rel="noopener" class="underline">gebruiksvoorwaarden</a>
                    </p>
                </form>
            </div>
        </div>

        <!-- <div class="grid grid-cols-3 gap-8 mb-10">
            <div class="flex items-center flex-col">
                <img loading="lazy" src="~assets/icons/WEBicons-05.webp" alt="Makkelijk retourneren" class="w-20"/>
            </div>
            <div class="flex items-center flex-col">
                <img loading="lazy" src="~assets/icons/WEBicons-06.webp" alt="100% tevredenheidsgarantie" class="w-20"/>
            </div>
            <div class="flex items-center flex-col">
                <img loading="lazy" src="~assets/icons/WEBicons-07.webp" alt="Duurzaamheid" class="w-20"/>
            </div>
        </div>

        <h3 class="text-white text-3xl font-bold text-center">
            De LED-strip garantie geldt op de volgende producten
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-5 px-6 lg:px-0">
            <div class="bg-dark rounded-3xl p-4" style="background-color: rgb(21, 21, 21);">
                <div class="flex flex-col transition-all shadow-none rounded-lg">
                    <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0570/2352/9109/products/LK_015_1_800x800.jpg?v=1642932759" alt="Lideka - Led Light Strip - 15 Meter (2x7.5) - RGB - Zelfklevend" width="100%" height="100%" class="rounded-lg">
                    <p class="w-full text-left flex-grow flex-1 h-full block mt-2 text-white text-2xl font-bold preloaded">
                        15 meter
                    </p>
                </div>
            </div>
            <div class="bg-dark rounded-3xl p-4" style="background-color: rgb(21, 21, 21);">
                <div class="flex flex-col transition-all shadow-none rounded-lg">
                    <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0570/2352/9109/products/LK_015_1_800x800.jpg?v=1642932759" alt="Lideka - Led Light Strip - 15 Meter (2x7.5) - RGB - Zelfklevend" width="100%" height="100%" class="rounded-lg">
                    <p class="w-full text-left flex-grow flex-1 h-full block mt-2 text-white text-2xl font-bold preloaded">
                        15 meter
                    </p>
                </div>
            </div>
            <div class="bg-dark rounded-3xl p-4" style="background-color: rgb(21, 21, 21);">
                <div class="flex flex-col transition-all shadow-none rounded-lg">
                    <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0570/2352/9109/products/LK_015_1_800x800.jpg?v=1642932759" alt="Lideka - Led Light Strip - 15 Meter (2x7.5) - RGB - Zelfklevend" width="100%" height="100%" class="rounded-lg">
                    <p class="w-full text-left flex-grow flex-1 h-full block mt-2 text-white text-2xl font-bold preloaded">
                        15 meter
                    </p>
                </div>
            </div>
            <div class="bg-dark rounded-3xl p-4" style="background-color: rgb(21, 21, 21);">
                <div class="flex flex-col transition-all shadow-none rounded-lg">
                    <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0570/2352/9109/products/LK_015_1_800x800.jpg?v=1642932759" alt="Lideka - Led Light Strip - 15 Meter (2x7.5) - RGB - Zelfklevend" width="100%" height="100%" class="rounded-lg">
                    <p class="w-full text-left flex-grow flex-1 h-full block mt-2 text-white text-2xl font-bold preloaded">
                        15 meter
                    </p>
                </div>
            </div>
        </div> -->

        <div class="px-6 lg:px-0 my-10">
            <div class="mx-auto max-w-7xl py-10 px-8 default-gradient" style="border-radius: 20px;">
                <h2>
                <div class="flex items-center justify-center mb-4 lg:mb-0">
                    <h2 class="text-3xl text-white font-bold tracking-wide uppercase">Wij geloven in...</h2>
                </div>
                </h2>
                <div class="grid grid-cols-1 lg:grid-cols-3 p-0 lg:p-10 gap-6 lg:gap-0">
                <div class="flex flex-col w-full lg:w-auto items-center justify-center rounded-lg lg:mx-10 mx-0 py-4"
                    style="border-color: rgba(255, 255, 255, 0.1)"
                >
                    <div class="flex-grow items-center flex">
                    <img class="w-32" src="~assets/icon/icons8-technical-support-50.svg" alt="Service icon" />
                    </div>
                    <h3 class="text-gray-100 tracking-wide font-bold uppercase mt-4">Service</h3>
                </div>
                <div class="flex flex-col w-full lg:w-auto items-center justify-center rounded-lg lg:mx-10 mx-0 py-4"
                    style="border-color: rgba(255, 255, 255, 0.1)"
                >
                    <div class="flex-grow items-center flex">
                    <img class="w-32" src="~assets/icon/icons8-verified-account-50.svg" alt="Kwaliteit vinkje" />
                    </div>
                    <h3 class="text-gray-100 tracking-wide font-bold uppercase mt-4">Kwaliteit</h3>
                </div>
                <div class="flex flex-col w-full lg:w-auto items-center justify-center rounded-lg lg:mx-10 mx-0 py-4"
                    style="border-color: rgba(255, 255, 255, 0.1)"
                >
                    <div class="flex-grow items-center flex h-40 lg:h-auto">
                    <img class="w-32" src="~assets/icon/icons8-low-price-euro-50.svg" alt="Icon voor prijs naar beneden" />
                    </div>
                    <h3 class="text-gray-100 tracking-wide font-bold uppercase mt-4">Betaalbaarheid</h3>
                </div>
                </div>
            </div>
        </div>

        <!-- <div class="mt-10 mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-0">
            <img src="~/assets/claim.png" alt="Claim jou garantie" />
            <div>
                <h2 class="text-white text-3xl font-bold mb-4">Alles voor sfeer in huis</h2>
                <p class="text-white leading-8">
                    Lideka Home maakt het leven leuker, gezelliger en aantrekkelijker. Binnen de webshop vind je alle producten waarmee je die fijne sfeer meeneemt naar huis. Met unieke LED-verlichting creëer je zowel binnen als buiten een comfortabele omgeving; een plek waar je zelf graag bent, en waar je het liefst zit met de mensen om wie je het meest geeft. Ontdek hoe we tot onze ideeën zijn gekomen.
                </p>
            </div>
        </div> -->

        <!-- <NewsletterBlock /> -->

        <div class="mt-16">
            <SocialIcons />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {email, required} from "vuelidate/lib/validators";
import FormField from '~/components/input/FormField.vue';
import NewsletterBlock from '~/components/NewsletterBlock.vue';
import SocialIcons from '~/components/SocialIcons.vue';
import { post } from '~/services/ApiService';

export default Vue.extend({
    components: {
        FormField,
        NewsletterBlock,
        SocialIcons,
    },

    data() {
        return {
            loading: false,
            fields: {
                name: '',
                email: '',
                order: '',
            },
        };
    },

    methods: {
        async submit() {
            if (this.loading) {
                return;
            }

            this.loading = true;

            this.$v.$touch();

            if (this.$v.$invalid) {
                this.$root.$emit('addNotification', 'Niet gelukt!', 'Vul alle velden correct in', 'error')
            } else {
                try {
                    await post('/claim', {
                        ...this.fields
                    })

                    this.$v.$reset();
                    this.fields.email = '';
                    this.fields.name = '';
                    this.fields.order = '';
                    this.$root.$emit('addNotification', 'Gelukt!', 'Je garantie claim is ingediend!', '', 5000)
                } catch (err) {
                this.$root.$emit('addNotification', 'Oops.', 'Er is iets fout gegaan.', 'error')
                }

                this.loading = false;
            }
        }
    },

    head() {
        return {
            title: 'Ontvang 2 jaar garantie op jouw artikel van Lideka®'
        }
    },
    
    async mounted() {
        // @ts-ignore
        window.dataLayer = window.dataLayer || [];
        // @ts-ignore
        window.dataLayer.push({ event: "path_tracking", path: this.$route.path });
    },

    validations: {
        fields: {
            email: {
                required,
                email
            },
            name: {
                required,
            },
            order: {
                required,
            },
        },
    },
})
</script>

<style lang="scss">
button.claim-btn {
    background: linear-gradient(100.91deg, #5AB6E7 -6.75%, #8560CD 111.47%);
}
</style>
