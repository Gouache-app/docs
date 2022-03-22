import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 800px;
  margin: 8rem auto;
`;

const HeroPar = styled.p`
  line-height: 1.5;
  font-size: 20px;
`;

export const AccentSpan = styled.span`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, #ff338e 0%, #1c01ff 100%);
`;

const StyledLink = styled(Link)`
  border-radius: 8px;
  padding: 0 16px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: min-content;
`

const HeroTitle = styled.h1`
 font-size: 48px;
`;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <HeaderWrapper>
      <div className="container">
        <HeroTitle>Enhance your design to production <AccentSpan>workflow.</AccentSpan></HeroTitle>
        <HeroPar>The Gouache Design Data Platform will help you collaborate, prototype, uniformise your apps from design to production.</HeroPar>
        <div>
          <StyledLink
            className="button button--primary button--lg"
            to="/docs/intro">
            Let's dive in the docs!
          </StyledLink>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title} Docs | Design data platform`}
      description="The Gouache Design Data Platform will help you collaborate, prototype, uniformise your apps from design to production.">
      <HomepageHeader />
    </Layout>
  );
}
