/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

// projects object
import { projectList } from './ProjectList';

// components

import { Heading5, Heading6, ProjectDescription } from './Typography';
import { ProjectsWrapper, ProjectWrapper, ProjectImageWrapper, ProjectImage, ProjectInnerWrapper, TagsWrapper, Tags, ButtonsWrapper, Button, ButtonIcon, OtherButton } from './ProjectsStyles';

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Fade
        duration={2000}>
        <Heading5>
            Featured Projects
        </Heading5>
        {projectList.map(({ title, img, alt, description, tech, demo, hasBackendCode, code }) => {
          const isAnyLinkEmpty = demo === '' || code === '' || code.frontend === '' || (hasBackendCode && code.backend === '');
          return (
            <ProjectWrapper key={title}>
              <ProjectImageWrapper>
                <ProjectImage className="project-image" src={img} alt={alt} loading="lazy" />
              </ProjectImageWrapper>
              <ProjectInnerWrapper>
                <Heading6>{title}</Heading6>
                <ProjectDescription>{description}</ProjectDescription>
                <TagsWrapper>{tech.map((tag) => <Tags key={tag}>{tag}</Tags>)}</TagsWrapper>
                <ButtonsWrapper>
                  {hasBackendCode ? (
                    <Button
                      href={code.backend || code}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        pointerEvents: isAnyLinkEmpty ? 'none' : 'auto',
                        opacity: isAnyLinkEmpty ? 0.5 : 1,
                        cursor: isAnyLinkEmpty ? 'not-allowed' : 'pointer'
                      }}>
                      <ButtonIcon
                        aria-hidden="true"
                        focusable="false"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6452 25.7684C10.6452 25.6363 10.5161 25.5042 10.3226 25.5042C10.129 25.5042 10 25.6363 10 25.7684C10 25.9006 10.129 26.0327 10.3226 25.9667C10.5161 25.9667 10.6452 25.9006 10.6452 25.7684ZM8.64516 25.4381C8.64516 25.5702 8.77419 25.7684 8.96774 25.7684C9.09677 25.8345 9.29032 25.7684 9.35484 25.6363C9.35484 25.5042 9.29032 25.372 9.09677 25.3059C8.90323 25.2399 8.70968 25.3059 8.64516 25.4381ZM11.5484 25.372C11.3548 25.372 11.2258 25.5042 11.2258 25.7024C11.2258 25.8345 11.4194 25.9006 11.6129 25.8345C11.8065 25.7684 11.9355 25.7024 11.871 25.5702C11.871 25.4381 11.6774 25.3059 11.5484 25.372ZM15.7419 0C6.83871 0 0 7.00373 0 16.1218C0 23.4559 4.45161 29.7328 10.9032 31.9793C11.7419 32.1115 12 31.5829 12 31.1864C12 30.7239 12 28.4774 12 27.0899C12 27.0899 7.48387 28.081 6.51613 25.1077C6.51613 25.1077 5.80645 23.1916 4.77419 22.7291C4.77419 22.7291 3.29032 21.6719 4.83871 21.6719C4.83871 21.6719 6.45161 21.8041 7.35484 23.3898C8.77419 25.9667 11.0968 25.2399 12.0645 24.7774C12.1935 23.7202 12.5806 22.9934 13.0968 22.5309C9.48387 22.1344 5.80645 21.6059 5.80645 15.2628C5.80645 13.4128 6.32258 12.5539 7.35484 11.3645C7.16129 10.902 6.64516 9.18414 7.54839 6.87159C8.83871 6.47515 12 8.65556 12 8.65556C13.2903 8.25912 14.6452 8.12697 16 8.12697C17.4194 8.12697 18.7742 8.25912 20.0645 8.65556C20.0645 8.65556 23.1613 6.40908 24.5161 6.87159C25.4194 9.18414 24.8387 10.902 24.7097 11.3645C25.7419 12.5539 26.3871 13.4128 26.3871 15.2628C26.3871 21.6059 22.5806 22.1344 18.9677 22.5309C19.5484 23.0595 20.0645 24.0506 20.0645 25.6363C20.0645 27.8167 20 30.5918 20 31.1204C20 31.5829 20.3226 32.1115 21.1613 31.9132C27.6129 29.7328 32 23.4559 32 16.1218C32 7.00373 24.7097 0 15.7419 0ZM6.25806 22.7952C6.12903 22.8612 6.19355 23.0595 6.25806 23.1916C6.3871 23.2577 6.51613 23.3237 6.64516 23.2577C6.70968 23.1916 6.70968 22.9934 6.58065 22.8612C6.45161 22.7952 6.32258 22.7291 6.25806 22.7952ZM5.54839 22.2666C5.48387 22.3987 5.54839 22.4648 5.67742 22.5309C5.80645 22.5969 5.93548 22.5969 6 22.4648C6 22.3987 5.93548 22.3327 5.80645 22.2666C5.67742 22.2005 5.6129 22.2005 5.54839 22.2666ZM7.6129 24.6452C7.54839 24.7113 7.54839 24.9095 7.74194 25.0416C7.87097 25.1738 8.06452 25.2399 8.12903 25.1077C8.19355 25.0416 8.19355 24.8434 8.06452 24.7113C7.93548 24.5791 7.74194 24.5131 7.6129 24.6452ZM6.90323 23.6541C6.77419 23.7202 6.77419 23.9184 6.90323 24.0506C7.03226 24.1827 7.16129 24.2488 7.29032 24.1827C7.35484 24.1166 7.35484 23.9184 7.29032 23.7863C7.16129 23.6541 7.03226 23.588 6.90323 23.6541Z" fill="currentColor" />
                      </ButtonIcon>
                 Backend code
                    </Button>) : (
                    <Button
                      href={code.frontend || code}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        pointerEvents: isAnyLinkEmpty ? 'none' : 'auto',
                        opacity: isAnyLinkEmpty ? 0.5 : 1,
                        cursor: isAnyLinkEmpty ? 'not-allowed' : 'pointer'
                      }}>
                      <ButtonIcon
                        aria-hidden="true"
                        focusable="false"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6452 25.7684C10.6452 25.6363 10.5161 25.5042 10.3226 25.5042C10.129 25.5042 10 25.6363 10 25.7684C10 25.9006 10.129 26.0327 10.3226 25.9667C10.5161 25.9667 10.6452 25.9006 10.6452 25.7684ZM8.64516 25.4381C8.64516 25.5702 8.77419 25.7684 8.96774 25.7684C9.09677 25.8345 9.29032 25.7684 9.35484 25.6363C9.35484 25.5042 9.29032 25.372 9.09677 25.3059C8.90323 25.2399 8.70968 25.3059 8.64516 25.4381ZM11.5484 25.372C11.3548 25.372 11.2258 25.5042 11.2258 25.7024C11.2258 25.8345 11.4194 25.9006 11.6129 25.8345C11.8065 25.7684 11.9355 25.7024 11.871 25.5702C11.871 25.4381 11.6774 25.3059 11.5484 25.372ZM15.7419 0C6.83871 0 0 7.00373 0 16.1218C0 23.4559 4.45161 29.7328 10.9032 31.9793C11.7419 32.1115 12 31.5829 12 31.1864C12 30.7239 12 28.4774 12 27.0899C12 27.0899 7.48387 28.081 6.51613 25.1077C6.51613 25.1077 5.80645 23.1916 4.77419 22.7291C4.77419 22.7291 3.29032 21.6719 4.83871 21.6719C4.83871 21.6719 6.45161 21.8041 7.35484 23.3898C8.77419 25.9667 11.0968 25.2399 12.0645 24.7774C12.1935 23.7202 12.5806 22.9934 13.0968 22.5309C9.48387 22.1344 5.80645 21.6059 5.80645 15.2628C5.80645 13.4128 6.32258 12.5539 7.35484 11.3645C7.16129 10.902 6.64516 9.18414 7.54839 6.87159C8.83871 6.47515 12 8.65556 12 8.65556C13.2903 8.25912 14.6452 8.12697 16 8.12697C17.4194 8.12697 18.7742 8.25912 20.0645 8.65556C20.0645 8.65556 23.1613 6.40908 24.5161 6.87159C25.4194 9.18414 24.8387 10.902 24.7097 11.3645C25.7419 12.5539 26.3871 13.4128 26.3871 15.2628C26.3871 21.6059 22.5806 22.1344 18.9677 22.5309C19.5484 23.0595 20.0645 24.0506 20.0645 25.6363C20.0645 27.8167 20 30.5918 20 31.1204C20 31.5829 20.3226 32.1115 21.1613 31.9132C27.6129 29.7328 32 23.4559 32 16.1218C32 7.00373 24.7097 0 15.7419 0ZM6.25806 22.7952C6.12903 22.8612 6.19355 23.0595 6.25806 23.1916C6.3871 23.2577 6.51613 23.3237 6.64516 23.2577C6.70968 23.1916 6.70968 22.9934 6.58065 22.8612C6.45161 22.7952 6.32258 22.7291 6.25806 22.7952ZM5.54839 22.2666C5.48387 22.3987 5.54839 22.4648 5.67742 22.5309C5.80645 22.5969 5.93548 22.5969 6 22.4648C6 22.3987 5.93548 22.3327 5.80645 22.2666C5.67742 22.2005 5.6129 22.2005 5.54839 22.2666ZM7.6129 24.6452C7.54839 24.7113 7.54839 24.9095 7.74194 25.0416C7.87097 25.1738 8.06452 25.2399 8.12903 25.1077C8.19355 25.0416 8.19355 24.8434 8.06452 24.7113C7.93548 24.5791 7.74194 24.5131 7.6129 24.6452ZM6.90323 23.6541C6.77419 23.7202 6.77419 23.9184 6.90323 24.0506C7.03226 24.1827 7.16129 24.2488 7.29032 24.1827C7.35484 24.1166 7.35484 23.9184 7.29032 23.7863C7.16129 23.6541 7.03226 23.588 6.90323 23.6541Z" fill="currentColor" />
                      </ButtonIcon>
                 View the code
                    </Button>
                  )}
                  {hasBackendCode ? (
                    <Button
                      href={code.frontend || code}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        pointerEvents: isAnyLinkEmpty ? 'none' : 'auto',
                        opacity: isAnyLinkEmpty ? 0.5 : 1,
                        cursor: isAnyLinkEmpty ? 'not-allowed' : 'pointer'
                      }}>
                      <ButtonIcon
                        aria-hidden="true"
                        focusable="false"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6452 25.7684C10.6452 25.6363 10.5161 25.5042 10.3226 25.5042C10.129 25.5042 10 25.6363 10 25.7684C10 25.9006 10.129 26.0327 10.3226 25.9667C10.5161 25.9667 10.6452 25.9006 10.6452 25.7684ZM8.64516 25.4381C8.64516 25.5702 8.77419 25.7684 8.96774 25.7684C9.09677 25.8345 9.29032 25.7684 9.35484 25.6363C9.35484 25.5042 9.29032 25.372 9.09677 25.3059C8.90323 25.2399 8.70968 25.3059 8.64516 25.4381ZM11.5484 25.372C11.3548 25.372 11.2258 25.5042 11.2258 25.7024C11.2258 25.8345 11.4194 25.9006 11.6129 25.8345C11.8065 25.7684 11.9355 25.7024 11.871 25.5702C11.871 25.4381 11.6774 25.3059 11.5484 25.372ZM15.7419 0C6.83871 0 0 7.00373 0 16.1218C0 23.4559 4.45161 29.7328 10.9032 31.9793C11.7419 32.1115 12 31.5829 12 31.1864C12 30.7239 12 28.4774 12 27.0899C12 27.0899 7.48387 28.081 6.51613 25.1077C6.51613 25.1077 5.80645 23.1916 4.77419 22.7291C4.77419 22.7291 3.29032 21.6719 4.83871 21.6719C4.83871 21.6719 6.45161 21.8041 7.35484 23.3898C8.77419 25.9667 11.0968 25.2399 12.0645 24.7774C12.1935 23.7202 12.5806 22.9934 13.0968 22.5309C9.48387 22.1344 5.80645 21.6059 5.80645 15.2628C5.80645 13.4128 6.32258 12.5539 7.35484 11.3645C7.16129 10.902 6.64516 9.18414 7.54839 6.87159C8.83871 6.47515 12 8.65556 12 8.65556C13.2903 8.25912 14.6452 8.12697 16 8.12697C17.4194 8.12697 18.7742 8.25912 20.0645 8.65556C20.0645 8.65556 23.1613 6.40908 24.5161 6.87159C25.4194 9.18414 24.8387 10.902 24.7097 11.3645C25.7419 12.5539 26.3871 13.4128 26.3871 15.2628C26.3871 21.6059 22.5806 22.1344 18.9677 22.5309C19.5484 23.0595 20.0645 24.0506 20.0645 25.6363C20.0645 27.8167 20 30.5918 20 31.1204C20 31.5829 20.3226 32.1115 21.1613 31.9132C27.6129 29.7328 32 23.4559 32 16.1218C32 7.00373 24.7097 0 15.7419 0ZM6.25806 22.7952C6.12903 22.8612 6.19355 23.0595 6.25806 23.1916C6.3871 23.2577 6.51613 23.3237 6.64516 23.2577C6.70968 23.1916 6.70968 22.9934 6.58065 22.8612C6.45161 22.7952 6.32258 22.7291 6.25806 22.7952ZM5.54839 22.2666C5.48387 22.3987 5.54839 22.4648 5.67742 22.5309C5.80645 22.5969 5.93548 22.5969 6 22.4648C6 22.3987 5.93548 22.3327 5.80645 22.2666C5.67742 22.2005 5.6129 22.2005 5.54839 22.2666ZM7.6129 24.6452C7.54839 24.7113 7.54839 24.9095 7.74194 25.0416C7.87097 25.1738 8.06452 25.2399 8.12903 25.1077C8.19355 25.0416 8.19355 24.8434 8.06452 24.7113C7.93548 24.5791 7.74194 24.5131 7.6129 24.6452ZM6.90323 23.6541C6.77419 23.7202 6.77419 23.9184 6.90323 24.0506C7.03226 24.1827 7.16129 24.2488 7.29032 24.1827C7.35484 24.1166 7.35484 23.9184 7.29032 23.7863C7.16129 23.6541 7.03226 23.588 6.90323 23.6541Z" fill="currentColor" />
                      </ButtonIcon>
               Frontend code
                    </Button>
                  ) : null}
                  <OtherButton
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      pointerEvents: isAnyLinkEmpty ? 'none' : 'auto',
                      opacity: isAnyLinkEmpty ? 0.5 : 1,
                      cursor: isAnyLinkEmpty ? 'not-allowed' : 'pointer'
                    }}>
                    <ButtonIcon
                      aria-hidden="true"
                      focusable="false"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.495 30.99C23.97 30.99 30.99 23.985 30.99 15.495C30.99 7.02 23.97 0 15.48 0C7.005 0 0 7.02 0 15.495C0 23.985 7.02 30.99 15.495 30.99ZM6.465 6.06C7.965 4.635 9.78 3.54 11.805 2.94C10.74 4.005 9.84 5.50501 9.165 7.335C8.115 7.005 7.21501 6.57 6.465 6.06ZM19.2001 2.955C21.21 3.555 23.025 4.635 24.51 6.06C23.775 6.58499 22.8751 7.005 21.825 7.35C21.15 5.50501 20.25 4.005 19.2001 2.955ZM16.545 3.435C17.79 4.035 18.93 5.655 19.74 7.86C18.75 8.03999 17.685 8.14501 16.545 8.19V3.435ZM11.25 7.86C12.075 5.655 13.2001 4.035 14.445 3.435V8.19C13.305 8.14501 12.24 8.03999 11.25 7.86ZM2.445 14.4451C2.65501 11.895 3.61501 9.54 5.085 7.605C6 8.27999 7.185 8.86501 8.565 9.3C8.17501 10.86 7.92 12.5999 7.845 14.4451H2.445ZM23.145 14.4451C23.07 12.5999 22.815 10.86 22.425 9.3C23.805 8.86501 24.99 8.295 25.89 7.605C27.375 9.54 28.335 11.895 28.545 14.4451H23.145ZM9.99 14.4451C10.065 12.81 10.29 11.25 10.635 9.83999C11.835 10.08 13.1099 10.23 14.445 10.29V14.4451H9.99ZM16.545 14.4451V10.29C17.88 10.23 19.155 10.08 20.355 9.83999C20.7 11.25 20.925 12.81 21 14.4451H16.545ZM2.445 16.545H7.845C7.92 18.42 8.17501 20.175 8.565 21.75C7.2 22.185 6.03 22.755 5.13 23.43C3.63 21.4799 2.65501 19.11 2.445 16.545ZM9.99 16.545H14.445V20.775C13.125 20.835 11.835 20.985 10.65 21.21C10.29 19.785 10.05 18.195 9.99 16.545ZM16.545 20.775V16.545H21C20.94 18.195 20.7 19.785 20.34 21.21C19.155 20.985 17.88 20.835 16.545 20.775ZM22.425 21.75C22.83 20.175 23.07 18.42 23.145 16.545H28.545C28.335 19.11 27.3601 21.4799 25.86 23.43C24.9601 22.755 23.79 22.185 22.425 21.75ZM16.545 22.875C17.6699 22.9199 18.735 23.025 19.71 23.205C18.9 25.365 17.775 26.97 16.545 27.555V22.875ZM11.28 23.205C12.255 23.025 13.32 22.9199 14.445 22.875V27.555C13.215 26.97 12.09 25.365 11.28 23.205ZM6.50999 24.975C7.245 24.465 8.145 24.0451 9.18 23.715C9.85501 25.515 10.74 26.985 11.775 28.035C9.795 27.435 7.995 26.3701 6.50999 24.975ZM21.81 23.715C22.845 24.0451 23.745 24.465 24.4801 24.975C22.995 26.3701 21.1949 27.435 19.215 28.035C20.25 26.985 21.135 25.515 21.81 23.715Z" fill="currentColor" />
                    </ButtonIcon>
                 View it live
                  </OtherButton>
                </ButtonsWrapper>
              </ProjectInnerWrapper>
            </ProjectWrapper>
          )
        })}
      </Fade>
    </ProjectsWrapper>
  )
}

export default Projects;