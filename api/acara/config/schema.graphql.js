const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  query: `
    acaraBySlug(slug: String): Acara
  `,
  resolver: {
    Query: {
      acaraBySlug: {
        resolverOf: "acara.findOne",
        async resolver(_, { slug }) {
          const entity = await strapi.services.acara.findOne({ slug });
          return sanitizeEntity(entity, {
            model: strapi.models.acara,
          });
        },
      },
    },
  },
};
