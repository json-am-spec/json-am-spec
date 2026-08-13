# JSON-AM Specification v0.1.2-draft

## Abstract
JSON Addressable Memory defines a URI-addressable envelope format for agent memories, contexts, reasoning traces and Agent Task Interchange Records with signed provenance and capability-based access control.

## 1. Introduction
JSON-AM provides a common memory layer for AI agents. It defines stable URIs for memories and a signed envelope format.

## 2. Problem Statement
Agents today store memories as opaque blobs in vector databases with no stable identity, no provenance, and no cross-agent portability.

## 3. Design Principles
Addressable, Portable, Signed, Auditable, Composable.

## 4. Terminology
CARMA: Context Addressable Reasoning and Memory Architecture
ATIR: Agent Task Interchange Record
Envelope: JSON object with @context and id

## 5. URI Schemes
memory:// - episodic, semantic, skill memories
context:// - session, project, trust contexts
trace:// - reasoning traces
agent:// - agent cards
trust:// - trust domains

All URIs are RFC 3986 compliant.

## 6. Envelope Format
Base envelope fields: @context, id, type, uriScheme, trustDomain, version, issuedAt, expiresAt, provenance, signature.

MemoryRecord: memoryKind, content, links
ContextEnvelope: contextKind, scope, includes
ReasoningTrace: runId, model, inputs, outputs, steps
ATIR: task, boundContext, memoryLinks, traceLink, replayable

## 7. Capability Tokens
JWT RFC7519 with jsonam claims:
domains: array of trust domains
actions: read, write, link, delegate
resources: scheme and pattern

## 8. Link Engine
Edge types: derives_from, contradicts, supports, implements, depends_on, precedes, follows, refines, authored_by, observed_in, used_in, mentions, links_to

## 9. Trust Domains and Federation
Trust domains are isolated namespaces with their own keys.
Federation via ANS/DNS-AID for cross-domain resolution.

## 10. Transport
HTTP GET /resolve?uri=
HTTP POST /memory
HTTP POST /capability
MCP resources and tools
Direct file for development

## 11. Adapters
Postgres adapter for agent_memory table
Markdown adapter for company files
Graphiti adapter
File adapter

## 12. Security
JWS EdDSA signing of envelopes
JWT verification of capability tokens
Capability enforcement per request
Audit logging

## 13. Provenance
W3C PROV aligned provenance chain with parentId, contextRefs, traceRefs, createdBy, createdAt

## 14. Examples
Create memory, grant capability, resolve URI, lifecycle

## 15. References
MCP, A2A, JSON Schema, RFC7519, RFC7515, W3C PROV
