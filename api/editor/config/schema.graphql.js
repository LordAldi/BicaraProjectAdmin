const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  query: `
    editorBySlug(slug: String): Editor
  `,
  resolver: {
    Query: {
      editorBySlug: {
        resolverOf: "editor.findOne",
        async resolver(_, { slug }) {
          const entity = await strapi.services.editor.findOne({ slug });
          return sanitizeEntity(entity, {
            model: strapi.models.editor,
          });
        },
      },
    },
  },
};
