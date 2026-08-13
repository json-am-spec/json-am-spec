# JSON-AM Spec v0.1.2-draft

## 1. Introduction
JSON Addressable Memory defines URI-addressable envelopes for agents.

## 2. URI Schemes
memory://, context://, trace://, agent://, trust://

## 3. Envelope Format
All envelopes include @context, id, type, uriScheme, trustDomain, version, issuedAt, provenance, signature

## 4. Capability Tokens
JWT with jsonam claims

## 5. Trust Domains
Isolated namespaces with key pairs

## 6. Transport
HTTP, MCP

## 7. Examples
...
