const { PUBLIC_MAILGUN_API_KEY: MAILGUN_API_KEY, PUBLIC_MAILGUN_DOMAIN: MAILGUN_DOMAIN } = import.meta.env;

export const MAILGUN_API_URL = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

export const MAILGUN_HEADERS = {
    Authorization: `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
    "Content-Type": "application/x-www-form-urlencoded",
};
