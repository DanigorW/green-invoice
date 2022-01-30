<template>
    <div>
        <Welcome />
    </div>
</template>

<script>
export default {
    components: {
        Welcome: () =>
            import(
                /* webpackChunkName: 'Welcome' */ "@/components/welcome/Welcome.vue"
            ),

        Button: () =>
            import(
                /* webpackChunkName: 'Button' */ "@/components/reusableComponents/button/Button.vue"
            ),
    },
};
</script>

<style>
</style>