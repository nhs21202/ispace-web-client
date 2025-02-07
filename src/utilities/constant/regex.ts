export const EMAIL_REGEX =
  // eslint-disable-next-line no-useless-escape
  /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

export const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const SCRIPT_REGEX = /<script([\s\S]*?)<\/script>/g;

export const PHONE_REGEX = /^0[0-9]{9}$/;
