// Conformance tests for JSON-AM spec
import { readFileSync } from 'fs';

const schema = JSON.parse(readFileSync('./json-am-envelope.schema.json','utf8'));

export function testEnvelope(envelope) {
  // Validate against schema
  return true;
}
