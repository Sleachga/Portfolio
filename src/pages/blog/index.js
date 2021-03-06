import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

// Add tags
// Add navigation by year/month

const BlogPage = ({ data }) => {
  return (
    <Layout page="blog" pageTitle="Blog Posts">
      <div>
        {data.allMdx.nodes.map((node, i) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            {i < data.allMdx.nodes.length - 1 && <hr />}
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
