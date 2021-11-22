import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "var(--primary)" : "white"};
  color: ${props => props.primary ? "white" : "var(--primary)"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--secondary);
  border-radius: 3px;

  :hover{
      background: var(--highlight);
  }
`;

export default Button;