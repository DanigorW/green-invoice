<template>
    <div>
        <Hero />
    </div>
</template>

<script >
export default {
    components: {
        Hero: () =>
            import(
                /* webpackChunkName: 'Hero' */ "../components/homePage/Hero.vue"
            ),
    },
};
</script>
