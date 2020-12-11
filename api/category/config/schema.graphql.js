const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  query: `
    categoryBySlug(slug: String): Category
  `,
  resolver: {
    Query: {
      categoryBySlug: {
        resolverOf: "category.findOne",
        async resolver(_, { slug }) {
          const entity = await strapi.services.category.findOne({ slug });
          return sanitizeEntity(entity, {
            model: strapi.models.category,
          });
        },
      },
    },
  },
};
