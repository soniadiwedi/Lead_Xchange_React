import React from 'react'
import Hero from './Hero'
import { Category } from './Category'
import { Vertual } from './Vertual'
import { Connection } from './Connection';
import { Investment } from './Investment';
import { Active } from './Active';
import { Members } from './Members';
import { IntendData } from './IntendData';
import { Faq } from './Faq';
import { Launching } from './Launching ';
import { Partners } from './Partners';
import { Events } from './Events';
import { Testimonials } from './Testimonials';

const Home = () => {
  return (
    <>
    <Hero />
    <Category/>
    <Vertual/>
   <Connection/>
   <Investment/>
   <Active/>
  < Members/>
  <IntendData/>
  <Faq/>
  <Launching/>
  <Partners/>
  <Events/>
  <Testimonials/>
    </>
  )
}

export default Home