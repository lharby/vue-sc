<template>
    <StyledFooter>
        &copy; AKQA {{ year }}
        <ul>
            <li
                v-for="item in navItems.data"
                :key="item.id"
            >
                <a
                    :href="item.link"
                    :class="item.className"
                >
                    {{ item.name }}
                </a>
            </li>
        </ul>    
    </StyledFooter>
</template>

<script>
    import axios from 'axios';
    import { StyledFooter } from './styles';
    const url = '/footerLinksData.json';

    export default {
        name: 'Footer',
        components: {
            StyledFooter,
        },
        props: {
            year: {
                type: Number,
                default: new Date().getFullYear()
            }
        },
        data() {
            return {
                navItems: {}
            }
        },
        mounted() {
            axios
                .get(url)
                .then(data => this.navItems = data)
                .catch(error => console.error(error));
        }
    }
</script>
