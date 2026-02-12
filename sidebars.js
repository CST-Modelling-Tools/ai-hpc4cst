// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  projectSidebar: [
    'intro',

    {
      type: 'category',
      label: 'Project',
      items: [
        'project/objectives',
        'project/work-packages',
        'project/timeline',
        'project/funding',
      ],
    },

    {
      type: 'category',
      label: 'Research',
      items: [
        'research/overview',
        'research/ai-methods',
        'research/hpc-integration',
        'research/pilot-problems',
      ],
    },

    {
      type: 'category',
      label: 'Tools',
      items: ['tools/overview'],
    },

    {
      type: 'category',
      label: 'Results',
      items: [
        'results/publications',
        'results/software',
      ],
    },

    {
      type: 'category',
      label: 'Team & Partners',
      items: [
        'team/core-team',
        'team/collaborators',
      ],
    },

    'contact',
  ],
};

export default sidebars;