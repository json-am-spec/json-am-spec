// src/schema.ts
// JSON-AM v0.1.2-draft core types
// Spec: https://json-am.org/context/v0.1
// ATIR Prototype schema - Agent Task Interchange Record

export type URIScheme = 'memory' | 'context' | 'trace' | 'agent' | 'trust';

export type MemoryKind = 'episodic' | 'semantic' | 'skill';
export type ContextKind = 'session' | 'project' | 'trust';
export type Action = 'read' | 'write' | 'link' | 'delegate';

export type EdgeType =
  | 'derives_from' | 'contradicts' | 'supports' | 'implements'
  | 'depends_on' | 'precedes' | 'follows' | 'refines'
  | 'authored_by' | 'observed_in' | 'used_in' | 'mentions'
  | 'links_to';

export interface JWS {
  alg: 'EdDSA';
  kid: string;
  signature: string;
}

export interface ProvenanceChain {
  parentId?: string[];
  contextRefs?: string[];
  traceRefs?: string[];
  createdBy: string;
  createdAt: string;
  wasDerivedFrom?: string[];
}

export interface JSONAMEnvelopeBase {
  '@context': 'https://json-am.org/context/v0.1';
  id: string;
  type: string;
  uriScheme: URIScheme;
  trustDomain: string;
  version: string;
  issuedAt: string;
  expiresAt?: string;
  provenance: ProvenanceChain;
  signature?: JWS;
}

export interface MemoryRecord extends JSONAMEnvelopeBase {
  type: 'Memory';
  memoryKind: MemoryKind;
  content: {
    title: string;
    body: string | Record<string, unknown>;
    metadata?: Record<string, unknown>;
  };
  links: Array<{
    id: string;
    rel: EdgeType;
    target: string;
  }>;
}

export interface ContextEnvelope extends JSONAMEnvelopeBase {
  type: 'Context';
  contextKind: ContextKind;
  scope: string;
  includes: string[];
  ttl?: string;
}

export interface TraceStep {
  stepId: string;
  action: string;
  reasoning: string;
  inputRefs: string[];
  outputRefs: string[];
  timestamp: string;
}

export interface ReasoningTrace extends JSONAMEnvelopeBase {
  type: 'ReasoningTrace';
  runId: string;
  model?: string;
  inputs: string[];
  outputs: string[];
  steps: TraceStep[];
}

export interface ATIR extends JSONAMEnvelopeBase {
  type: 'ATIR';
  task: string;
  boundContext: string[];
  memoryLinks: string[];
  traceLink?: string;
  replayable: boolean;
}

export interface CapabilityTokenPayload {
  iss: string;
  sub: string;
  aud: string;
  exp: number;
  nbf?: number;
  iat: number;
  jsonam: {
    domains: string[];
    actions: Action[];
    resources: Array<{
      scheme: URIScheme;
      pattern?: string;
    }>;
    conditions?: Record<string, unknown>;
  };
}

export interface ResolveRequest {
  uri: string;
  capability?: string;
}

export type Envelope = MemoryRecord | ContextEnvelope | ReasoningTrace | ATIR;
