const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  query: `
    classBySlug(slug: String): Class
  `,
  resolver: {
    Query: {
      classBySlug: {
        resolverOf: "class.findOne",
        async resolver(_, { slug }) {
          const entity = await strapi.services.class.findOne({ slug });
          return sanitizeEntity(entity, {
            model: strapi.models.class,
          });
        },
      },
    },
  },
};
