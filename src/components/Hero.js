/* eslint-disable max-len */
import React from 'react';

// images
import Headshot from 'images/headshot.jpeg';

// components
import { Heading2, Paragraph, HeroEmail, Link } from './Typography';
import { IconsWrapper, IconButton } from './HeroStyles';
import './Hero.css';

const Hero = () => {
  return (
    <header>
      <section id="hero">
        <div className="profile">
          <div className="picture">
            <img src={Headshot} id="headshot" alt="headshot" />
          </div>
          <div className="text">

            <Heading2>
                  Hi, nice to meet you <span role="img" aria-label="wave">👋</span>
            </Heading2>
            <Heading2>I’m Nino Aquilon</Heading2>
            <Heading2>A front-end developer, recent <Link href="https://www.shesharp.co/new-in-tech-scholarship">scholarship</Link> recipient and <Link href="https://www.technigo.io/web-development-boot-camp">bootcamp</Link> graduate</Heading2>

          </div>
        </div>
        <div className="description">
          <Paragraph>I love crafting beautiful, responsive and user-friendly websites.</Paragraph>
          <Paragraph>
          I&apos;m a quick learner. Writing robust, easy-to-read code is my passion.
          </Paragraph>
          <Paragraph>My colleagues describe me as a resilient problem-solver.
          </Paragraph>
          <Paragraph>Friends and family describe me as someone they love to be around because of my warm personality.</Paragraph>
        </div>
        <HeroEmail>
                nino.aquilon@gmail.com
        </HeroEmail>
        <IconsWrapper>
          <IconButton aria-label="Icon-only Button" href="https://www.linkedin.com/in/ninoaquilon/" target="_blank" rel="noreferrer">
            <svg
              aria-hidden="true"
              focusable="false"
              width="42"
              height="42"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1875 25V10.9844H5.82812V25H10.1875ZM7.98438 9.10938C9.39062 9.10938 10.5156 7.9375 10.5156 6.53125C10.5156 5.17188 9.39062 4.04688 7.98438 4.04688C6.625 4.04688 5.5 5.17188 5.5 6.53125C5.5 7.9375 6.625 9.10938 7.98438 9.10938ZM26.4531 25H26.5V17.3125C26.5 13.5625 25.6562 10.6562 21.25 10.6562C19.1406 10.6562 17.7344 11.8281 17.125 12.9062H17.0781V10.9844H12.9062V25H17.2656V18.0625C17.2656 16.2344 17.5938 14.5 19.8438 14.5C22.0938 14.5 22.1406 16.5625 22.1406 18.2031V25H26.4531Z" fill="currentColor" />
            </svg>
          </IconButton>
          <IconButton aria-label="Icon-only Button" href="mailto: nino.aquilon@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" fill="currentColor" />
            </svg>
          </IconButton>
          <IconButton aria-label="Icon-only Button" href="https://github.com/codeandjazz" target="_blank" rel="noreferrer">
            <svg
              aria-hidden="true"
              focusable="false"
              width="43"
              height="42"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8594 22.6562C12.8594 22.5625 12.7656 22.4688 12.625 22.4688C12.4844 22.4688 12.3906 22.5625 12.3906 22.6562C12.3906 22.75 12.4844 22.8438 12.625 22.7969C12.7656 22.7969 12.8594 22.75 12.8594 22.6562ZM11.4062 22.4219C11.4062 22.5156 11.5 22.6562 11.6406 22.6562C11.7344 22.7031 11.875 22.6562 11.9219 22.5625C11.9219 22.4688 11.875 22.375 11.7344 22.3281C11.5938 22.2812 11.4531 22.3281 11.4062 22.4219ZM13.5156 22.375C13.375 22.375 13.2812 22.4688 13.2812 22.6094C13.2812 22.7031 13.4219 22.75 13.5625 22.7031C13.7031 22.6562 13.7969 22.6094 13.75 22.5156C13.75 22.4219 13.6094 22.3281 13.5156 22.375ZM16.5625 4.375C10.0938 4.375 5.125 9.34375 5.125 15.8125C5.125 21.0156 8.35938 25.4688 13.0469 27.0625C13.6562 27.1562 13.8438 26.7812 13.8438 26.5C13.8438 26.1719 13.8438 24.5781 13.8438 23.5938C13.8438 23.5938 10.5625 24.2969 9.85938 22.1875C9.85938 22.1875 9.34375 20.8281 8.59375 20.5C8.59375 20.5 7.51562 19.75 8.64062 19.75C8.64062 19.75 9.8125 19.8438 10.4688 20.9688C11.5 22.7969 13.1875 22.2812 13.8906 21.9531C13.9844 21.2031 14.2656 20.6875 14.6406 20.3594C12.0156 20.0781 9.34375 19.7031 9.34375 15.2031C9.34375 13.8906 9.71875 13.2812 10.4688 12.4375C10.3281 12.1094 9.95312 10.8906 10.6094 9.25C11.5469 8.96875 13.8438 10.5156 13.8438 10.5156C14.7812 10.2344 15.7656 10.1406 16.75 10.1406C17.7812 10.1406 18.7656 10.2344 19.7031 10.5156C19.7031 10.5156 21.9531 8.92188 22.9375 9.25C23.5938 10.8906 23.1719 12.1094 23.0781 12.4375C23.8281 13.2812 24.2969 13.8906 24.2969 15.2031C24.2969 19.7031 21.5312 20.0781 18.9062 20.3594C19.3281 20.7344 19.7031 21.4375 19.7031 22.5625C19.7031 24.1094 19.6562 26.0781 19.6562 26.4531C19.6562 26.7812 19.8906 27.1562 20.5 27.0156C25.1875 25.4688 28.375 21.0156 28.375 15.8125C28.375 9.34375 23.0781 4.375 16.5625 4.375ZM9.67188 20.5469C9.57812 20.5938 9.625 20.7344 9.67188 20.8281C9.76562 20.875 9.85938 20.9219 9.95312 20.875C10 20.8281 10 20.6875 9.90625 20.5938C9.8125 20.5469 9.71875 20.5 9.67188 20.5469ZM9.15625 20.1719C9.10938 20.2656 9.15625 20.3125 9.25 20.3594C9.34375 20.4062 9.4375 20.4062 9.48438 20.3125C9.48438 20.2656 9.4375 20.2188 9.34375 20.1719C9.25 20.125 9.20312 20.125 9.15625 20.1719ZM10.6562 21.8594C10.6094 21.9062 10.6094 22.0469 10.75 22.1406C10.8438 22.2344 10.9844 22.2812 11.0312 22.1875C11.0781 22.1406 11.0781 22 10.9844 21.9062C10.8906 21.8125 10.75 21.7656 10.6562 21.8594ZM10.1406 21.1562C10.0469 21.2031 10.0469 21.3438 10.1406 21.4375C10.2344 21.5312 10.3281 21.5781 10.4219 21.5312C10.4688 21.4844 10.4688 21.3438 10.4219 21.25C10.3281 21.1562 10.2344 21.1094 10.1406 21.1562Z" fill="currentColor" />
            </svg>
          </IconButton>
        </IconsWrapper>
      </section>
    </header>
  )
};

export default Hero;