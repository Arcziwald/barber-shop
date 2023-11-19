import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  background: ${({ theme }) => theme.colors.white};
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  transition: transform 0.3s ease;
  transform-origin: center;
  border: none;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 8px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
  }
`;

export const Title = styled.span`
  font-size: 40px;
  font-weight: 600;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 16px;
  }
`;

export const Message = styled.div`
  /* Dodaj stylizację dla wiadomości */
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;
  margin-top: 8px;
  line-height: 130%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Ustaw szerokość na 100% */
`;

export const FormSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 8px;
  margin-top: 8px;
  margin-right: 20px;
  line-height: 130%;
`;

export const Input = styled.input`
  border-radius: 15px;
  margin-bottom: 16px;
  height: 35px;
  width: auto;
  width: 250px;
`;

export const DateAndTimeWrapper = styled.div`
  /* Dodaj stylizację dla wrappera daty i godziny */
`;

export const DateInput = styled(Input)`
  /* Dodaj stylizację dla pola daty */
  width: 120px;
  text-align: center;
`;

export const TimeInput = styled(Input)`
  /* Dodaj stylizację dla pola godziny */
  width: 80px;
  text-align: center;
`;

export const Select = styled.select`
  /* Dodaj stylizację dla pola wyboru */
  border-radius: 15px;
  margin-bottom: 16px;
  height: 35px;
  width: auto;
  width: 250px;
`;

export const Textarea = styled.textarea`
  margin-bottom: 16px;
  height: 100px;
  width: 500px;
`;

export const Button = styled.button`
  margin-bottom: 16px;
  font-size: 20px;
  border-radius: 15px;
  width: 200px;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  &:hover {
    transform: scale(115%);
    cursor: pointer;
  }
`;
