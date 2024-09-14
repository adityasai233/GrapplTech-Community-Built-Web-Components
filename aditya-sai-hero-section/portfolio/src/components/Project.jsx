import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.jpeg";
import project2 from "../assets/images/project-2.jpeg";
import project3 from "../assets/images/project-3.jpeg";
import project4 from "../assets/images/project-4.jpeg";
import project5 from "../assets/images/project-5.jpeg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Web Hosting",
      github_link: "https://github.com/",
    },
    {
      img: project2,
      name: "Online Education",
      github_link: "https://github.com/",
    },
    {
      img: project3,
      name: "Website Design",
      github_link: "https://github.com/",
    },
    {
      img: project4,
      name: "Online Shopping",
      github_link: "https://github.com/",
    },
    {
      img: project5,
      name: "Digital Project",
      github_link: "https://github.com/",
    },
  ];

  return (
    <section id="projects" style={{ padding: "40px 0", color: "#f9fafb" }}>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ fontSize: "2.5rem", fontWeight: "600", color: "#34d399" }}>
          <span style={{ color: "#34d399" }}>Projects</span>
        </h3>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "960px",
          gap: "24px",
          padding: "0 20px",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div
                  style={{
                    padding: "16px",
                    backgroundColor: "#1f2937",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={project_info.img}
                    alt={project_info.name}
                    style={{
                      borderRadius: "12px",
                      margin: "0 auto",
                      display: "block",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <h3 style={{ fontSize: "1.25rem", marginTop: "16px", color: "#e5e7eb" }}>
                    {project_info.name}
                  </h3>
                  <a
                    href={project_info.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#d1d5db",
                      backgroundColor: "#111827",
                      padding: "8px 16px",
                      display: "inline-block",
                      borderRadius: "8px",
                      marginTop: "16px",
                      textDecoration: "none",
                    }}
                  >
                    View on Github
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
