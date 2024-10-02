import React, { useState } from "react";
import "./OurServices.css";
import { useTranslation } from "react-i18next";
import img1 from "../../Images/1.jpg";
import img2 from "../../Images/2.jpg";
import img3 from "../../Images/3.jpg";
import img4 from "../../Images/4.jpg";
import img5 from "../../Images/5.jpg";
import img6 from "../../Images/6.jpg";


export const OurServices = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="Ourservices1">
        <h2>
          {t("Uperheaddiscr")}
        </h2>
      </div>
      <div className="Ourservices2">
        <main>
          <h2 >{t("Uperdisk")}</h2>
          <section className="card-row">
            <article className="card">
              <img
                src={img1}
                alt="exposed brick wall in a hipster cafe"
              ></img>
              <h3> {t("title1")}</h3>
              <p>{t("title1Dis")}</p>
              
            </article>
            <article className="card">
              <img
                src={img2}
                alt="exposed brick wall in a hipster cafe"
              ></img>
              <h3>{t("title2")}</h3>
              <p>{t("title1Dis2")}
              </p>
            </article>
            <article className="card">
              <img
                src={img3}
                alt="exposed brick wall in a hipster cafe"
              ></img>
              <h3>
                {t("title3")}
              </h3>
              <p>
                {t("title1Dis3")}
              </p>
             
            </article>
          </section>
          <section className="card-row">
            <article className="card">
              <img
                src={img4}
                alt="exposed brick wall in a hipster cafe"
              ></img>
              <h3> {t("title1")}</h3>
              <p>{t("title1Dis")}</p>
            
            </article>
            <article className="card">
              <img
                src={img5}
                alt="exposed brick wall in a hipster cafe"
              ></img>
              <h3>{t("title2")}</h3>
              <p>{t("title1Dis2")}
              </p>
            </article>
            <article className="card">
              <img
                src={img6}
                alt="exposed brick wall in a hipster cafe"
              ></img>
              <h3>
                {t("title3")}
              </h3>
              <p>
                {t("title1Dis3")}
              </p>
              
            </article>
          </section>
        </main>
      </div>
    </>
  );
};
