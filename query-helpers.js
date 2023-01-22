export const DEPENDS_ON = 'http://dat-ecosystem.org#dependson'
export const OWNS = 'http://dat-ecosystem.org#owns'

export const downstreamDependentsQuery = startProject => `
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependent WHERE {
    <${startProject}> dependson:* ?dependent .
  }
`;
export const directDependentsQuery = startProject => `
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependent
  WHERE {
      <${startProject}> dependson: ?dependent
  }
`;
