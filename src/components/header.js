import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import PageNav from './PageNav'
import Branding from './branding'
import ThemeSelect from './ThemeSelect'

import { media } from '../theme/globalStyle'
import { PATTERNS } from '../theme/themeConstants'

const StyledHeader = styled.div`
  /* margin: 0 auto; */
  /* padding: 1rem; */
  width: 100%;
  grid-area: h;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas: '. . . t t . n n n . . .';
  ${media.giant`
    grid-template-areas:
      '. . t t t t n n n n . .';
    /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-areas:
      '. . t t t t n n n n . .';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      '. t t t t t t n .';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      't t t t t t n n n';
    /* background: palevioletred; */
  `};
  /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [color]; */
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.theme.primary};
  background-image: url("${PATTERNS.TOPOGRAPHY}");
`

const SiteTitle = styled.h1`
  grid-area: t;
  margin: 1rem;
  padding: 1rem;
  color: ${props => props.theme.fontWhite};
`

const SiteLink = styled(Link)`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${props => props.theme.secondary};
  }
`

const Header = (/*{ siteTitle }*/) => (
  <StyledHeader>
    <SiteTitle>
      {/* {siteTitle} */}
      <SiteLink to="/">
        <Branding size={4} />
      </SiteLink>
    </SiteTitle>
    <ThemeSelect />
    <PageNav />
  </StyledHeader>
)

export default Header