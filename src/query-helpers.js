export const DEPENDS_ON = 'http://dat-ecosystem.org#dependson'
export const OWNS = 'http://dat-ecosystem.org#owns'

// This query selects all the projects that depend on the given project, directly or indirectly.
// It returns dependents of the given project, but not each of their direct dependencies.
export const downstreamDependentsQuery = startProject => `
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependent WHERE {
    ?dependent dependson:* ${startProject} .
  }
`;

export const upstreamDependenciesQuery = startProject => `
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependency WHERE {
    ${startProject} dependson:* ?dependency .
  }
`;

// This query selects all the projects that depend on the given project, directly or indirectly.
// It returns dependents of the given project along with each of their direct dependencies (using a subquery).
export const downstreamDependentsDependenciesQuery = startProject => `
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependent ?dependency WHERE {
    ?dependency dependson:* <${startProject}> .
    ?dependent dependson: ?dependency .
  }
`;

// this query selects all the projects that the given project depends on, directly or indirectly.
export const upstreamDependentsDependenciesQuery = startProject => `
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependent ?dependency WHERE {
    <${startProject}> dependson:* ?dependent .
    ?dependent dependson: ?dependency .
  }
  `;

export const directDependentsQuery = startProject => `
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependent WHERE {
    ?dependent dependson: <${startProject}> .
  }`

export const directDependenciesQuery = startProject => `
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependency WHERE {
    <${startProject}> dependson: ?dependency .
  }`
