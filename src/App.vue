<template>
    <div id="app">
        <Header @handleClick="handleClick" />
        <div class="contents">
            <span>Greeting: {{ message }}</span>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from './components/Header/Header';
    import Footer from './components/Footer/Footer';

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        },
        props: {
            message: {
                type: String,
                default: 'Hello user'
            },
        },
        methods: {
            handleClick(event) {
                console.log(event.target.href);
            }
        }
    }
</script>

<style lang="scss">
    @import './app/scss/main.scss';

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .contents {
        padding: 10px 25px;
        margin-top: 25px;
    }
</style>