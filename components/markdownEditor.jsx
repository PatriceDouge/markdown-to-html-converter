import React, { useContext } from "react";
import styled from "styled-components";

import markdownContext from "../markdownContext";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  text-align: center;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 500px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 17px;
  padding: 20px;
  resize: none;
`;

export default function MarkdownEditor() {

    const { setMarkdownText } = useContext(markdownContext)

    const handleChange = e => {
        const markdownValue = e.currentTarget.value;
        setMarkdownText(markdownValue);
    };

    return (
        <Container>
            <Title>Markdown Text</Title>
            <TextArea onChange={handleChange}/>
        </Container >
    );
}