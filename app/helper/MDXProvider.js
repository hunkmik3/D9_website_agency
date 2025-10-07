"use client";

import { MDXProvider } from '@mdx-js/react';
import shortcodes from '../../layouts/shortcodes/all.js';

export default function CustomMDXProvider({ children }) {
  return (
    <MDXProvider components={shortcodes}>
      {children}
    </MDXProvider>
  );
} 