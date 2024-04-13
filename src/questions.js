const Questions = [
  {
    id: 1,
    question:
      'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
    title: 'Workplace',
    options: [
      { id: 1, text: 'Don’t dare to interrupt me!', value: 0 },
      {
        id: 2,
        text: 'Interrupt and explain that you are really busy at the moment',
        value: 1,
      },
      { id: 3, text: 'Listen, but with only with half an ear', value: 2 },
      {
        id: 4,
        text: 'Think it’s more important to give them some of your time; work can wait',
        value: 3,
      },
    ],
  },
  {
    id: 2,
    question: 'Being around people makes me feel:',
    title: 'Social Life',
    options: [
      { id: 1, text: 'A bit exhausted. Being around others can be draining.', value: 0 },
      {
        id: 2,
        text: 'Energized for a while, but there are times when I would rather be alone.',
        value: 1,
      },
      { id: 3, text: 'Like I am alive!', value: 2 },
      { id: 4, text: 'Very happy and active!', value: 3 },
    ],
  },
  {
    id: 3,
    question:
      'When given a choice between working as part of a team or working as a group, I would prefer to:',
    title: 'Being a part of a team',
    options: [
      { id: 1, text: 'Work alone.', value: 0 },
      { id: 2, text: 'Maybe one more collegue with me.', value: 1 },
      { id: 3, text: 'Work as a part of a small group.', value: 2 },
      { id: 4, text: 'Work with as many people as possible.', value: 3 },
    ],
  },
  {
    id: 4,
    question: 'What is your idea of the perfect date?',
    title: 'Dating',
    options: [
      { id: 1, text: 'I do not like dating.', value: 0 },
      {
        id: 2,
        text: 'Something quiet and intimate like watching a movie together on the couch.',
        value: 1,
      },
      {
        id: 3,
        text: 'Dinner at a nice restaurant followed by a walk by seaside.',
        value: 2,
      },
      { id: 4, text: 'A live concert surrounded by other screaming fans.', value: 3 },
    ],
  },
]

export default Questions
