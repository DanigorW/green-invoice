<template>
    <div dir="rtl" id="app">
        <Navbar />
        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {
    components: {
        Navbar: () =>
            import(
                /* webpackChunkName: 'Navbar' */ "@/components/reusableComponents/navbar/Navbar.vue"
            ),
    },
};
</script>

<style lang="scss">
</style>
