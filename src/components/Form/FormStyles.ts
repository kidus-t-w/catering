import styled from 'styled-components';

export const Form = styled.form`
  /* Add any form-specific styles if needed */
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem; /* equivalent to mb-4 */
`;

export const Label = styled.label`
  display: block; /* equivalent to block */
  color: #4a5568; /* equivalent to text-gray-700 */
`;

export const Input = styled.input`
  width: 100%; /* equivalent to w-full */
  padding: 0.5rem; /* equivalent to p-2 */
  border: 1px solid #d1d5db; /* equivalent to border-gray-300 */
  border-radius: 0.25rem; /* equivalent to rounded */
`;

export const Textarea = styled.textarea`
  width: 100%; /* equivalent to w-full */
  padding: 0.5rem; /* equivalent to p-2 */
  border: 1px solid #d1d5db; /* equivalent to border-gray-300 */
  border-radius: 0.25rem; /* equivalent to rounded */
`;

export const Button = styled.button`
  background-color: #2596be; /* equivalent to bg-green-500 */
  color: white; /* equivalent to text-white */
  padding: 0.5rem; /* equivalent to p-2 */
  border-radius: 0.25rem; /* equivalent to rounded */
  transition: background-color 0.3s;

  &:hover {
    background-color: #8c956f; /* equivalent to hover:bg-green-700 */
  }
`;