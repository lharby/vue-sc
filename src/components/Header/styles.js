import styled from "vue-styled-components";

export const StyledHeader = styled.div`
    color: #444;
    background-color: #f0f0f0;
    padding: 10px 8px;

    ul {
        list-style:none;
        display: flex;
        margin: 0;
        padding: 20px 0;

        li {
            a {
                transition: all 200ms ease-in;
                padding: 20px;
                text-decoration: none;
                border-radius: 100px;
                color: green;

                &:hover,
                &.active {
                    background-color: #DDEEDD;
                    color: #333;
                }
            }
        }
    }
`;