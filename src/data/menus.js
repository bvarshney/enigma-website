import { gql } from '@apollo/client';

export const QUERY_ALL_MENUS = gql`
  query AllMenus {
    menus {
      edges {
        node {
          id
          menuItems {
            edges {
              node {
                cssClasses
                id
                label
                path
              }
            }
          }
          name
          slug
          locations
        }
      }
    }
  }

`;
