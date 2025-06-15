'use client';

import { useWindowScroll } from '@uidotdev/usehooks';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function HomePage() {
  const viewRef = useRef<HTMLDivElement>(null);
  const [, scrollTo] = useWindowScroll();

  const NAVBAR_HEIGHT = 80; // px

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (ratio: number) => {
    const targetY = ratio * (viewRef.current?.offsetHeight || 0) - NAVBAR_HEIGHT;
    scrollTo({ left: 0, top: targetY, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Head>
        <title>Jonathan Kang</title>
        <meta property="og:title" content="Jonathan Kang" key="title" />
        <meta name="image" property="og:image" content="[/images/og.jpg]"/>
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="flex items-center ml-2 h-full px-4 w-full">
          <img 
            src="mylogo.png" 
            alt="Logo" 
            className="h-16 cursor-pointer" 
            onClick={() => window.location.reload()} 
          />
          <div className="flex gap-8 items-center ml-auto mr-4">
            <button 
              onClick={() => scrollToSection(1.1)}
              className="text-gray-900 dark:text-white hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection(2.1)}
              className="text-gray-900 dark:text-white hover:text-blue-400 transition-colors"
            >
              Experience
            </button>
            
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={viewRef} className="h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto gap-12">
          <img
            src="me.png"
            alt="Jonathan Kang"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover shadow-lg mb-8 md:mb-0"
          />
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Jonathan Kang
            </h1>
            <p className="text-xl mb-6 text-gray-300">Software Engineer & Frontend Developer</p>
            <div className="flex gap-4 justify-center md:justify-start items-center">
              <button
                onClick={() => window.open('/Resume.pdf')}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
              >
                Resume
              </button>
              <div className="flex gap-4">
                <Link href="https://www.linkedin.com/in/jonathankang3/" target="_blank">
                  <img src="linkedin.png" alt="LinkedIn" className="h-8 w-8 hover:opacity-80 transition-opacity" />
                </Link>
                <Link href="mailto:jkangg3@gmail.com">
                  <img src="email.png" alt="Email" className="h-8 w-8 hover:opacity-80 transition-opacity" />
                </Link>
                <Link href="https://github.com/Jkang3" target="_blank">
                  <img src="github.png" alt="GitHub" className="h-8 w-8 hover:opacity-80 transition-opacity" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">About Me</h2>
          <div className="flex gap-12 items-center">
            <img
              src="buzz.jpg"
              alt="Jonathan Kang"
              className="w-1/3 rounded-lg shadow-lg"
            />
            <div className="space-y-8 text-gray-300">
              <div className="space-y-4">
                <p>
                  👋 Hey there! I&apos;m Jonathan Kang, a recent Computer Science graduate from the Georgia Institute of Technology, 
                  where I concentrated in People and Media threads. I&apos;m passionate about front-end engineering, web development, 
                  and building meaningful, user-centered products. Currently, I&apos;m excited to be joining Meta as an upcoming Software Engineer.
                </p>
              </div>
              
              <div className="space-y-4">
                <p>
                  🏀 Outside of tech, you&apos;ll most likely find me on a court or a field — I love playing basketball, tennis, 
                  volleyball, and pretty much any sport you throw my way.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  🍜 I&apos;m also a huge foodie — always on the lookout for new spots and great eats. 
                  If you have any recommendations, let&apos;s chat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Experience</h2>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2025 - Present"
              iconStyle={{ background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              icon={<img src="/meta.png" alt="Meta" className="h-7 w-10" />}
              intersectionObserverProps={{ triggerOnce: false }}
            >
              <h3 className="vertical-timeline-element-title text-blue-400">Incoming Software Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle text-blue-300">Meta (Threads Core Product)</h4>
              <p className="text-gray-700">
                Building performant, user-facing features for Meta&apos;s flagship text-based social platform.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2024 – Aug 2024"
              iconStyle={{ background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              icon={<img src="/keysight.png" alt="Keysight" className="h-12 w-12" />}
              intersectionObserverProps={{ triggerOnce: false }}
            >
              <h3 className="vertical-timeline-element-title text-blue-400">Frontend Software Engineer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle text-blue-300">Keysight Technologies, San Francisco, CA</h4>
              <p className="text-gray-700">
                Built Angular/TypeScript features for spectrum data export and filtering, improving usability and data accessibility. Synchronized PostgreSQL databases across machines for seamless integration.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2023 – Aug 2023"
              iconStyle={{ background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              icon={<img src="/multimedia.png" alt="Multimedia" className="h-13 w-13" />}
              intersectionObserverProps={{ triggerOnce: false }}
            >
              <h3 className="vertical-timeline-element-title text-blue-400">Frontend Software Engineer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle text-blue-300">Multimedia, Atlanta, GA</h4>
              <p className="text-gray-700">
                Developed a responsive React/Next.js frontend and scalable serverless backend, enabling efficient content publishing and a user-friendly blogging system.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>
    </main>
  );
}