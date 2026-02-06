import fs from 'node:fs';

import type { RuleDefinition, RuleDefinitionTypeOptions } from '@eslint/core';
import type { ESLint } from 'eslint';

const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

const plugin: ESLint.Plugin = {
    meta: {
        name: pkg.name,
        version: pkg.version,
        namespace: pkg.name.replace('eslint-plugin-', ''),
    },
    rules: {
        'no-relative-import': {
            meta: {
                type: 'problem',
                docs: {
                    description: 'Forbid relative imports.',
                },
                schema: [
                    {
                        type: 'object',
                        properties: {
                            depth: {
                                type: 'number',
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
            create(context) {
                const [{ depth = -1 }] = context.options;

                return {
                    ImportDeclaration(node) {
                        let pathDepth = -1;
                        if (node.source.value.startsWith('./')) {
                            pathDepth = 0;
                        }

                        let path = node.source.value;
                        while (path.startsWith('../')) {
                            pathDepth++;
                            path = path.substring(3);
                        }

                        if (pathDepth >= 0 && pathDepth > depth) {
                            context.report({
                                node,
                                message:
                                    'Relative imports are not allowed. Use a root relative import like "~/" instead.',
                            });
                        }
                    },
                };
            },
        } satisfies RuleDefinition<
            RuleDefinitionTypeOptions & {
                RuleOptions: [{ depth?: number }];
            }
        >,
    },
};

export default plugin;
