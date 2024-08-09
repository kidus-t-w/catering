import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    background-color: #8c956f;
    color: #fff;
    text-align: center;
    margin: 0 auto;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
`;

export const LogoSection = styled.div`
  flex: 1;
    h2 {
        font-family: 'Serif', serif;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        margin-bottom: 1rem;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;

export const SocialIcon = styled.a`
    font-size: 1.5rem;
    color: #333;
    text-decoration: none;

    &:hover {
        color: #000;
    }
`;

export const LinksSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;


    @media (min-width: 768px) {
        flex-direction: row;
        gap: 3rem;
    }
`;

export const LinksColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h4 {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    a {
        color: #fff;
        text-decoration: none;
        font-size: 0.875rem;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const ContactInfo = styled.div`
    a {
        color: #fff;
        text-decoration: none;
        font-size: 0.875rem;

        &:hover {
            text-decoration: underline;
        }
    }

    p {
        font-size: 0.875rem;
        margin: 0.5rem 0;
    }
`;
