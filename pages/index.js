import Head from 'next/head';
import styled from "styled-components";

import MarkdownEditor from "../components/markdownEditor";
import HTMLEditor from '../components/htmlEditor';
import ConvertButton from "../components/convertButton"

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
`;

export default function Home() {
  return (

    <HomeContainer>

      <Head>
        <title>Mailchimp Assignment</title>
      </Head>

      <Title>Markdown => HTML Converter</Title>

      <EditorContainer>
        <MarkdownEditor />
        <ConvertButton />
        <HTMLEditor />
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

  )
}
