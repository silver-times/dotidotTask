import Graph from "react-graph-vis";
import {
  nodesConfigurations,
  edgesConfigurations,
  graphOptions,
} from "../config/index";

function GraphView({ data }) {
  const nodes = [];
  const edges = [];

  nodesConfigurations.forEach(({ data, color, isVariable }) => {
    createNodes(data, color, isVariable);
  });

  edgesConfigurations.forEach(
    ({ source, target, labelWithoutCondition, labelWithCondition }) => {
      createEdges(source, target, labelWithoutCondition, labelWithCondition);
    }
  );

  function createNodes(items, color, isVariable) {
    items.forEach((item) => {
      nodes.push({
        id: item.id,
        label: item.name,
        shape: isVariable ? "box" : "circle",
        color: color,
        title: item.name,
        tooltipDelay: 200,
      });
    });
  }

  function createEdges(
    sourceItems,
    targetItems,
    labelForWithoutCondition,
    labelForWithCondition
  ) {
    if (
      sourceItems.mappingField ||
      (sourceItems.mappingFields && sourceItems.mappingFields.length > 0)
    ) {
      const mappings = sourceItems.mappingField
        ? [sourceItems.mappingField]
        : sourceItems.mappingFields;
      mappings.forEach((mapping) => {
        const dependentVariable = data.data.variables.variables.find(
          (v) => v.placeholderName === mapping
        );
        if (dependentVariable)
          edges.push({
            from: sourceItems.id,
            to: dependentVariable.id,
            label: "mapped with",
          });
      });
    } else if (sourceItems.length > 0 && targetItems.length > 0) {
      sourceItems.forEach((sourceItem) => {
        targetItems.forEach((targetItem) => {
          const placeholdersWithoutConditions =
            sourceItem.getPlaceholdersWithoutConditions || [];
          const conditionsPlaceholders =
            sourceItem.getConditionsPlaceholders || [];
          if (
            placeholdersWithoutConditions.includes(targetItem.placeholderName)
          ) {
            edges.push({
              from: targetItem.id,
              to: sourceItem.id,
              label: labelForWithoutCondition,
            });
          }
          if (conditionsPlaceholders.includes(targetItem.placeholderName)) {
            edges.push({
              from: targetItem.id,
              to: sourceItem.id,
              label: labelForWithCondition,
            });
          }
        });
      });
    } else {
      const placeholdersWithoutConditions =
        sourceItems.getPlaceholdersWithoutConditions || [];
      const conditionsPlaceholders =
        sourceItems.getConditionsPlaceholders || [];
      if (placeholdersWithoutConditions.includes(targetItems.placeholderName)) {
        edges.push({
          from: targetItems.id,
          to: sourceItems.id,
          label: labelForWithoutCondition,
        });
      }
      if (conditionsPlaceholders.includes(targetItems.placeholderName)) {
        edges.push({
          from: targetItems.id,
          to: sourceItems.id,
          label: labelForWithCondition,
        });
      }
    }
  }

  return (
    <div className="h-full">
      <Graph
        graph={{ nodes, edges }}
        options={graphOptions}
        style={{ height: "100%" }}
      />
    </div>
  );
}

export default GraphView;
