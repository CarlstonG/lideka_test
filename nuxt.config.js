import {sortRoutes} from '@nuxt/utils'
import axios from "axios";
import { getSitemap } from './services/GqlService';

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
            

    server: {
        host: '0.0.0.0'
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Lideka Home - Kwaliteit Led-en Solar artikelen',
        htmlAttrs: {
            lang: 'nl'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'},
            {property: 'og:locale', content: 'nl_NL'},
            {hid: 'og:type', property: 'og:type', content: 'website'},
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap'
            },
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script: [
            {
              hid: 'gtm',
              innerHTML: `window.dataLayer = window.dataLayer || [];`,
              type: 'text/javascript'
            }
          ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/globalStyle.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/jsonld',
        '~/plugins/vuelidate.js',
        {
            src: '~/plugins/vue-nl2br.js',
            mode: 'client'
        }, 
        {
            src: '~/plugins/vue-carousel.js', 
            mode: 'client'
        }, 
        { src: '~/plugins/vue-switches', ssr: false },
        '~/plugins/gtm'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: false,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        'nuxt-use-motion',
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/pwa',
        '@aceforth/nuxt-optimized-images',
        '@/plugins/generator',
        '@nuxtjs/device',
    ],

    motion: {
        directives: {
            'fade-up': {
                initial: {
                    opacity: 0,
                    y: 50
                },
                visible: {
                    opacity: 1,
                    y: 0
                },
            }
        }
    },

    sitemap: {
        hostname: 'https://lidekahome.nl',
        gzip: true,
        exclude: [
            
            '/winkelwagen',
            '/sso',
            '/contact',
            '/blog',
            '/veelgestelde-vragen',
            '/account/*',
            '/klantenservice',
            '/auth/sso',
            '/cart',
            '/team'
        ],
        routes: ([
         
            '/categorie/led-strips',
            '/categorie/solar-tuinverlichting',
            '/categorie/solar-powerbank',
            '/categorie/accessoires',
            '/categorie/tv-led-strips',
            '/categorie/rgb-ic-led-strips',
            '/categorie/rgb-led-strips',
            '/categorie/led-pakketten',
            '/categorie/led-strip-slaapkamer',
            '/categorie/led-strip-woonkamer',
            '/categorie/led-strip-keuken',
            '/categorie/led-strip-gamekamer',
            '/categorie/led-strip-bed',
            '/categorie/led-strip-badkamer',
            '/categorie/led-strip-plafond',
            '/categorie/led-strip-met-afstandsbediening',
            '/categorie/led-strip-2-meter',
            '/categorie/led-strip-3-meter',
            '/categorie/led-strip-5-meter',
            '/categorie/led-strip-10-meter',
            '/categorie/led-strip-15-meter',
            '/categorie/led-strip-20-meter',
            '/categorie/led-strips-dimbaar',
            '/categorie/led-strip-met-afstandsbediening',

            '/products/rgb-led-light-strip-10-meter-tv-strip-3m-combinatie-pakket',
            '/products/rgb-led-light-strip-5-meter-tv-strip-2m-combinatie-pakket',
            '/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge',
            '/products/lideka-solar-tuinfakkel-set-van-2',
            '/products/lideka-solar-wandlamp-set-van-2',
            '/products/lideka-solar-led-lantaarn-set-van-2',
            '/products/lideka-solar-tafellamp-mozaiek',
            '/products/lideka-solar-led-maanlamp-set-van-2-2',
            '/products/lideka-solar-led-gazonlamp-set-van-2-3',
            '/products/lideka-tv-led-strip-3-meter-usb-rgb-smart-verlichting',
            '/products/lideka-tv-led-strip-2-meter-usb-rgb-smart-verlichting',
            '/products/rgb-led-light-strip-20-meter-smart-verlichting',
            '/products/rgb-led-light-strip-15-meter-smart-verlichting',
            '/products/rgb-led-light-strip-3-meter-smart-verlichting',
            '/products/rgb-led-light-strip-10-meter-smart-verlichting',
            '/products/rgb-led-light-strip-5-meter-smart-verlichting',
            '/products/rgb-ic-led-light-strip-5-meter-smart-verlichting',
            '/products/rgb-ic-led-light-strip-10-meter-smart-verlichting',
            '/products/adapter-2-5a-12v-30w',

            '/blog/led-strip-knippen-hier-moet-je-op-letten-lideka',
            '/blog/ip-rating-bij-led-strips-wat-betekent-ip65-lideka',
            '/blog/tv-led-strips-een-nieuwe-vorm-van-televisie-kijken',
            '/blog/led-verlichting-in-de-tuin',
            '/blog/de-levensduur-van-led-verlichting',
            '/blog/alles-over-led-verlichting-als-sfeerverlichting',
            '/blog/welke-functies-kun-je-led-verlichting-meegeven',
            '/blog/tv-led-strips-decoratief-en-rustig-voor-de-ogen',
            '/blog/led-verlichting-in-de-slaapkamer',
            '/blog/led-verlichting-in-de-badkamer',
            '/blog/waar-kan-je-led-strips-het-beste-plaatsen',
            '/blog/kan-je-de-kleur-van-led-verlichting-wijzigen',
            '/blog/wat-zijn-de-nadelen-van-led-strips',
            '/blog/hoe-werkt-led-verlichting',
            '/blog/wat-is-led',
            '/blog/wat-zijn-de-voordelen-van-led-strips',
            '/blog/wat-zijn-de-voordelen-van-led-strips',
            '/blog/hoe-sluit-ik-mijn-led-strips-aan',
            '/blog/led-verlichting',
            '/blog/welke-kleuren-led-strips-zijn-er',
            '/blog/7-technologie-trends-in-2021',
            '/blog/domotica-automatisering-in-huis',
            '/blog/led-strips-hoe-gebruik-je-ze',
            '/blog/solar-tuinverlichting',
            '/blog/dit-is-een-blog'
        ].map((item) => {
            return {
                url: item,
                changefreq: 'daily',
                priority: 1,
                lastmod: new Date(),
            }
        })),
        defaults: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        }
    },

    optimizedImages: {
        optimizeImages: true
    },

    tailwindcss: {
        configPath: 'tailwind.config.js',
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/gtm',
        '@nuxt/image',
        'nuxt-shopify',
        '@luxdamore/nuxt-prune-html',
        'nuxt-precompress',
        '@nuxtjs/sitemap',
        ['@nuxtjs/component-cache', {maxAge: 1000 * 60 * 60}],
    ],

    gtm: {
        id: process.env.GTM,
        pageTracking: true,
    },

    image: {
        domains: ['https://cdn.shopify.com', 'https://lidekahome.nl'],
        provider: 'ipx',
        imgix: {
            baseURL: 'https://lideka-home.imgix.net'
        },
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536
        },
    },

    nuxtPrecompress: {
        enabled: true, // Enable in production
        report: false, // set true to turn one console messages during module init
        test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
        // Serving options
        middleware: {
            // You can disable middleware if you serve static files using nginx...
            enabled: true,
            // Enable if you have .gz or .br files in /static/ folder
            enabledStatic: true,
            // Priority of content-encodings, first matched with request Accept-Encoding will me served
            encodingsPriority: ['br', 'gzip'],
        },

        // build time compression settings
        gzip: {
            // should compress to gzip?
            enabled: true,
            // compression config
            // https://www.npmjs.com/package/compression-webpack-plugin
            filename: '[path].gz[query]', // middleware will look for this filename
            threshold: 10240,
            minRatio: 0.8,
            compressionOptions: {level: 9},
        },
        brotli: {
            // should compress to brotli?
            enabled: true,
            // compression config
            // https://www.npmjs.com/package/compression-webpack-plugin
            filename: '[path].br[query]', // middleware will look for this filename
            compressionOptions: {level: 11},
            threshold: 10240,
            minRatio: 0.8,
        },
    },

    pruneHtml: {
        enabled: true, // `true` in production
        hideGenericMessagesInConsole: false, // `false` in production
        hideErrorsInConsole: false, // deactivate the `console.error` method
        hookRenderRoute: true, // activate `hook:render:route`
        hookGeneratePage: true, // activate `hook:generate:page`
        selectors: [
            // CSS selectors to prune
            'link[rel="preload"][as="script"]',
            'script:not([type="application/ld+json"])',
        ],
        classesSelectorsToKeep: [], // disallow pruning of scripts with this classes, n.b.: each `classesSelectorsToKeep` is appended to every `selectors`, ex.: `link[rel="preload"][as="script"]:not(__classesSelectorsToKeep__)`
        link: [], // inject custom links, only if pruned
        script: [], // inject custom scripts, only if pruned
        htmlElementClass: null, // a string added as a class to the <html> element if pruned
        cheerio: {
            // the config passed to the `cheerio.load(__config__)` method
            xmlMode: false,
        },
        types: [
            // it's possibile to add different rules for pruning
            'default-detect',
        ],

        // 👇🏻 Type: `default-detect`
        headerNameForDefaultDetection: 'user-agent', // The `header-key` base for `MobileDetection`, usage `request.headers[ headerNameForDefaultDetection ]`
        auditUserAgent: 'lighthouse', // prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings
        isAudit: true, // remove selectors if match with `auditUserAgent`
        isBot: true, // remove selectors if is a bot
        ignoreBotOrAudit: false, // remove selectors in any case, not depending on Bot or Audit
        matchUserAgent: null, // prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings

        // 👇🏻 Type: 'query-parameters'
        queryParametersToPrune: [
            // array of objects (key-value)
            // trigger the pruning if 'query-parameters' is present in `types` and at least one value is matched, ex. `/?prune=true`
            {
                key: 'prune',
                value: 'true',
            },
        ],
        queryParametersToExcludePrune: [], // same as `queryParametersToPrune`, exclude the pruning if 'query-parameters' is present in `types` and at least one value is matched, this priority is over than `queryParametersToPrune`

        // 👇🏻 Type: 'headers-exist'
        headersToPrune: [], // same as `queryParametersToPrune`, but it checks `request.headers`
        headersToExcludePrune: [], // same as `queryParamToExcludePrune`, but it checks `request.headers`, this priority is over than `headersToPrune`

        // Emitted events for callbacks methods
        onBeforePrune: null, // ({ result, [ req, res ] }) => {}, `req` and `res` are not available on `nuxt generate`
        onAfterPrune: null, // ({ result, [ req, res ] }) => {}, `req` and `res` are not available on `nuxt generate`
    },


    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        cache: true
    },

    shopify: {
        domain: process.env.SHOPIFY_DOMAIN,
        storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        unoptimized: false
    },

    env: {
        shopifyDomain: process.env.SHOPIFY_DOMAIN,
        shopifyAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        shopifyGraphql: process.env.SHOPIFY_GRAPHQL,
        rocksolidApiKey: process.env.ROCKSOLID_API_KEY,
        rocksolidApiUrl: process.env.ROCKSOLID_API_URL,
        shopifyCheckoutDomain: process.env.SHOPIFY_CHECKOUT_DOMAIN,
        graphqlClient: process.env.GRAPHQL_CLIENT,
    },

    serverMiddleware: [{
        path: '/',
        handler: async (req, res, next) => {
            if (req.url.match("/shop")) {
                res.writeHead(301, {Location: req.url.replace("/shop", "/")})
                res.end();
            }

            if (req.url.match("/categorie/plafond")) {
                res.writeHead(301, {Location: req.url.replace("/plafond", "/led-strip-plafond")})
                res.end();
            }

            if (req.url.match("/categorie/woonkamer")) {
                res.writeHead(301, {Location: req.url.replace("/woonkamer", "/led-strip-woonkamer")})
                res.end();
            }

            if (req.url.match("/categorie/slaapkamer")) {
                res.writeHead(301, {Location: req.url.replace("/slaapkamer", "/led-strip-woonkamer")})
                res.end();
            }

            if (req.url.match("/categorie/keuken")) {
                res.writeHead(301, {Location: req.url.replace("/keuken", "/led-strip-keuken")})
                res.end();
            }

            if (req.url.match("/categorie/gamekamer")) {
                res.writeHead(301, {Location: req.url.replace("/gamekamer", "/led-strip-gamekamer")})
                res.end();
            }

            if (req.url.match("/categorie/badkamer")) {
                res.writeHead(301, {Location: req.url.replace("/badkamer", "/led-strip-badkamer")})
                res.end();
            }

            if (req.url.match("/categorie/bed")) {
                res.writeHead(301, {Location: req.url.replace("/bed", "/led-strip-bed")})
                res.end();
            }

            if (req.url.match("/solar-fonteinen")) {
                res.writeHead(301, {Location: req.url.replace("/solar-fonteinen", "/categorie/solar-tuinverlichting")})
                res.end();
            }

            if (req.url.match("/contact")) {
                res.writeHead(301, {location: 'https://klantenservice.lidekahome.nl/nl-NL'});
                res.end();
            }

            if (req.url === '/claim') {
                res.writeHead(301, {Location: req.url.replace("/claim", "/claim-je-garantie")})
                res.end();
            }

            if (req.url.match('/products/lideka-solar-powerbank-solar-charger-de-ultieme-combinatie-30-000-mah-powerbank-zeer-effieciente-solar-charger-iphone-samsung-apple')) {
                res.writeHead(301, {Location: req.url.replace("lideka-solar-powerbank-solar-charger-de-ultieme-combinatie-30-000-mah-powerbank-zeer-effieciente-solar-charger-iphone-samsung-apple", "lideka-solar-powerbank-solar-charger-de-ultieme-combinatie")})
                res.end();
            }

            if (req.url.startsWith('/account/login')) {
                res.writeHead(301, {Location: (`https://${process.env.SHOPIFY_CHECKOUT_DOMAIN}/account/login${(req.url.replace('/account/login', ''))}`)});
                res.end();
            }

            if (req.url.match('/checkouts')) {
                res.writeHead(301, {Location: (`https://${process.env.SHOPIFY_CHECKOUT_DOMAIN}${req.url}`)});
                res.end();
            }

            if (req.url.match('/orders')) {
                res.writeHead(301, {Location: (`https://${process.env.SHOPIFY_CHECKOUT_DOMAIN}${req.url}`)});
                res.end();
            }

            if (req.url.startsWith('/account/register')) {
                res.writeHead(301, {Location: (`https://${process.env.SHOPIFY_CHECKOUT_DOMAIN}/account/register${(req.url.replace('/account/register', ''))}`)});
                res.end();
            }

            if (req.url.startsWith('/account/activate')) {
                res.writeHead(301, {Location: (`https://${process.env.SHOPIFY_CHECKOUT_DOMAIN}/account/activate${(req.url.replace('/account/activate', ''))}`)});
                res.end();
            }

            if (req.url.startsWith('/account/logout')) {
                res.writeHead(301, {Location: (`https://${process.env.SHOPIFY_CHECKOUT_DOMAIN}/account/logout${(req.url.replace('/account/logout', ''))}`)});
                res.end();
            }

            if (req.url.startsWith('/account/reset')) {
                res.writeHead(301, {Location: (`https://${process.env.SHOPIFY_CHECKOUT_DOMAIN}/account/reset${(req.url.replace('/account/reset', ''))}`)});
                res.end();
            }

            if (req.url.match("/pages\/")) {
                res.writeHead(301, {Location: req.url.replace("pages/", "")})
                res.end();
            }

            if (req.url.match("/collections\/")) {
                res.writeHead(301, {Location: req.url.replace("collections/", "categorie/")})
                res.end();
            }

            if (req.url.match("/products/lideka-rgb-smart-tv-led-light-strip-2-meter-met-smart-app")) {
                res.writeHead(301, {Location: req.url.replace("lideka-rgb-smart-tv-led-light-strip-2-meter-met-smart-app", "lideka-tv-led-strip-2-meter-usb-rgb-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/lideka-rgb-smart-tv-led-light-strip-3-meter-met-smart-app")) {
                res.writeHead(301, {Location: req.url.replace("lideka-rgb-smart-tv-led-light-strip-3-meter-met-smart-app", "lideka-tv-led-strip-3-meter-usb-rgb-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/lideka-rgb-led-light-strip-3-meter")) {
                res.writeHead(301, {Location: req.url.replace("lideka-rgb-led-light-strip-3-meter", "rgb-led-light-strip-3-meter-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/led-strip-5-meter")) {
                res.writeHead(301, {Location: req.url.replace("led-strip-5-meter", "rgb-led-light-strip-5-meter-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/led-strip-10-meter")) {
                res.writeHead(301, {Location: req.url.replace("led-strip-10-meter", "rgb-led-light-strip-10-meter-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/lideka-rgb-led-light-strip-15-meter")) {
                res.writeHead(301, {Location: req.url.replace("lideka-rgb-led-light-strip-15-meter", "rgb-led-light-strip-15-meter-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/lideka-rgb-led-light-strip-20-meter")) {
                res.writeHead(301, {Location: req.url.replace("lideka-rgb-led-light-strip-20-meter", "rgb-led-light-strip-20-meter-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/lideka-led-strip-3-meter-tv-strip-2m-compleet-pakket-incl-app")) {
                res.writeHead(301, {Location: req.url.replace("lideka-led-strip-3-meter-tv-strip-2m-compleet-pakket-incl-app", "rgb-led-light-strip-15-meter-tv-strip-3m-combinatie-pakket-1")})
                res.end();
            }

            if (req.url.match("/products/lideka-rgb-led-light-strip-6-meter-tv-led-strip-2-meter")) {
                res.writeHead(301, {Location: req.url.replace("lideka-rgb-led-light-strip-6-meter-tv-led-strip-2-meter", "rgb-led-light-strip-5-meter-tv-strip-2m-combinatie-pakket")})
                res.end();
            }

            if (req.url.match("/products/lideka-rgb-led-light-strip-12-meter-2x6-tv-led-strip-3-meter")) {
                res.writeHead(301, {Location: req.url.replace("lideka-rgb-led-light-strip-12-meter-2x6-tv-led-strip-3-meter", "rgb-led-light-strip-10-meter-tv-strip-3m-combinatie-pakket")})
                res.end();
            }

            if (req.url.match("/products/copy-of-lideka-led-strip-15-3x5-meter-tv-strip-3m-compleet-pakket-incl-app")) {
                res.writeHead(301, {Location: req.url.replace("copy-of-lideka-led-strip-15-3x5-meter-tv-strip-3m-compleet-pakket-incl-app", "rgb-led-light-strip-15-meter-tv-strip-3m-combinatie-pakket")})
                res.end();
            }

            if (req.url.match("/products/lideka-led-strip-20-4x5-meter-tv-strip-3m-compleet-pakket-incl-app")) {
                res.writeHead(301, {Location: req.url.replace("lideka-led-strip-20-4x5-meter-tv-strip-3m-compleet-pakket-incl-app", "rgb-led-light-strip-20-meter-tv-strip-3m-combinatie-pakket")})
                res.end();
            }

            if (req.url.match("/products/led-strip-5-meter-1-meter-van-lideka-rgb")) {
                res.writeHead(301, {Location: req.url.replace("led-strip-5-meter-1-meter-van-lideka-rgb", "rgb-ic-led-light-strip-5-meter-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/led-strip-10-meter-2-meter-van-lideka-rgb")) {
                res.writeHead(301, {Location: req.url.replace("led-strip-5-meter-1-meter-van-lideka-rgb", "rgb-ic-led-light-strip-10-meter-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/lideka-solar-powerbank-30-000-mah-usb-c-waterdicht-4-usb-poorten-zonneenergie")) {
                res.writeHead(301, {Location: req.url.replace("lideka-solar-powerbank-30-000-mah-usb-c-waterdicht-4-usb-poorten-zonneenergie", "solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge")})
                res.end();
            }

            if (req.url.match('sitemap.xml')) {
               const sitemap = await getSitemap();

               let result = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;

                for (const item of sitemap) {
                    result += `<url>
                        <loc>${item.attributes.url}</loc>
                        <lastmod>${item.attributes.lastmod}</lastmod>
                        <priority>${item.attributes.priority}</priority>
                        <changefreq>${item.attributes.changefreq}</changefreq>
                    </url>`;
                }
                result += `</urlset>`;
                res.writeHead(200, {
                    'Content-Type': 'application/xml',
                });
               res.end(result);
            }

            next();
        }
    }],

    router: {
        linkPrefetchedClass: 'preloaded',

        extendRoutes(routes, resolve) {
            routes.push({
                name: 'winkelwagen',
                path: '/winkelwagen',
                component: resolve(__dirname, 'pages/cart.vue')
            })

            routes.push({
                name: 'activate',
                path: '/account/activate/:activationToken/:userId',
                component: resolve(__dirname, 'pages/account/activate.vue')
            })

            routes.push({
                name: 'reset',
                path: `/account/reset/:activationToken/:userId`,
                component: resolve(__dirname, 'pages/account/reset.vue')
            })

            sortRoutes(routes)
        }
    },
    loading: '~/components/Preloader.vue',
}
