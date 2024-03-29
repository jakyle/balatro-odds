
const tenths = Array.from({
  length: 9
}, (_, i) => i + 1).reduce((acc, i) => ({
    ...acc,
    [`${i}/10`]: `${i * 10}%`
  }), {})

const hundredths = Array.from({
  length: 99
}, (_, i) => i + 1).reduce((acc, i) => ({
    ...acc,
    [`${i}/100`]: `${i}%`
  }), {})

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      data: {
        'xs': 'size~="xs"',
        'sm': 'size~="sm"',
        'md': 'size~="md"',
        'lg': 'size~="lg"',
        'xl': 'size~="xl"',
        '2xl': 'size~="2xl"',
        'selected': 'state~="selected"',
        'unselected': 'state~="unselected"',
        'discarded': 'state~="discarded"',
        'hand': 'state~="hand"',
        'deck': 'state~="deck"',
      },
      aspectRatio: {
        '2/3': '2/3'
      },
      containers: {
        '2xs': '16rem',
        '3xs': '14rem',
        '4xs': '12rem',
        '5xs': '10rem',
        '6xs': '8rem',
        '7xs': '6rem',
        '8xs': '4rem',
        '9xs': '2rem',
      },
      spacing: {
        ...tenths,
        ...hundredths,
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
