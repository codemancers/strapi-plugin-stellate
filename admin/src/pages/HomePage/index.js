/**
 *
 * HomePage
 *
 */
import React from "react";
import { Box } from "@strapi/design-system/Box";
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { ClearCache } from "../../components/ClearCache";

const HomePage = () => {
  return (
    <div>
      <BaseHeaderLayout title="Refresh Stellate cache" as="h2" />
      <Box background="neutral100">
        <ContentLayout>
          <ClearCache />
        </ContentLayout>
      </Box>
    </div>
  );
};

export default HomePage;
