# JSON-AM Specification v0.1.2-draft

## 1. Introduction
JSON Addressable Memory defines a URI-addressable envelope format for agent memories, contexts, reasoning traces and Agent Task Interchange Records.

## 2. Problem Statement
Agents lack stable, portable, auditable memory. Current systems store blobs in vector DBs with no stable identity.

## 3. Design Principles
Addressable, portable, signed, auditable, composable.

## 4. Terminology
CARMA, ATIR, Envelope, Trust Domain.

## 5. URI Schemes
memory://, context://, trace://, agent://, trust://
RFC 3986 compliant.

## 6. Envelope Format
Base envelope: @context, id, type, uriScheme, trustDomain, version, issuedAt, provenance, signature.
MemoryRecord, ContextEnvelope, ReasoningTrace, ATIR.

## 7. Capability Tokens
JWT RFC7519 with jsonam claims: domains, actions, resources.
Signed with EdDSA.

## 8. Link Engine
Edge types registry. Graph traversal.

## 9. Trust Domains and Federation
Trust domains isolated. Federation via ANS/DNS-AID.

## 10. Transport
HTTP REST /resolve, /memory, /capability
MCP resources and tools
Direct file for dev.

## 11. Adapters
Postgres, Markdown, Graphiti, File.

## 12. Security
JWS signing, JWT verification, capability enforcement.

## 13. Provenance
W3C PROV aligned.

## 14. Examples
Create, grant, resolve, lifecycle.

## 15. References
MCP, A2A, JSON Schema, RFC7519, RFC7515.
