import "animate.css/animate.min.css"
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/main.sass"
import { StaticImage } from "gatsby-plugin-image"
import { AnimationOnScroll } from "react-animation-on-scroll"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="main-page-container" id="mainPageContainer">
      <div className="first-section-container">
        <div className="first-section-container__background" />
        <div className="first-section-container__white-cover" />
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeOut"
          animatePreScroll
          scrollableParentSelector="body"
        >
          <div className="first-section-container__content-box">
            <span className="heading-text main-title-text">
              Massbit Branding
            </span>
            <div className="first-section-container__content-box__main-image-wrapper">
              <StaticImage
                src="../images/massbit_main_logo.png"
                placeholder="blurred"
                alt="Massbit"
              />
            </div>
            <span className="heading-text subtitle-text">
              Developing order in a world of chaos
            </span>
          </div>
        </AnimationOnScroll>
      </div>
      <div className="three-columns-row">
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce
          animatePreScroll
          scrollableParentSelector="body"
          delay={200}
        >
          <div className="logo-variant-container">
            <StaticImage
              src="../images/massbit_os.png"
              placeholder="blurred"
              alt="Massbit Open Source"
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce
          animatePreScroll
          scrollableParentSelector="body"
          delay={400}
        >
          <div className="logo-variant-container">
            <StaticImage
              src="../images/massbit_ai.png"
              placeholder="blurred"
              alt="Massbit AI"
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce
          animatePreScroll
          scrollableParentSelector="body"
          delay={600}
        >
          <div className="logo-variant-container">
            <StaticImage
              src="../images/massbit_edu.png"
              placeholder="blurred"
              alt="Massbit Education"
            />
          </div>
        </AnimationOnScroll>
      </div>
      <div className="brand-details-section">
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce
          animatePreScroll
          duration={0.8}
          scrollableParentSelector="body"
        >
          <div className="brand-details-section__brand-image-container">
            <StaticImage
              src="../images/massbit_logo_detail.png"
              placeholder="blurred"
              alt="Massbit Logo Detail"
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce
          scrollableParentSelector="body"
        >
          <p className="brand-details-section__details-text">
            <p>
              An almost monochromatic <b>red</b> gradient tint, a figure folded
              as an <b>origami</b> that makes out the shape of an "M" expanding
              in all directions.
            </p>
            <p>
              The middle vertix with a roundness half the size of the external
              ones. Dry and firm inner angles.
            </p>
            <p>
              With an aspect ratio of <b>5:8</b>, this bad boy can stand either
              a white background or a darker one.
            </p>
          </p>
        </AnimationOnScroll>
      </div>
      <div className="colors-row-container">
        <div className="colors-row-container__blue-container">
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOnce
            scrollableParentSelector="body"
            offset={50}
          >
            <span>#1A1A42</span>
          </AnimationOnScroll>
        </div>
        <div className="colors-row-container__red-container">
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOnce
            scrollableParentSelector="body"
            offset={50}
          >
            <span>#F44336</span>
          </AnimationOnScroll>
          <div className="bottom-text-container">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOnce
              scrollableParentSelector="body"
              offset={50}
            >
              <span className="red-container-bottom-text">#FF2C4A</span>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <div className="logo-usage-columns">
        <div className="logo-usage-columns__column-element">
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce
            scrollableParentSelector="body"
            delay={200}
          >
            <div className="logo-usage-columns__column-element__usage-wrapper">
              <div className="correct-usage-icon">✔</div>
              <div className="logo-usage-image-container">
                <StaticImage
                  src="../images/massbit_logo_correct_usage_one.png"
                  placeholder="blurred"
                  alt="Massbit Logo Usage Correct"
                />
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce
            scrollableParentSelector="body"
            delay={400}
          >
            <div className="logo-usage-columns__column-element__usage-wrapper">
              <div className="correct-usage-icon">✔</div>
              <div className="logo-usage-image-container">
                <StaticImage
                  src="../images/massbit_logo_correct_usage_two.png"
                  placeholder="blurred"
                  alt="Massbit Logo Usage Correct"
                />
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="logo-usage-columns__column-element">
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce
            scrollableParentSelector="body"
            delay={300}
          >
            <div className="logo-usage-columns__column-element__usage-wrapper">
              <div className="wrong-usage-icon">✖</div>
              <div className="logo-usage-image-container">
                <StaticImage
                  src="../images/massbit_logo_wrong_usage_one.png"
                  placeholder="blurred"
                  alt="Massbit Logo Usage Wrong"
                />
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOnce
            scrollableParentSelector="body"
            delay={500}
          >
            <div className="logo-usage-columns__column-element__usage-wrapper">
              <div className="wrong-usage-icon">✖</div>
              <div className="logo-usage-image-container">
                <StaticImage
                  src="../images/massbit_logo_wrong_usage_two.png"
                  placeholder="blurred"
                  alt="Massbit Logo Usage Wrong"
                />
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <div className="mosaic-grid-images">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce
          scrollableParentSelector="body"
          delay={200}
        >
          <div className="business-card-image-container">
            <StaticImage
              src="../images/massbit_business_cards.png"
              placeholder="blurred"
              alt="Massbit business cards"
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOnce
          scrollableParentSelector="body"
          delay={200}
        >
          <div className="logo-wood-image-container">
            <StaticImage
              src="../images/massbit_logo_wood.png"
              placeholder="blurred"
              alt="Massbit logo engraved on wood"
            />
          </div>
        </AnimationOnScroll>
        <div className="massbit-pattern-wrapper">
          <div className="massbit-pattern-image-container">
            <StaticImage
              src="../images/massbit_pattern.png"
              imgStyle={{ backgroundRepeat: "repeat-y" }}
              placeholder="blurred"
              alt="Massbit logo pattern"
            />
          </div>
        </div>
      </div>
      <div className="history-wrapper">
        <div className="history-element">
          <div className="history-element-header">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOnce
              scrollableParentSelector="body"
              delay={100}
            >
              <div className="history-element__image-wrapper">
                <div className="history-element__image-wrapper__image-container">
                  <StaticImage
                    src="../images/massbit_logo_first_version.png"
                    placeholder="blurred"
                    alt="Massbit logo first version"
                  />
                </div>
              </div>
            </AnimationOnScroll>
            <div className="history-circle-element" />
          </div>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOnce
            scrollableParentSelector="body"
            delay={100}
          >
            <div className="history-element__text-wrapper">
              <span className="history-element__text-wrapper__title">
                2017 - First step
              </span>
              <span className="history-element__text-wrapper__description">
                As the Apollo team did in 1969 we tried to step into uncharted
                territory and to define something else. A distorted, double
                pyramid shape that symbolized our need to improve at the speed
                of light, with pastel colors and a double typeface.
              </span>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="history-element">
          <div className="history-element-header">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOnce
              scrollableParentSelector="body"
              delay={200}
            >
              <div className="history-element__image-wrapper">
                <div className="history-element__image-wrapper__image-container">
                  <StaticImage
                    src="../images/massbit_logo_second_version.png"
                    placeholder="blurred"
                    alt="Massbit logo second version"
                  />
                </div>
              </div>
            </AnimationOnScroll>
            <div className="history-link-chain" />
            <div className="history-circle-element" />
          </div>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOnce
            scrollableParentSelector="body"
            delay={200}
          >
            <div className="history-element__text-wrapper">
              <span className="history-element__text-wrapper__title">
                2021 - Evolution
              </span>
              <span className="history-element__text-wrapper__description">
                Thriving in the dark, it took 2 years of improvement and study
                to evolve into something new. So our identity did the same.
                Emerging from a dark blue undefined blob a reddish shape of an m
                marks this milestone of our journey. It doesn't know that it'll
                be a long way.
              </span>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="history-element">
          <div className="history-element-header">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOnce
              scrollableParentSelector="body"
              delay={300}
            >
              <div className="history-element__image-wrapper">
                <div className="history-element__image-wrapper__image-container">
                  <StaticImage
                    src="../images/massbit_logo_current_version.png"
                    placeholder="blurred"
                    alt="Massbit logo current version"
                  />
                </div>
              </div>
            </AnimationOnScroll>
            <div className="history-link-chain current-chain-element" />
            <div className="history-circle-element current-circle-element" />
          </div>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOnce
            scrollableParentSelector="body"
            delay={300}
          >
            <div className="history-element__text-wrapper">
              <span className="history-element__text-wrapper__title">
                Current - Live in the moment
              </span>
              <span className="history-element__text-wrapper__description">
                <i>
                  Young people get the foolish idea that what is new for them
                  must be new for everybody else too. No matter how
                  unconventional they get, they're just repeating what others
                  before them have done.
                </i>
                <p>Yukio Mishima</p>
              </span>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <div className="logo-credits-container">
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce
          scrollableParentSelector="body"
          delay={200}
        >
          <div className="logo-credit-image-container">
            <StaticImage
              src="../images/massbit_powered_by.png"
              placeholder="blurred"
              alt="Powered by Massbit"
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce
          scrollableParentSelector="body"
          delay={400}
        >
          <div className="logo-credit-image-container">
            <StaticImage
              src="../images/massbit_made_by.png"
              placeholder="blurred"
              alt="Made by Massbit"
            />
          </div>
        </AnimationOnScroll>
      </div>
      <div className="footer-section">
        <div className="background-dark-circle" />
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeOutDown"
          scrollableParentSelector="body"
        >
          <div className="glass-card">
            <div className="card-text-wrapper">
              <span className="card-text-wrapper__call-to-action">
                Contact us @
              </span>
              <a
                href="mailto:massbitdev@gmail.com"
                className="card-text-wrapper__link"
              >
                massbitdev@gmail.com
              </a>
              <span className="card-text-wrapper__code">
                x2xx - 0xxx - xxx2 - xx3x
              </span>
            </div>
            <div className="card-logo-container">
              <StaticImage
                src="../images/massbit_gray.png"
                placeholder="blurred"
                alt="Massbit gray"
              />
            </div>
          </div>
        </AnimationOnScroll>
        <div className="footer-credits">
          <AnimationOnScroll
            animateIn="animate__tada"
            scrollableParentSelector="body"
            delay={200}
            offset={20}
          >
            <h1>🎉🎉🎉</h1>
          </AnimationOnScroll>
          <span className="footer-credits__version">
            Massbit 2017 - {new Date().getFullYear()} v1.0.0
          </span>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Massbit Branding</title>
