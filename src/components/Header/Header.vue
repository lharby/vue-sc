<template>
    <StyledHeader>
        <ul>
            <li 
                v-for="item in navItems" 
                :key="item.id"
            >
                <a 
                    :href="`/${item.link}/`" 
                    :class="item.className"
                    @click="event => {
                        event.preventDefault(),
                        $emit('handleClick', event)
                    }"
                >
                    {{ item.name }}
                </a>
            </li>
        </ul>
    </StyledHeader>
</template>

<script>
    import { StyledHeader } from './styles';
    import navData from '../../data/navData.json';

    export default {
        name: 'Header',
        components: {
            StyledHeader
        },
        data() {
            return {
                navItems: navData
            }
        }
    }
</script>
