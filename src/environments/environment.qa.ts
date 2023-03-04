import { commonEnv } from "./environment.common";

const env: Partial<typeof commonEnv> = {
    production: true,
    environmentName: "qa",
    key: "asdfghjkl"
};

export const environment = { ...commonEnv, ...env };