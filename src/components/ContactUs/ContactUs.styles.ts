import styled from 'styled-components';

export const ContactUsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 15px;
  }
`;

export const TestimonialSection = styled.div`
  background-color: #2f5d6c;
  color: #fff;
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  margin-right: 20px;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;



export const ContactFormSection = styled.div`
  flex: 1;
  padding: 50px;
  background-color: #f8f8f8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 40px;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;

  span {
    color: #2f5d6c;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: #3578e5;
    outline: none;
  }
`;

export const FormTextArea = styled.textarea`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;

  &:focus {
    border-color: #3578e5;
    outline: none;
  }
`;

export const FormButton = styled.button`
  padding: 15px;
  background-color: #2f5d6c;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0a5d6c;
  }
`;

export const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    color: #333;
    font-size: 20px;

    &:hover {
      color: #000;
    }
  }
`;
