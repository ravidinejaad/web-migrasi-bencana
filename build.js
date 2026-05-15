#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Run vite build using Node.js directly
const vitePath = join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');
const child = spawn('node', [vitePath, 'build'], {
  stdio: 'inherit',
  cwd: __dirname
});

child.on('close', (code) => {
  process.exit(code);
});