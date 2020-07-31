import React from 'react';

import Root from '../components/layout/Root';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Testimonials from '../components/testimonials/Testimonials';
import ContactMe from '../components/contact-me/ContactMe';

const IndexPage = () => (
  <Root>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Testimonials layout="full"></Testimonials>
    <ContactMe layout="full"></ContactMe>
  </Root>
);

export default IndexPage;
