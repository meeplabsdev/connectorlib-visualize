export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Scout",
  description: "Scout analytics dashboard.",
  servers: [
    {
      label: "PvPWars",
      addr: "pvpwars.net",
    },
    {
      label: "SimplyVanilla",
      addr: "simplyvanilla.net",
    },
  ],
};
