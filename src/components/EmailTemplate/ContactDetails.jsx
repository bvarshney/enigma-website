import React from "react";
import { Body, Column, Container, Head, Hr, Html, Img, Link, Preview, Row, Section, Text} from "@react-email/components";

const ContactDetails = ({ userName, userEmail, userNumber, userMessage }) => (
    <Html>
      <Head />
      <Preview>
        Someone just filled Contact Details on Enigma Website.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={"https://weareenigma.com/enigma-logo.png"}
            width="170"
            height="50"
            alt="Enigma"
            style={logo}
          />
          <Text style={paragraph}>Hi Bhaskar,</Text>
          <Text style={paragraph}>
            You have a new contact form submission on the Enigma website. 
            <br />
            Below are the details.
          </Text>
          <Section>
            <Row style={row}>
              <Column style={columnHead}>Name</Column>
              <Column style={columnText}>{userName}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Email</Column>
              <Column style={{...columnText, textDecoration: "underline", color: "#067df7"}}>{userEmail}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Number</Column>
              <Column style={columnText}>{userNumber}</Column>
            </Row>
            <Row style={rowLast}>
              <Column style={columnHead}>Message</Column>
              <Column style={columnText}>{userMessage}</Column>
            </Row>
          </Section>
          <Text style={footer}>
            This form is submitted from <Link href="https://weareenigma.com/get-in-touch"> Contact Page.</Link>
          </Text>
          <Text style={paragraph}>
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

export default ContactDetails;
  
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

const row = {
  borderLeft: "1px solid #f2f2f2",
  borderRight: "1px solid #f2f2f2",
  borderTop: "1px solid #f2f2f2",
}

const rowLast = {
  border: "1px solid #f2f2f2"
}

const columnHead = {
  textAlign: "left",
  fontSize: "16px",
  lineHeight: "26px",
  fontWeight: "500",
  width: "120px",
  padding: "10px 15px",
  borderRight: "1px solid #f2f2f2",
};

const columnText = {
  textAlign: "left",
  fontSize: "15px",
  lineHeight: "26px",
  padding: "10px 15px",
  color: "#6a6a6a"
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};