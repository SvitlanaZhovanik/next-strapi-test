module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "SvitlanaZhovanik@i.ua",
        defaultReplyTo: "SvitlanaZhovanik@i.ua",
      },
    },
  },
});
