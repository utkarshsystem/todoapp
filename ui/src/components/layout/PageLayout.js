import { Button, Container, Divider } from '@material-ui/core';
import { KeyboardBackspaceRounded } from '@material-ui/icons';
/* eslint-disable no-undef */
import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const TopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2px;
  padding-left: 3px;
  padding-right: 3px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Header = styled.div`
  width: 100%;
  font-weight: bolder;
  font-size: 1.6em;
  color: #444444;
`;

const BackButton = styled(Button)`
  margin-left: auto;
`;

const SubHeader = styled.div`
  width: 100%;
  text-transform: uppercase;
   font-weight: 500;
  font-size: 0.8em;
  color: gray;
`;

const StyledDivider = styled(Divider)`
  margin: 2px 0;
`;


const Page = ({ header, subHeader, showBackButton, alternateTitle, children, ...rest }) => {
  const title = alternateTitle || header;

  return (
    <div {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <TopContainer>
        <HeaderContainer>
          <Header>{header}</Header>
          {subHeader && <SubHeader>{subHeader}</SubHeader>}
        </HeaderContainer>
    
      </TopContainer>
      {(header || subHeader) && <StyledDivider variant="fullWidth" />}
      <Container maxWidth={false}>
        <div>{children}</div>
      </Container>
    </div>
  );
};

export default Page;
