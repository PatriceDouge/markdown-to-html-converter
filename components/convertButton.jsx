import React, { useContext } from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: #008CBA; /* Green */
    border: none;
    color: white;
    padding: 0px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    height: 40px;
    width: 100px;
`;

export default function ConvertButton() {

    return (
        <Button>
            Convert to HTML
        </Button>
    );
}