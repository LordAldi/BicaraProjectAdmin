const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  query: `
    videoBySlug(slug: String): Video
  `,
  resolver: {
    Query: {
      videoBySlug: {
        resolverOf: "video.findOne",
        async resolver(_, { slug }) {
          const entity = await strapi.services.video.findOne({ slug });
          return sanitizeEntity(entity, {
            model: strapi.models.video,
          });
        },
      },
    },
  },
};
