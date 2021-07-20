import Head from 'next/head';
import React, { useState } from "react";
import styled from "styled-components";

import MarkdownEditor from "../components/MarkdownEditor";
import HtmlResult from '../components/HtmlResult';
import MarkdownConverter from '../components/MarkdownConverter';

import markdownContext from '../markdownContext';
import htmlContext from '../htmlContext';

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  display: inline-block;
  padding: 5px;
  border: 1px solid #FFFFFF;
  margin: 70px 2px 2px 0;
  border-radius: 5px;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: #FFFFFF;
  text-align: center;
  transition: all 0.2s;
  background-color: #072F5F; 
  height: 60px;

  &:hover {
    opacity: 0.8;
  }
`;

export default function Home() {

  const [markdownText, setMarkdownText] = useState("");
  const [htmlResult, setHtmlResult] = useState("");

  const markdownContextValue = {
    markdownText,
    setMarkdownText,
  }

  const htmlContextValue = {
    htmlResult,
    setHtmlResult
  }

  const handleSubmit = e => {
    e.preventDefault();
    const htmlResult = MarkdownConverter.convertMarkdownToHtml(markdownText);
    setHtmlResult(htmlResult);
  };

  return (

    <markdownContext.Provider value={markdownContextValue}>
      <htmlContext.Provider value={htmlContextValue}>
        <HomeContainer>
          <Head>
            <title>Mailchimp Assignment</title>
          </Head>

          <Title>Markdown => HTML Converter</Title>

          <EditorContainer>
            <MarkdownEditor />
            <form onSubmit={handleSubmit}>
              <Button type="submit">Convert to HTML</Button>
            </form>
            <HtmlResult />
          </EditorContainer>


          <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }

            * {
              box-sizing: border-box;
            }
        `}</style>

        </HomeContainer>
      </htmlContext.Provider>
    </markdownContext.Provider>

  )
}
