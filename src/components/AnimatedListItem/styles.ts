import { styled } from "@linaria/react";

const ListItem = styled.div`
  width: 100%;
  min-height: 52px;
  border-radius: 4px;
  background-color: #3e3e3e;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  transition: all 0.3s ease;
  .item {
    font-family: "IBM Plex Mono", monospace;
    color: pink;
    font-weight: 600;
  }

  .animated-icon {
    transition: all 350ms ease;
  }

  .animated-icon:hover {
    transform: scale(1.2);
  }
`;

export { ListItem };
