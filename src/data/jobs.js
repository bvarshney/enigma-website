import { gql } from "@apollo/client";

export const JOB_FIELDS = gql`
  fragment JobFields on Job {
    id
    date
    slug
    title
    excerpt
    tags {
      edges {
        node {
          name
        }
      }
    }
    jobFields {
      benefits
      type
    }
    featuredImage {
      node {
        altText
        sourceUrl
      }
    }
  }
`;

export const QUERY_ALL_JOBS_INDEX = gql`
  ${JOB_FIELDS}
  query AllJobsIndex {
    jobs(first: 1000, where: { hasPassword: false }) {
      edges {
        node {
          ...JobFields
        }
      }
    }
  }
`;

export const QUERY_ALL_JOBS_ARCHIVE = gql`
  ${JOB_FIELDS}
  query AllJobsArchive {
    jobs(first: 1000, where: { hasPassword: false }) {
      edges {
        node {
          ...JobFields
        }
      }
    }
  }
`;

export const QUERY_ALL_JOBS = gql`
  ${JOB_FIELDS}
  query AllJobs {
    jobs(first: 1000, where: { hasPassword: false }) {
      edges {
        node {
          ...JobFields
        }
      }
    }
  }
`;

export const QUERY_JOB_BY_SLUG = gql`
  query JobBySlug($slug: ID!) {
    job(id: $slug, idType: SLUG) {
      title
      slug
      id
      excerpt
      content
      modified
      jobFields {
        bgimage {
          node {
            altText
            sourceUrl
          }
        }
        experience
        location
        salary
        type
      }
      seo {
        title
        description
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

export const QUERY_ALL_JOB_SLUGS = gql`
  query AllJobSlugs {
    jobs(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;
