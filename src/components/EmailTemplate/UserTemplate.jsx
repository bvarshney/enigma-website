import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  export const UserTemplate= ({ userName }) => (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={"https://weareenigma.com/enigma-new.png"}
            width="170"
            height="50"
            alt="Enigma"
            style={logo}
          />
          <Text style={paragraph}>Hi {userName},</Text>
          <Text style={paragraph}>
            Welcome to Koala, the sales intelligence platform that helps you
          uncover qualified leads and close deals faster.
          </Text>
          <Text style={paragraph}>
            Best,
            <br />
            - Team Enigma
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Suite # 301, Grandslam Ithum Tower A, A - 40, Sector 62, Noida, Uttar Pradesh 201309
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default UserTemplate;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };