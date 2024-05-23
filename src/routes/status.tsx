import templates from '@reactresume/template';

import { useMeta } from '../contexts/MetaContext';
import { useData } from '../contexts/DataContext';

export default function Status() {
  const meta = useMeta();
  const { raw } = useData();
  const isLoaded = Boolean(raw);

  return (
    <div className="container">
      <h1>App Status</h1>
      <h2 className="mt-4">Source</h2>
      <table className="table table-hover d-inline-block">
        <tbody>
          <tr>
            <th>Data loaded?</th>
            <td>
              <code>{isLoaded.toString()}</code>
            </td>
          </tr>
          <tr>
            <th>Source type</th>
            <td>{meta.source.type}</td>
          </tr>
          <tr>
            <th>URL</th>
            <td>{meta.source.url}</td>
          </tr>
          <tr>
            <th>File name</th>
            <td>{meta.source.fileName}</td>
          </tr>
        </tbody>
      </table>

      <h2>Sections</h2>
      <SectionStatus />
    </div>
  );
}

function SectionStatus() {
  const { raw, parsed } = useData();

  if (!raw) {
    return <code>no data</code>;
  }

  const sectionList = new Set<string>();

  const rawSectionsList = Object.keys(raw);
  const parsedSectionsList = Object.keys(parsed);
  const templateSectionsList = templates.map((t) => t.id);

  parsedSectionsList.forEach((section) => sectionList.add(section));
  rawSectionsList.forEach((section) => sectionList.add(section));
  templateSectionsList.forEach((section) => sectionList.add(section));

  return (
    <table className="table d-inline-block">
      <thead>
        <tr>
          <th>Section</th>
          <th>Raw</th>
          <th>Parsed</th>
          <th>Templates</th>
        </tr>
      </thead>
      <tbody>
        {Array.from(sectionList).map((s) => (
          <tr>
            <th>{s}</th>
            <td>
              <code>{rawSectionsList.includes(s).toString()}</code>
            </td>
            <td>
              <code>{parsedSectionsList.includes(s).toString()}</code>
            </td>
            <td>
              <code>{templateSectionsList.includes(s).toString()}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
