"use strict";

/**
 * form service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::form.form", (strapi) => ({
  async create(params) {
    const { email } = params.data;
    console.log("email:", email);
    await super.create(params);
    await strapi.plugins["email"].services.email.send({
      to: email,
      subject: "Hello kitty",
      text: "It is test email send!",
      html: "It is test email send!",
    });

    return params.send({
      ok: true,
    });
  },
}));
