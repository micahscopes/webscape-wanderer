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


// This query selects all the projects that depend on the given project, directly or indirectly.
// It returns dependents of the given project along with each of their direct dependencies (using a subquery).
export const downstreamDependentsDependenciesQuery = startProject => `
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependent ?dependency WHERE {
    ?dependency dependson:* <${startProject}> .
    ?dependent dependson: ?dependency .
  }
`;


export const directDependentsQuery = startProject => `
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependent
  WHERE {
      <${startProject}> dependson: ?dependent
  }
`;
