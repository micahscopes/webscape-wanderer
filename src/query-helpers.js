export const DOWNSTREAM_FROM = 'http://webscape.wanderer#downstream-from'

// This query selects all the projects that depend on the given project, directly or indirectly.
// It returns dependents of the given project, but not each of their direct dependencies.
export const downstreamQuery = startNode => `
  PREFIX sources: <${DOWNSTREAM_FROM}>
  SELECT DISTINCT ?downstream WHERE {
    ?downstream sources:* ${startNode} .
  }
`;

export const upstreamQuery = startNode => `
  PREFIX sources: <${DOWNSTREAM_FROM}>
  SELECT DISTINCT ?upstream WHERE {
    ${startNode} sources:* ?upstream .
  }
`;

// This query selects all the projects that depend on the given project, directly or indirectly.
// It returns dependents of the given project along with each of their direct dependencies (using a subquery).
export const downstreamDependentsDependenciesQuery = startNode => `
  PREFIX sources: <${DOWNSTREAM_FROM}>
  SELECT DISTINCT ?downstream ?upstream WHERE {
    ?upstream sources:* <${startNode}> .
    ?downstream sources: ?upstream .
  }
`;

// this query selects all the projects that the given project depends on, directly or indirectly.
export const upstreamDependentsDependenciesQuery = startNode => `
  PREFIX sources: <${DOWNSTREAM_FROM}>
  SELECT DISTINCT ?downstream ?upstream WHERE {
    <${startNode}> sources:* ?downstream .
    ?downstream sources: ?upstream .
  }
  `;

export const directDownstreamQuery = startNode => `
  PREFIX sources: <${DOWNSTREAM_FROM}>
  SELECT DISTINCT ?downstream WHERE {
    ?downstream sources: <${startNode}> .
  }`

export const directUpstreamQuery = startNode => `
  PREFIX sources: <${DOWNSTREAM_FROM}>
  SELECT DISTINCT ?upstream WHERE {
    <${startNode}> sources: ?upstream .
  }`
