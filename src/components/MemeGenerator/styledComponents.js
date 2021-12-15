import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const ContentContainer = styled.div`
  width: 80%;
  max-width: 1110px;
`

export const Heading = styled.h1`
  font-size: 22px;
  font-weight: 700;
  font-family: 'Open Sans';
  color: #35469c;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 36px;
  }
`
export const MemeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const MemePage = styled.div`
  background-image: ${props => `url(${props.url})`};
  width: 100%;
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  order: 1;
  min-height: 200px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 46%;
    order: 2;
  }
`
export const MemeText = styled.p`
  font-size: ${props => props.fontSize}px;
  font-weight: 600;
  font-family: 'Open Sans';
  color: #ffffff;
  text-align: center;
`

export const MemeForm = styled.form`
  width: 100%;
  order: 2;
  @media screen and (min-width: 768px) {
    width: 46%;
    order: 1;
  }
`

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const Input = styled.input`
  font-size: 12px;
  font-weight: 400;
  font-family: 'Open Sans';
  color: ${props => (props.isSelect ? '#1e293b' : '#5a7184')};
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  padding: 8px;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 400;
  font-family: 'Open Sans';
  color: #7e858e;
  margin-bottom: 6px;
`

export const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Open Sans';
  color: #ffffff;
  background-color: #0b69ff;
  padding: 9px;
  padding-left: 16px;
  padding-right: 16px;
  border: none;
  border-radius: 4px;
`
