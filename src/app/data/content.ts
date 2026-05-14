export interface Service {
  id: string;
  num: string;
  title: string;
  tagline: string;
  body: string;
  capabilities: string[];
}

export interface TeamMember {
  role: string;
  name: string;
  focus: string;
  bio: string;
  tags: string[];
  initials: string;
  isPrincipal?: boolean;
}

export interface WorkItem {
  year: string;
  title: string;
  kind: string;
  summary: string;
  stack: string[];
  highlight?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const SERVICES: Service[] = [
  {
    id: 'desktop',
    num: '01',
    title: 'Desktop Applications',
    tagline: 'Native-grade, cross-platform, cryptographically sound.',
    body: 'web apps that feel as fast as the hardware they run on. Offline-first, secure by construction, and shipped to macOS, Windows, and Linux from a single codebase. Our security vaults are built on this exact stack.',
    capabilities: ['Rust', 'Offline-first sync', 'IOTA Stronghold', 'Auto-update + signing']
  },
  {
    id: 'web',
    num: '02',
    title: 'Custom Websites & Web Apps',
    tagline: 'From marketing sites to complex SaaS dashboards.',
    body: 'Angular, React, TypeScript. Design systems that scale, component libraries that survive redesigns, and a bias toward web standards over trend-chasing.',
    capabilities: ['Angular / React / Next', 'Design systems', 'Real-time (WS, WebRTC)', 'SSR & edge delivery']
  },
  {
    id: 'database',
    num: '03',
    title: 'Databases & Data Architecture',
    tagline: 'Graphs, relational, event streams — modelled properly.',
    body: 'Knowledge graphs that reflect how humans actually think, schemas that age well, and migrations that do not keep you up at night.',
    capabilities: ['Postgres + extensions', 'Graph (Neo4j, Arango, SurrealDB)', 'Event sourcing', 'CRDT-backed stores']
  },
  {
    id: 'identity',
    num: '04',
    title: 'Identity & Zero-Knowledge web3',
    tagline: 'Self-sovereign identity without the hand-waving.',
    body: 'Verifiable credentials, DIDs, and ZK circuits smart contracts that let users prove what they must without revealing what they should not. Odyssey Hackathon SSI winners — this is one of our core specialties.',
    capabilities: ['DIDs & VCs', 'Noir ZK circuits', 'Selective disclosure', 'Recursive proofs']
  },
  {
    id: 'dao',
    num: '05',
    title: 'DAOs & Governance web3',
    tagline: 'Coordination infrastructure humans actually use.',
    body: 'Private governance on Ethereum — votes that are confidential by default, not by opt-in. Token-weighted and reputation-weighted schemes, treasury tooling, and coordination modules grounded in years of p2p and decentralised infrastructure work.',
    capabilities: ['Aztec zkp', 'Private voting', 'Treasury automation', 'Reputation systems']
  },
  {
    id: 'wallet',
    num: '06',
    title: 'Wallets & Key Management',
    tagline: 'Multi-chain wallets and custody that respect users.',
    body: 'Rust-native wallets with hardware-equivalent security guarantees. BIP39/44 derivation, in-vault signing, social recovery, account abstraction. Ethereum, Solana, IOTA, Aztec — built from cryptographic primitives up, never duct-taped together.',
    capabilities: ['IOTA Stronghold', 'Multi-curve (secp256k1, Ed25519, sr25519)', 'In-vault signing', 'Social recovery']
  },
  {
    id: 'p2p',
    num: '07',
    title: 'Peer-to-Peer Infrastructure',
    tagline: 'Systems that work without a centre.',
    body: 'libp2p for transport and discovery, IPFS for content-addressed storage, DHT for bandwidth-aware coordination for agent-centric applications. CRDTs where conflict resolution matters. Offline-first is not a slogan here — it is a design constraint.',
    capabilities: ['libp2p + mDNS', 'IPFS content addressing', 'DHT coordination', 'eventual consistency, distributed storage with CRDTs']
  },
  {
    id: 'ai',
    num: '08',
    title: 'AI & Knowledge Graphs',
    tagline: 'LLMs grounded in structured, verifiable knowledge.',
    body: 'RAG that actually retrieves, agentic systems with guardrails, and knowledge graphs that turn an organization\u2019s tacit memory into queryable infrastructure.',
    capabilities: ['Agentic systems', 'RAG over graphs', 'MCP integrations', 'Fine-tuning + evals']
  },
  {
    id: 'saas',
    num: '09',
    title: 'SaaS Product Engineering',
    tagline: 'Zero to launch, or rescued from legacy rot.',
    body: 'End-to-end SaaS: auth, CRM, billing, admin, analytics, infra. We embed as fractional engineering leadership or deliver full teams — depending on what you need.',
    capabilities: ['Multi-tenant from day one', 'Stripe + billing', 'CRM', 'Observability', 'CI/CD + DevOps']
  }
];

export const TEAM: TeamMember[] = [
  {
    role: 'CTO Principal & Protocol Engineer',
    name: 'Thomas Cal',
    focus: 'Systems Architecture',
    bio: '20+ years building systems that outlive their trends. Core contributor to Holochain. Cryptography work across Mina, Nillion, Aztec and others. Winner of various hackathons, including the Odyssey SSI track. Major contributor to open-source projects.',
    tags: ['Rust', 'TypeScript', 'Ethereum', 'p2p/dht', 'Python', 'Go', 'libp2p', 'ZKPs'],
    initials: 'TC',
    isPrincipal: true
  },
  {
    role: 'Network — Senior Full-stack',
    name: 'Vetted collaborator',
    focus: 'Angular / React / Node · Web Design + systems',
    bio: 'Engineers brought in per engagement. Each has shipped production systems at scale and passed a paid technical trial before joining an engagement.',
    tags: ['TypeScript', 'Node', 'Postgres/MongoDB', 'Express/Koa'],
    initials: '01'
  },
  {
    role: 'Network — ZK Circuit Engineer',
    name: 'Vetted collaborator',
    focus: 'Rust/GO cryptography',
    bio: 'Cryptography specialists who write ZK proofs and Rust primitives. Engaged for private voting, identity, and protocol work where correctness is not negotiable.',
    tags: ['Noir', 'Aztec', 'Rust', 'ZKPs'],
    initials: '02'
  },
  {
    role: 'Network — AI Engineer',
    name: 'Vetted collaborator',
    focus: 'LLMs · Agentic systems · Evals',
    bio: 'Practitioners who have shipped production LLM systems — not demo-tier prototypes. Grounded in evals, observability, and retrieval that works.',
    tags: ['Python', 'LangGraph', 'MCP', 'RAG'],
    initials: '03'
  },
  {
    role: 'Network — Product Designer',
    name: 'Vetted collaborator',
    focus: 'Product design · Design systems',
    bio: 'Designers who understand the constraints of crypto UX and AI interfaces. Partnered with per engagement when a project demands it.',
    tags: ['Figma', 'Design systems', 'Motion'],
    initials: '04'
  }
];

export const WORK: WorkItem[] = [
  {
    year: '2026',
    title: 'Zenith — Identity & Key Management Core',
    kind: 'ZK Ecosystem · Flagship',
    summary: 'A self-sovereign, Rust-native vault for identity, credentials, and blockchain key management. desktop app with a Stronghold core, BIP39/44 HD key derivation, in-vault signing across secp256k1/Ed25519/sr25519, and p2p sync via libp2p over LAN and Tailscale. The trust anchor for the entire ZKP privacy-first stack.',
    stack: ['Rust', 'DApp', 'IOTA Stronghold', 'libp2p', 'privacy-first design'],
    highlight: 'Flagship'
  },
  {
    year: '2026',
    title: 'ZK delegated ballot voting ',
    kind: 'Aztec Ecosystem, ZKP - circuits + smart contracts',
    summary: 'Noir smart contracts for delegated agent based voting on the ethereum network. Aztec framework desktop app.',
    stack: ['Rust', 'DApp', 'Aztec', 'Noir'],
    highlight: 'prototyping'
  },
  {
    year: '2025',
    title: 'Oracle federation network',
    kind: 'Orpherium framework ',
    summary: 'distributed oracle-based knowledge graph framework engineered to significantly enhance neural-symbolic reasoning processes within AGI systems. Employing a distributed tetrahedral hierarchy of specialized agent nodes (Aggregators, Coherents, Oracles, and Sage Oracles). ',
    stack: ['Rust', 'Python', 'Local LLM-RAG models', 'Cryptography'],
    highlight: 'R&D'
  },
  {
    year: '2025',
    title: 'Recursive ZKP Prototype',
    kind: 'Mina Protocol + Nillion',
    summary: 'Privacy-respecting infrastructure exploring recursive proofs at scale. Written in TypeScript with o1js. Rust implementation of the Chaum-Pedersen zero-knowledge protocol for cryptographic validation in blind computation.',
    stack: ['TypeScript', 'o1js', 'ZKP', 'Rust', 'Cryptography'],
    highlight: 'R&D + prototypes'
  },
  {
    year: '2024',
    title: 'InterMedium',
    kind: 'Decentralized identity platform',
    summary: 'Wallet integration across Ethereum, Solana, and Holochain. ZK-based identity validation and ranking systems.',
    stack: ['Holochain', 'Rust', 'ZKPs', 'Multi-chain'],
    highlight: 'prototyping'
  },
  {
    year: '2023→ongoing',
    title: 'Memetic Activation Platform',
    kind: 'core team',
    summary: 'A system for distributed sense-making and self-sovereign computing.',
    stack: ['Rust', 'p2p', 'git-merkles', 'IPFS', 'Knowledge graphs'],
    highlight: 'Ongoing'
  },
  {
    year: '2020',
    title: 'Ridesharing SaaS app',
    kind: 'Netherlands',
    summary: 'Netherlands Uber alternative ridesharing app.',
    stack: ['Microservice architecture', 'AWS+Azure', 'Docker/Kubernetes'],
    highlight: 'past work'
  },
  {
    year: '2020',
    title: 'Decentralized energy',
    kind: 'NL Energy Transition Project',
    summary: 'Renewable energy solutions. Individual sovereignty of energy production and consumption.',
    stack: ['Enterprise Java', 'Angular', 'financial algorithms'],
    highlight: 'past work'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'A top-tier software engineer, always delivering quality solutions and creating a motivating team environment.',
    author: 'Ernest P.',
    role: 'Embarcadero'
  },
  {
    quote: 'Deep knowledge and creative insight. Passionate about tech and always proposing improvements.',
    author: 'Jiri H.',
    role: 'AVG Technologies'
  },
  {
    quote: 'Built scalable data systems in security and infrastructure domains. Always delivers under pressure.',
    author: 'Josep G.',
    role: 'CTO, Evolium'
  },
  {
    quote: 'Versatile and dependable, adapted across projects and platforms with high professionalism.',
    author: 'Abraham C.',
    role: 'Anakena Group'
  }
];
