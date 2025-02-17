import React, { useEffect, useRef } from "react";
import profile from "../assets/img/nho.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skill = () => {
  gsap.registerPlugin(ScrollTrigger);

  const skillRef = useRef(null);

  useEffect(() => {
    const skillCon = gsap.timeline();
    
    skillCon
      .fromTo(
        ".skillCon h2",
        { y: 50, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.3 }
      )
      .fromTo(
        ".skillCon .photo",
        { x: -50, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.2 }
      )
      .fromTo(
        ".skillCon .txtCon",
        { x: -50, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.2 }
      );

    ScrollTrigger.create({
      animation: skillCon,
      trigger: "#skillCon",
      start: "top 40%",
      end: "bottom bottom",
      pin: false,
      anticipatePin: 1,
    });

    const skillCon2 = gsap.timeline();
    const cards = gsap.utils.toArray(".cardList li");

    skillCon2.fromTo(
      cards,
      { x: (index) => (index % 2 === 0 ? 0 : 0), autoAlpha: 0 },
      { x: (index) => (index % 2 === 0 ? 80 : -80), autoAlpha: 1, duration: 1, stagger: 0.2 }
    );

    ScrollTrigger.create({
      animation: skillCon2,
      trigger: "#skillCon",
      start: "top 40%",
      end: "bottom bottom",
      scrub: true,
      pin: false,
      anticipatePin: 1,
    });

    return () => {
      skillCon.kill();
      skillCon2.kill();
    };
  }, []);

  return (
    <section id="skillCon" className="skillCon" ref={skillRef}>
      <div className="inner">
        <h2>about me</h2>
        <div className="profileBx">
          <div className="photo">
            <img src={profile} alt="nho" />
          </div>
          <div className="txtCon">
            안녕하세요. 웹 표준과 접근성을 고려하여 똑똑한 웹 페이지를 구현하는 웹 퍼블리셔 나현오입니다.<br />
            <br />
            퍼블리셔는 디자인과 개발 중간에 있어 커뮤니케이션이 중요하다고 생각합니다. <br />
            프로젝트를 진행하다 보면 서로의 생각이 다른 경우도 있어 결과가 만족스럽지 않은 경우도 생기는데 어떤 업무를 시작하게 되면 커뮤니케이션을 많이 하면서 각자의 파트에서 만족스러운 결과가 나오도록 노력하는 편입니다.
            <br />
            <br />
            항상 더 나은 결과물을 만들기 위해 끊임없이 고민하고 책임감을 가지고 최선을 다해 일하겠습니다.<br />
            감사합니다.
          </div>
        </div>
        <ul className="cardList">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Jquery</li>
          <li>Git</li>
          <li>SVN</li>
          <li>React</li>
          <li>Vue</li>
        </ul>
      </div>
    </section>
  );
};

export default Skill;
