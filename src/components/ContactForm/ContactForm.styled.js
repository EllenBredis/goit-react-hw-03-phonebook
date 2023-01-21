import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    border-radius: 4px;
      `;
  

  export const FormName=styled.h2`
    margin-top: 0;
    text-align: center;
  `;
  export const FormLabel = styled.label`
    color: #161d29;
    font-weight: 700;
    margin-left: auto;
    margin-right: auto;
  `;
  
  export const InputName= styled.input`
    margin-left: 28px;
    `;
  
  export const InputNumber= styled.input`
    margin-left: 10px;
    `;

    export const SubmitBtn = styled.button`
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    display: block;
    width: 130px;
    height: 40px;
    font-weight: bold;
    margin: 5px auto;
    text-align: center;
    padding: 1px 5px;
    color: #022524;
    border: 1px solid black;
        
  
  :hover {
    background: #bad8e8;
    color: #000;
    }
      `;