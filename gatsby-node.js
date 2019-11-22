/*
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityPark {
        edges {
          node {
            _id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allSanityPark.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug.current}`,
      component: require.resolve('./src/components/test.js'),
      context: { slug: edge.node.slug.current },
    });
  });
};
*/
