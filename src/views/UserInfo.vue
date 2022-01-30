<template>
    <UserInfo />
</template>

<script>
export default {
    components: {
        UserInfo: () =>
            import(
                /* webpackChunkName: 'UserInfo' */ "@/components/userInfo/UserInfo.vue"
            ),
    },
};
</script>

<style>
</style>