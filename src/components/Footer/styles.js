import styled from 'vue-styled-components';

export const StyledFooter = styled.footer`
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    width: 100%;
    padding: 10px 8px;
    background-color: #888;
    color: #fff;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        margin-right: 2rem;

        a {
            color: #fff;
            border-bottom: 1px solid transparent;
            text-decoration: none;

            &:hover {
                border-bottom: 1px solid #fff;
                transition: all 200ms ease-in;
            }
        }
    }
`;