import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import HeightCalculator from '../components/heightCalculator';

const IndexPage = ({ data }) => (
  <Layout siteTitle={data.site.siteMetadata.title} parks={data.allSanityPark.edges}>
    <HeightCalculator parks={data.allSanityPark.edges} />
  </Layout>
);

export const query = graphql`
  query MainQuery {
    site {
      siteMetadata {
        title
      }
    }
    allSanityPark(sort: { fields: display_order, order: ASC }) {
      edges {
        node {
          _id
          title
          slug {
            current
          }
          rides {
            _id
            title
            type
            slug {
              current
            }
            height_restriction
            duration
            single_rider
            rider_swap
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;
