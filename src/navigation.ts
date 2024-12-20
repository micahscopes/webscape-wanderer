import navigation from "@very-simple/router";
import { getGraphData } from "./data";
import {
  selectNodeAndDownstreamDependents,
  selectNothingAndZoomOut,
} from "./selection";

export default navigation;

navigation.route("#-", () => {
  console.debug("navigating to nothing");
  // selectNothingAndZoomOut()
});

navigation.route("#node/:id", async (params, { trigger }) => {
  // console.debug('navigating to', params, action, 'project')
  // const { nodesByNavId } = await getGraphData();
  // const node = nodesByNavId[params.id];
  // selectNodeAndDownstreamDependents(node, trigger !== "init");
});
