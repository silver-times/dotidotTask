import data from "../data/data.json";

export const nodesConfigurations = [
  {
    data: data.data.feedExports.feedExports,
    color: "#006400",
    isVariable: false,
  },
  {
    data: data.data.variables.variables,
    color: "#b91c1c",
    isVariable: true,
  },
  {
    data: data.data.campaignSettings.campaignSettings,
    color: "#6495ED",
    isVariable: false,
  },
  {
    data: data.data.additionalSources.additionalSources,
    color: "#a21caf",
    isVariable: false,
  },
  {
    data: data.data.campaignSettings.campaignSettings[0].adwordsSetting
      ? [data.data.campaignSettings.campaignSettings[0].adwordsSetting]
      : [],
    color: "#FFA500",
    isVariable: false,
  },
  {
    data: data.data.campaignSettings.campaignSettings[0].keywordSettings,
    color: "#FAA510",
    isVariable: false,
  },
  {
    data: data.data.campaignSettings.campaignSettings[0].baseAdtexts,
    color: "#0D5DDD",
    isVariable: false,
  },
  {
    data: data.data.campaignSettings.campaignSettings[0].bidRules,
    color: "#F5A240",
    isVariable: false,
  },
];

export const edgesConfigurations = [
  {
    source: data?.data.feedExports.feedExports,
    target: data.data.variables.variables,
    labelWithoutCondition: "used in",
    labelWithCondition: "used with condition in",
  },
  {
    source: data.data.additionalSources.additionalSources,
    target: data.data.variables.variables,
    labelWithoutCondition: "mapped with",
    labelWithCondition: "mapped with",
  },
  {
    source: data.data.campaignSettings.campaignSettings,
    target: data.data.variables.variables,
    labelWithoutCondition: "used in",
    labelWithCondition: "used with condition in",
  },
  {
    source: data.data.campaignSettings.campaignSettings[0].adwordsSetting,
    target: data.data.variables.variables,
    labelWithoutCondition: "used in",
    labelWithCondition: "used with condition in",
  },
  {
    source: data.data.campaignSettings.campaignSettings[0].keywordSettings,
    target: data.data.variables.variables,
    labelWithoutCondition: "used in",
    labelWithCondition: "used with condition in",
  },
  {
    source: data.data.campaignSettings.campaignSettings[0].baseAdtexts,
    target: data.data.variables.variables,
    labelWithoutCondition: "used in",
    labelWithCondition: "used with condition in",
  },
  {
    source: data.data.campaignSettings.campaignSettings[0].bidRules,
    target: data.data.variables.variables,
    labelWithoutCondition: "used in",
    labelWithCondition: "used with condition in",
  },
  {
    source: data.data.variables.variables,
    target: data.data.variables.variables,
    labelWithoutCondition: "used in",
    labelWithCondition: "depends on",
  },
];

export const graphOptions = {
  layout: {
    hierarchical: {
      enabled: true,
    },
  },
  edges: {
    color: "#ccc",
    smooth: {
      type: "curvedCCW",
      forceDirection: "horizontal",
      roundness: 0.4,
    },
    font: {
      color: "white",
      size: 20,
    },
  },
  nodes: {
    shape: "box",
    size: 40,
    font: {
      color: "white",
    },
  },
  physics: {
    enabled: false,
  },
  interaction: {
    hover: true,
    navigationButtons: true,
    keyboard: true,
    selectConnectedEdges: false,
    tooltipDelay: 200,
  },
};
