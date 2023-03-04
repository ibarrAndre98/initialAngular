import { commonEnv } from "./environment.common";

const env: Partial<typeof commonEnv> = {
    production: true,
    environmentName: "production",
    key: "qwertyuiop"
};

export const environment = { ...commonEnv, ...env };