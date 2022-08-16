<template>
    <StyledFooter>&copy; Luke Harby {{ year }}</StyledFooter>
</template>

<script>
    import { StyledFooter } from './styles';

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
        }
    }
</script>
