import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const ChatWrapper = styled.div`
  height: 900px; // min-height: 100vh nie działa jeśli parent nie ma ustawionej wysokości
  max-width: ${({ theme }) => theme.size.xl};
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-template-rows: 0.15fr 1.85fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 6px 5px -5px ${({ theme }) => theme.colors.secondary};
  margin: 20px 0;
  border-radius: 20px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 10px 10px 25px;
    min-height: unset;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const InactiveIconStyleWrapper = styled(IconStyleWrapper)`
  display: none;
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.placeholder};
  }
  &:hover {
    cursor: default;
    opacity: 1;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    display: block;
  }
`;

export const GreenIconStyleWrapper = styled(IconStyleWrapper)`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ChatHeader = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 20px;
  }
`;

export const LeftPanelWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  padding: 5px;
  width: 100%;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  min-width: 160px;
  margin: 5px 0;
  input {
    width: 60%;
    padding: 5px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSize.s};
    border: none;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: row;
    width: 100%;
    margin: 5px 0 10px;
    padding: 0 10px;
    input {
      flex-grow: 1;
      padding: 10px;
      font-size: ${({ theme }) => theme.fontSize.m};
      &::placeholder {
        font-size: ${({ theme }) => theme.fontSize.s};
      }
    }
  }
`;

export const SecondaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 50px;
  font-weight: bold;
  transition: opacity 0.5s;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.lightGrey};
    transition: 0.3s;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 5px 15px;
    max-width: 320px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const ListElementPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  font-size: 2em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ListElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 15px;
  flex-grow: 1;
  height: 100%;
  padding: 4px 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.lightGrey};
  @media ${({ theme }) => theme.breakpoints.md} {
    justify-content: space-around;
  }
`;

export const ListElementUpperRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: row;
  }
`;

export const ListElementUsername = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const ListElementWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.grey};
  min-width: 160px;
  height: 4em;
  border-radius: 10px;
  ${ListElementPhoto} {
    display: none;
  }
  ${ListElementContainer} {
    margin-left: 0;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transition: 0.3s;
    cursor: pointer;
    span {
      color: ${({ theme }) => theme.colors.grey};
    }
    ${ListElementUsername} {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-bottom: 5px;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    min-width: 240px;
    ${ListElementPhoto} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ${ListElementContainer} {
      margin-left: 15px;
    }
  }
`;

export const RightPanelWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RightPanelHeader = styled.div`
  display: flex;
  align-items: center;
  height: 5em;
  padding: 10px 10px 0;
`;

export const RightPanelHeaderContent = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  height: 4em;
`;

export const RightPanelConversation = styled.div`
  flex-grow: 1;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const RightPanelBottomWrapper = styled.div`
  height: 3em;
  display: flex;
  align-items: center;
  padding: 0 20px;
  input {
    flex-grow: 1;
    padding: 10px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.grey};
    border: none;
    font-size: ${({ theme }) => theme.fontSize.m};
    &:focus {
      outline: none;
    }
  }
`;
