import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/main.sass"
import { StaticImage } from "gatsby-plugin-image"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  },
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="main-page-container">
      <div className="first-section-container">
        <div className="first-section-container__background" />
        <div className="first-section-container__white-cover" />
        <div className="first-section-container__content-box">
          <span className="heading-text main-title-text">Massbit Branding</span>
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
      </div>
      <div className="three-columns-row">
        <div className="logo-variant-container">
          <StaticImage
            src="../images/massbit_os.png"
            placeholder="blurred"
            alt="Massbit Open Source"
          />
        </div>
        <div className="logo-variant-container">
          <StaticImage
            src="../images/massbit_ai.png"
            placeholder="blurred"
            alt="Massbit AI"
          />
        </div>
        <div className="logo-variant-container">
          <StaticImage
            src="../images/massbit_edu.png"
            placeholder="blurred"
            alt="Massbit Education"
          />
        </div>
      </div>
      <div className="brand-details-section">
        <div className="brand-details-section__brand-image-container">
          <StaticImage
            src="../images/massbit_logo_detail.png"
            placeholder="blurred"
            alt="Massbit Logo Detail"
          />
        </div>
        <p className="brand-details-section__details-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
          mattis mi. Curabitur condimentum volutpat elit, ac condimentum erat
          tincidunt et. Morbi dignissim, mauris eget pellentesque pulvinar, diam
          odio accumsan sem, ac pulvinar urna leo nec eros. Vestibulum mattis
          turpis in leo laoreet suscipit.
        </p>
      </div>
      <div className="colors-row-container">
        <div className="colors-row-container__blue-container">
          <span>#1A1A42</span>
        </div>
        <div className="colors-row-container__red-container">
          <span>#F44336</span>
          <span className="red-container-bottom-text">#FF2C4A</span>
        </div>
      </div>
      <div className="logo-usage-columns">
        <div className="logo-usage-columns__column-element">
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
        </div>
        <div className="logo-usage-columns__column-element">
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
        </div>
        <div className="logo-credits-container">
          <div className="logo-credit-image-container">
            <StaticImage
              src="../images/massbit_powered_by.png"
              placeholder="blurred"
              alt="Powered by Massbit"
            />
          </div>
          <div className="logo-credit-image-container">
            <StaticImage
              src="../images/massbit_made_by.png"
              placeholder="blurred"
              alt="Made by Massbit"
            />
          </div>
        </div>
        <div className="footer-section">
          <div className="background-dark-circle" />
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
          <div className="footer-credits">
            <h1>🎉🎉🎉</h1>
            <span className="footer-credits__version">v1.0.0</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Massbit Branding</title>
