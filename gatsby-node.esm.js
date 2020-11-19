import jobs from "./src/jobs";
import path from "path";

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  jobs.map((job) =>
    createPage({
      path: `job/${job.id}`,
      component: path.resolve('./src/pages/job.jsx'),
      context: {
        job
      }
    })
  );
}
