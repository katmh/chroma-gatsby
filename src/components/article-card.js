/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { transparentize } from "@theme-ui/color"

const ArticleCard = ({ node, horizontal }) => {
  const styles = {
    link: {
      textDecoration: "none",
      color: "primary",
    },
    title: {
      fontFamily: "heading",
      fontSize: 4,
      m: 0,
      mb: 2,
      color: "secondary",
      lineHeight: "120%"
    },
    byline: {
      color: transparentize("text", 0.15),
      mt: 1,
      mb: 2,
    },
    excerpt: {
      fontFamily: "body",
      fontSize: 2,
    },
    image: {
      maxWidth: "100%",
      mb: 2,
    },
    imageContainer: {
      width: "100%",
    }
  }

  return (
    <article
      sx={{
        my: "3rem",
        display: horizontal ? "flex" : "block"
      }}
    >
      <div sx={styles.imageContainer}>
        <Link
          to={"/p/" + node.frontmatter.path}
        >
          <img 
            src={node.frontmatter.image}
            alt="To do"
            sx={styles.image}
          />
        </Link>
      </div>
      <div
        sx={{
          ml: horizontal ?  "1.5rem" : 0
        }}
      >
        <Link
          to={"/p/" + node.frontmatter.path}
          sx={styles.link}
        >
          <h1 sx={styles.title}>
            {node.frontmatter.title}
          </h1>
        </Link>
        <p sx={styles.byline}>
          By {node.frontmatter.author}, {node.frontmatter.date}
        </p>
        <div
          sx={styles.excerpt}
          dangerouslySetInnerHTML={{ __html: node.excerpt }}
        />
      </div>
    </article>
  )
}

export default ArticleCard
