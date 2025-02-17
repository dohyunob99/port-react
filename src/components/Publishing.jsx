import React, { useEffect, useRef } from "react";
import { pubList } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Publishing = () => {
  gsap.registerPlugin(ScrollTrigger);

  const horizontalRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const horizontal = horizontalRef.current;
    const sections = sectionRefs.current;

    if (!horizontal || sections.length === 0) return;

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () => "+=" + (horizontal.offsetWidth - window.innerWidth),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalSections = sections.length;
          const activeIndex = Math.round(progress * (totalSections - 1));

          sections.forEach((section, index) => {
            section.classList.toggle("active", index === activeIndex);
          });
        },
      },
    });

    return () => {
      if (scrollTween) scrollTween.kill();
    };
  }, []);

  return (
    <div id="horizontal" ref={horizontalRef} style={{ display: "flex", overflowX: "hidden" }}>
      <section className="horIContent" ref={(el) => (sectionRefs.current[0] = el)}>
        <div className="inner">
          <div className="txtLeft">
            <h2 className="tit">
              project <span>Publishing type</span>
            </h2>
            <div className="exTxt">
              공공기관, 기업, 쇼핑몰, 웹 접근성, 반응형, 모바일 등 다수의 사이트 구축하고 유지관리를 하였습니다.
            </div>
            <div className="exTxt2">
              <a href="#none">Project List</a> 메뉴에서 참고 하실 수 있습니다.
            </div>
          </div>
        </div>
      </section>

      {pubList.map((pub, index) => (
        <section
          className="horIContent"
          key={index}
          ref={(el) => (sectionRefs.current[index + 1] = el)}
        >
          <div className="inner">
            <h3>
              <span>{pub.title}</span>
              <em>{pub.title2}</em>
            </h3>
            <div className="imgBx">
              <img src={pub.img} alt={pub.imgAlt} />
            </div>
            <div className="txtCon">
              <p>{pub.exTxt}</p>
              <a href={pub.siteUrl} target="_blank" rel="noopener noreferrer">
                Site View →
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Publishing;
